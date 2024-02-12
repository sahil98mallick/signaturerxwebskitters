import Axiosinstance from "../axiosinstance/Axiosinstance";
import { Endpoints } from "../endpoints/Endpoints";

export const Idvalidate = async (data: { prescriptionId: string, dateOfBirth: string }) => {
    try {
        const response = await Axiosinstance.post(Endpoints.validateid.validate, data);
        return response?.data || [];
    } catch (error) {
        console.log("Validation Error", error);
        return [];
    }
};

