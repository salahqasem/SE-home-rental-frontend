import { useContext, useEffect, useState } from "react";
import { PropertyContainer } from "../../homePage/style";
import MyProperty from "./my-property";
import { getMyProperties } from "../../../services/PropertyService";
import { SetJWT } from "../../../store/context";
import Swal from 'sweetalert2'

const MyProperties = () => {
    const [properties, setProperties] = useState([])
    const { jwt } = useContext(SetJWT);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        getMyProperties(jwt).then((result) => {
            setProperties(result.data)
        }).catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        });
    }, [flag])

    return (
        <PropertyContainer>
            {
                properties && properties.map(p => {
                    console.log(p);
                    return <MyProperty flag={flag} setFlag={setFlag} key={p.id} id={p.id} imgSource={p.pictures[0].path} price={p.price} area={p.area} rooms={p.rooms} status={p.status} propertyType={p.propertyType} clickCount={p.clickCount} />
                })
            }
        </PropertyContainer >
    )
}

export default MyProperties;