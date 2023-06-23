import { useContext, useRef, useState } from "react";
import { Button, Input } from "../../shared/style";
import { AddPropertiesContainer } from "./style";
import { addProperty } from "../../../services/PropertyService";
import { useNavigate } from "react-router-dom";
import { SetJWT } from "../../../store/context";
import Swal from 'sweetalert2'

const AddProperties = () => {

    const addPropertiesRef = useRef();
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const { jwt } = useContext(SetJWT);

    const addProperties = (e) => {
        e.preventDefault();
        Swal.showLoading();

        const formData = new FormData();
        formData.append('imgs', selectedImage);
        formData.append('price', addPropertiesRef.current.price.value)
        formData.append('propertyType', addPropertiesRef.current.propertType.value)
        formData.append('rooms', addPropertiesRef.current.numberOfRooms.value)
        formData.append('contractType', addPropertiesRef.current.contractType.value)
        formData.append('location', addPropertiesRef.current.location.value)
        formData.append('area', addPropertiesRef.current.area.value)

        addProperty(formData, jwt).then(res => {
            Swal.close()
            navigate('/')
        }).catch(err => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        }))
    }

    return <div style={{ display: 'flex', justifyContent: "center", alignItem: "center", marginTop: '4rem' }}>
        <AddPropertiesContainer ref={addPropertiesRef}>
            <h1>Add Properties</h1>
            <Input placeholder="Price" type="number" name="price" />
            <Input placeholder="Property Type" name="propertType" />
            <Input placeholder="Number Of Rooms" type="number" name="numberOfRooms" />
            <Input placeholder="Area" type="number" name="area" />
            <Input placeholder="Contract Type" name="contractType" />
            <Input placeholder="Location" name="location" />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                }}
            />
            <Button onClick={(e) => addProperties(e)}>Add Properties</Button>
        </AddPropertiesContainer>
    </div>
}

export default AddProperties;