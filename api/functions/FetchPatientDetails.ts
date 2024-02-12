import Axiosinstance from "../axiosinstance/Axiosinstance";
import { Endpoints } from "../endpoints/Endpoints";

export const fetchpatientdetails = async (prescriptionId: string | string[] | undefined) => {
    try {
        const response = await Axiosinstance.post(Endpoints.details.patientdetails, { prescriptionId });
        return response?.data.data || null;
    } catch (error) {
        throw new Error("Error fetching prescription: " + error);
    }
};
