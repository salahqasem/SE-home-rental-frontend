import {
  Icon,
  InfoConatiner,
  InfoLabel,
  PriceLabel,
  PropertyCard,
  PropertyImage,
  StatusContainer,
  StatusLabel,
} from "./style";
import { useNavigate } from "react-router-dom";
import heart from "../../assets/icons/heart.png";
import redHeart from "../../assets/icons/redHeart.png";
import { useContext, useEffect, useState } from "react";
import Popup from "./popup";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { SetJWT } from "../../store/context";
import { RemovePropertyToFavouriteList } from "../../services/FavoritesService";
import { updateCounts } from "../../services/PropertyService";

const Property = (props) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);
  const [click, setClick] = useState(false);
  const { jwt, userRole } = useContext(SetJWT);

  const setFavIcon = (e) => {
    e.stopPropagation();

    if (props.favList.includes(props.id)) {
      RemovePropertyToFavouriteList(jwt, props.id)
        .then((res) => {
          props.setFlag(!props.flag);
        })
        .catch((err) => console.log(err));
    } else {
      setFav(!fav);
      setClick(true);
      disableBodyScroll(document);
    }
  };

  useEffect(() => {
    enableBodyScroll(document);
  }, []);

  const childData = (data) => {
    setClick(data);
    enableBodyScroll(document);
  };

  return (
    <PropertyCard
      onClick={() => {
        if (
          !click &&
          jwt &&
          props.status !== "CONTINGENT" &&
          userRole === "CUSTOMER"
        ) {
          updateCounts(props.id, jwt).then(res => console.log(res)).catch(err => console.log(err))
          navigate(`/offer/${props.id}`, { state: { img: props.imgSource } });
        }
      }}
    >
      <PropertyImage src={props.imgSource} />
      <PriceLabel>{props.price}</PriceLabel>
      <InfoConatiner>
        <InfoLabel>{props.area},</InfoLabel>
        <InfoLabel> Rooms: {props.rooms},</InfoLabel>
        <InfoLabel> {props.propertyType},</InfoLabel>
        <InfoLabel> {props.location}</InfoLabel>
      </InfoConatiner>
      <StatusContainer>
        <StatusLabel status={props.status}>{props.status}</StatusLabel>
        {jwt && userRole === "CUSTOMER" && (
          <Icon
            src={props.favList.includes(props.id) ? redHeart : heart}
            onClick={(e) => setFavIcon(e)}
          />
        )}
      </StatusContainer>
      {click && fav && (
        <Popup
          onData={childData}
          propid={props.id}
          flag={props.flag}
          setFlag={props.setFlag}
        />
      )}
    </PropertyCard>
  );
};

export default Property;
