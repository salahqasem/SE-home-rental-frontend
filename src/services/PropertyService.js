import axios from "axios";
import { API_URL } from "../config";


export const property = (filter) => {
    return axios.get(API_URL + "property" , filter);
};

export const addProperty = (data , jwt) => {
    return axios.post(API_URL + "property", data , {
        headers:{
            "Content-Type":'multipart/form-data',
            Authorization: `Bearer ${jwt}`
        }
    });
}

export const getMyProperties = (jwt) => {
    return axios.get(API_URL+ "dashboard/ownerproperties" , {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
}

export const updateProperty = (data , jwt) => {
    return axios.put(API_URL + "property/", data , {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    });
}

export const deleteProperty = (id , jwt) => {
    return axios.delete(API_URL + "property/"+id, {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    });
}

export const updateCounts = (id , jwt) => {
    return axios.put(API_URL + 'property/' + id + '/clicks' , {} ,{
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
}