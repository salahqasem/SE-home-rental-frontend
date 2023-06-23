import { useContext, useEffect, useRef, useState } from "react";
import Property from "../property";
import { Button, Input, SignText } from "../shared/style";
import { property } from "../../services/PropertyService";
import {
  FilterContainer,
  HomePageContainer,
  ImageContainer,
  ImageText,
  MainImage,
  PropertyContainer,
  SearchBarWrapper,
  SearchInput,
} from "./style";
import { GetFavouriteProperties } from "../../services/FavoritesService";
import { SetJWT } from "../../store/context";
import Swal from "sweetalert2";

const HomePage = () => {
  const { jwt, userRole } = useContext(SetJWT);
  const [properties, setProperties] = useState([]);
  const imgSource =
    "https://s0.2mdn.net/sadbundle/14800419125408425439/image.jpg";
  const [filterData, setFilterData] = useState({});
  const [searchData, setSearchData] = useState("");
  const [allFav, setAllFav] = useState([]);
  const [flag, setFlag] = useState([]);

  const filterRef = useRef();

  useEffect(() => {
    if (jwt !== "" && typeof jwt == "string") {
      GetFavouriteProperties(jwt)
        .then((res) => setAllFav(res.data))
        .catch((err) => console.log(err));
    }
  }, [jwt, flag]);

  useEffect(() => {
    property({ params: filterData })
      .then((res) => setProperties(res.data))
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        })
      );
  }, [filterData]);

  const removeFilters = (e) => {
    e.preventDefault();
    setFilterData({});
    filterRef.current.maxPrice.value = "";
    filterRef.current.minPrice.value = "";
    filterRef.current.propertType.value = "";
    filterRef.current.numberOfRooms.value = "";
    filterRef.current.contractType.value = "";
    filterRef.current.location.value = "";
  };

  const applyFilters = (e) => {
    e.preventDefault();
    const data = {
      maxPrice: filterRef.current.maxPrice.value,
      minPrice: filterRef.current.minPrice.value,
      propertType: filterRef.current.propertType.value,
      noOfRooms: filterRef.current.numberOfRooms.value,
      contractType: filterRef.current.contractType.value,
      location: filterRef.current.location.value,
    };
    setFilterData(data);
  };

  const onSearch = (events) => {
    setSearchData(events.target.value);
  };

  return (
    <HomePageContainer>
      <ImageContainer>
        <MainImage src="https://hips.hearstapps.com/hmg-prod/images/edc110122abillama-006-1665505785.jpg?crop=1xw:1xh;center,top&resize=980:*"></MainImage>
        <ImageText>Find it. Tour it. Own it.</ImageText>
        <SearchBarWrapper>
          <SearchInput
            type="text"
            placeholder="Enter an address, or ZIP code"
            onChange={(event) => {
              onSearch(event);
            }}
          />
        </SearchBarWrapper>
      </ImageContainer>
      <FilterContainer ref={filterRef}>
        <Input type="text" name="maxPrice" placeholder="Max Price" />
        <Input type="text" name="minPrice" placeholder="Min Price" />
        <Input type="text" name="propertType" placeholder="Property Type" />
        <Input type="text" name="numberOfRooms" placeholder="Number of Rooms" />
        <Input type="text" name="contractType" placeholder="Contract Type" />
        <Input type="text" name="location" placeholder="Location" />
        <div>
          <Button onClick={(e) => applyFilters(e)}>Apply Filter</Button>
          <SignText
            style={{ marginLeft: "4rem" }}
            onClick={(e) => removeFilters(e)}
          >
            Remove Filters
          </SignText>
        </div>
      </FilterContainer>
      <PropertyContainer>
        {properties &&
          properties.map((p) => {
            return searchData && searchData.length > 0 ? (
              p.location.toLowerCase().includes(searchData.toLowerCase()) ? (
                <Property
                  key={p.id}
                  id={p.id}
                  favList={allFav}
                  imgSource={p.pictures[0]["path"]}
                  price={"$" + p.price}
                  area={p.area + "sqft"}
                  rooms={p.rooms}
                  status={p.status}
                  propertyType={p.propertyType}
                  location={p.location}
                  flag={flag}
                  setFlag={setFlag}
                />
              ) : (
                ""
              )
            ) : (
              <Property
                key={p.id}
                id={p.id}
                favList={allFav}
                imgSource={p.pictures[0]["path"]}
                price={"$" + p.price}
                area={p.area + "sqft"}
                rooms={p.rooms}
                status={p.status}
                propertyType={p.propertyType}
                flag={flag}
                location={p.location}
                setFlag={setFlag}
              />
            );
          })}
      </PropertyContainer>
    </HomePageContainer>
  );
};

export default HomePage;
