import Cookies from "js-cookie";
import { changeOfferStatus } from "../../../services/OfferService";
import { InfoLabel, PropertyCard } from "../../property/style";
import { Button } from "../../shared/style";
import { ButtonContainer } from "./style";

const Application = (props) => {


    const handleAction = (status, id) => {
        changeOfferStatus(status, id, Cookies.get('accessToken')).then(res => {
            props.setFlag(!props.flag)
        }).catch(err => console.log(err))
    }

    return <PropertyCard style={{ display: "flex", flexDirection: "column", gap: 40, padding: '2rem' }}>
        <InfoLabel>Id: {props.id}</InfoLabel>
        <InfoLabel>Price: {props.price}</InfoLabel>
        <label style={{ whiteSpace: 'pre-wrap' }}>{props.message}</label>
        <InfoLabel>Date: {props.date}</InfoLabel>
        <InfoLabel>Status: {props.status}</InfoLabel>
        <ButtonContainer>
            <Button onClick={() => handleAction('ACCEPTED', props.id)}>Accept</Button>
            <Button onClick={() => handleAction('REJECTED', props.id)} style={{ marginLeft: '5px', backgroundColor: 'red' }}>Reject</Button>
            <Button onClick={() => handleAction('CANCELLED', props.id)} style={{ marginLeft: '5px', backgroundColor: 'blue' }}>Cancell</Button>
            <Button onClick={() => handleAction('OFFERED', props.id)} style={{ marginLeft: '5px', backgroundColor: 'green' }}>Offer</Button>
        </ButtonContainer>
    </PropertyCard>
}
export default Application;