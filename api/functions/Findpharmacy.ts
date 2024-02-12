import { FindPharmacyInterface } from "@/typescripts/interfaces/Findpharmacy.interface";
import Axiosinstance from "../axiosinstance/Axiosinstance";
import { Endpoints } from "../endpoints/Endpoints";

export const FindPharmacyFunc = async (data: FindPharmacyInterface) => {
    try {
        const response = await Axiosinstance.post(Endpoints.findpharmacy.pharmacy, data )
        return response?.data?.data || []
    } catch (error) {
        console.log("Fetch Id Error", error);
        return []
    }
}


