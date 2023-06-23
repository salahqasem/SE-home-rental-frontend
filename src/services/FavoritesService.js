import axios from "axios";
import { API_URL } from "../config";

export const GetFavouriteLists = (jwt) => {
  return axios.get(API_URL + "favourite", {
    headers: { Authorization: `Bearer ${jwt}` },
  });
};

export const GetFavouriteProperties = (jwt) => {
  return axios.get(API_URL + "favourite/alluserfavouriteprops", {
    headers: { Authorization: `Bearer ${jwt}` },
  });
};

export const AddPropertyToFavouriteList = (jwt, listId, propertyId) => {
  return axios.post(
    API_URL +
    "favourite/addpropertytofavorite?listid=" +
    listId +
    "&propertyid=" +
    propertyId,
    {},
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const RemovePropertyToFavouriteList = (jwt, propertyId) => {
  return axios.delete(
    API_URL + "favourite/removepropertytofavorite?propertyid=" + propertyId,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const CreateNewFavList = (jwt, name) => {
  return axios.post(
    API_URL + "favourite",
    { name: name },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }
  );
};
