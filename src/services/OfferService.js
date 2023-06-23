import axios from "axios";
import { API_URL } from "../config";


export const getOffers = (jwt) => {
    return axios.get(API_URL + 'offers/user' , {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
}


export const changeOfferStatus = (status , offerId , jwt) => {
    return axios.put(API_URL + 'offers/' + offerId  , {
        status:status
    } ,{
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
}