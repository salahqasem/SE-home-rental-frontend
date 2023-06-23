import { useContext, useRef, useState } from "react";
import { InfoLabel, PropertyImage, StatusLabel } from "../../property/style";
import { Button, Input, SignText } from "../../shared/style";
import { Container, PropertyCard } from "./style";
import { updateProperty, deleteProperty } from "../../../services/PropertyService";
import { SetJWT } from "../../../store/context";
import Swal from 'sweetalert2'

const MyProperty = (props) => {
    const { jwt } = useContext(SetJWT);


    const propertyRef = useRef();

    const save = (e) => {
        e.preventDefault();
        Swal.showLoading()

        const data = {
            price: propertyRef.current.price.value,
            area: propertyRef.current.area.value,
            rooms: propertyRef.current.rooms.value,
            propertyType: propertyRef.current.propertyType.value,
            status: propertyRef.current.status.value,
            id: props.id
        }
        updateProperty(data, jwt).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Updated!',
            })
        }).catch(err => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        }))
    }


    const handleDelete = id => {
        if (id) {
            deleteProperty(id, jwt).then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Deleted!',
                })
                props.setFlag(!props.flag)
            }).catch(err => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            }))
        }
    }

    return (
        <PropertyCard ref={propertyRef}>
            <PropertyImage src={props.imgSource} />
            <Input defaultValue={props.price} name="price" />
            <Input defaultValue={props.area} name="area" />
            <Input defaultValue={props.rooms} name="rooms" />
            <Input defaultValue={props.propertyType} name="propertyType" />
            <Input defaultValue={props.status} name="status" />
            <InfoLabel>Clickes: {props.clickCount}</InfoLabel>
            <Container>
                <Button onClick={(e) => save(e)}>Save Changes</Button>
                <StatusLabel onClick={() => handleDelete(props.id)} status={"PENDING"}>Delete</StatusLabel>
            </Container>
        </PropertyCard >
    )
}
export default MyProperty;