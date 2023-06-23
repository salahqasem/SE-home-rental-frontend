import { useContext, useEffect, useState } from "react";
import {
    LastTenRented,
} from "../../services/AdminService";
import { SetJWT } from "../../store/context";
import { PropertyContainer } from "../homePage/style";
import Property from "../property";
import { PriceLabel } from "../property/style";
import Swal from 'sweetalert2'

const AdminDashboard = () => {
    const { jwt } = useContext(SetJWT);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        LastTenRented({ jwt })
            .then((res) => {
                setProperties(res.data);
            })
            .catch((err) => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            }));
    }, []);

    return (
        <>
            <div style={{ marginTop: '4rem' }}>
                <PriceLabel style={{ marginLeft: '40%' }}>Last 10 rented properties</PriceLabel>
                <PropertyContainer style={{ marginTop: '4rem' }}>
                    {properties &&
                        properties.map((p) => {
                            return (
                                <Property
                                    key={p.id}
                                    id={p.id}
                                    imgSource={p.pictures[0].path}
                                    price={"$" + p.price}
                                    area={p.area + "sqft"}
                                    rooms={p.rooms}
                                    status={p.status}
                                    propertyType={p.propertyType}
                                />
                            );
                        })}
                </PropertyContainer>
            </div>
        </>
    );
};

export default AdminDashboard;
