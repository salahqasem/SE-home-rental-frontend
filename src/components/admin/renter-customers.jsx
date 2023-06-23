import { useContext, useEffect, useState } from "react";
import { LastTenCustomer } from "../../services/AdminService";
import { SetJWT } from "../../store/context";
import { InfoLabel, PriceLabel } from "../property/style";
import { UsersContainer } from "./style";
import { PropertyContainer } from "../homePage/style";
import Swal from 'sweetalert2'

const RentedCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const { jwt } = useContext(SetJWT);

    useEffect(() => {
        LastTenCustomer({ jwt })
            .then((res) => {
                setCustomers(res.data);
            })
            .catch((err) => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            }));
    }, []);

    return (<div style={{ marginTop: '4rem' }}>
        <PriceLabel style={{ marginLeft: '40%' }}>Last 10 Customers</PriceLabel>
        <PropertyContainer style={{ marginTop: '2rem' }}>
            {customers.map((c) => {
                return (
                    <UsersContainer key={c.id}>
                        <InfoLabel>Email: {c.email}</InfoLabel>
                        <InfoLabel style={{ marginTop: '1rem' }}>Name: {c.name}</InfoLabel>
                    </UsersContainer>
                );
            })}
        </PropertyContainer>

    </div>)
}

export default RentedCustomers;