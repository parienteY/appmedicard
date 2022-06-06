import axios from "axios";
import { API_DEV } from "../env.json";
import { obtenerToken } from "../utils/helpers";
   

    export const AXIOS = obtenerToken().then(res => {
        return axios.create({
            baseURL: API_DEV,
        });
    })


