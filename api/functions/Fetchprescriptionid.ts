import Axiosinstance from "../axiosinstance/Axiosinstance"
import { Endpoints } from "../endpoints/Endpoints"

export const fetchid = async (prescriptionId: string) => {
    try {
        const response = await Axiosinstance.post(Endpoints.prescribeidfetch.fetchid, { prescriptionId });
        return response?.data || null;
    } catch (error) {
        throw new Error("Error fetching prescription: " + error);
    }
};

