import { Button, Input } from "../../shared/style";
import { Content, Header, ListContainer, ListName, Overlay } from "./style";

import { useContext, useEffect, useRef, useState } from "react";
import { SetJWT } from "../../../store/context";
import {
  GetFavouriteLists,
  AddPropertyToFavouriteList,
  CreateNewFavList,
} from "../../../services/FavoritesService.js";

const Popup = (props) => {
  const { jwt } = useContext(SetJWT);
  const [favoriteLists, setFavoriteLists] = useState([]);
  const [flag, setFlag] = useState([]);

  const newListRef = useRef("");

  useEffect(() => {
    GetFavouriteLists(jwt)
      .then((res) => {
        setFavoriteLists(res.data);
      })
      .catch((err) => console.log(err));
  }, [flag]);

  const closeFunc = (e) => {
    e.preventDefault();
    props.onData(false);
  };

  const HandleAddToListClick = (e, listId) => {
    e.preventDefault();

    AddPropertyToFavouriteList(jwt, listId, props.propid)
      .then((res) => {
        props.setFlag(!props.flag);
      })
      .catch((err) => console.log(err));

    closeFunc(e);
    props.onData(false);
  };

  const HandleCreateNewFavListClick = (e) => {
    e.preventDefault();

    CreateNewFavList(jwt, newListRef.current.value)
      .then((res) => {
        newListRef.current.value = "";
        setFlag(!flag);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Overlay>
      <Content>
        <Header>
          <h2>Favorit List</h2>
          <Button onClick={(e) => closeFunc(e)}>Close</Button>
        </Header>
        <ListContainer style={{ display: "flex", flexDirection: "column" }}>
          {favoriteLists.map((l) => {
            return (
              <div key={l.id}>
                <ListName>{l.name + "     "}</ListName>
                <Button onClick={(e) => HandleAddToListClick(e, l.id)}>
                  Add to this list
                </Button>
              </div>
            );
          })}
        </ListContainer>
        <Header>
          <Input
            ref={newListRef}
            type="text"
            style={{ width: "20rem" }}
            placeholder="Add a new List"
          />
          <Button onClick={(e) => HandleCreateNewFavListClick(e)}>
            Add new list
          </Button>
        </Header>
      </Content>
    </Overlay>
  );
};

export default Popup;
