import axios, { AxiosError } from "axios";
import { primaryURL } from "../endpoints/Endpoints";

const Axiosinstance = axios.create({
    baseURL: primaryURL
})

export default Axiosinstance