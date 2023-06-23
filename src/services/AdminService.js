import axios from "axios";
import { API_URL } from "../config";

export const LastTenRented = (jwt) => {
  return axios.get(API_URL + "dashboard/recentprop", {
    headers: { Authorization: `Bearer ${jwt}` },
  });
};

export const LastTenCustomer = (jwt) => {
  return axios.get(API_URL + "dashboard/recentcustomers", {
    headers: { Authorization: `Bearer ${jwt}` },
  });
};

export const AllCustomersAndOwners = (jwt) => {
  return axios.get(API_URL + "admin/getallusers", {
    headers: { Authorization: `Bearer ${jwt}` },
  });
};

export const ToggleUserStatus = (jwt, user) => {
  return axios.put(API_URL + "admin/toggleuserstatus", user, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
};

export const ResetUserPassword = (jwt, user) => {
  return axios.put(API_URL + "admin/resetpassword", user, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
};
