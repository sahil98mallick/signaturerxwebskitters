export interface PatientDetails {
    status: string
    data: Data
}

export interface Data {
    id: string
    created_at: string
    patient: Patient
    medicines: Medicine[]
}

export interface Patient {
    name: string
    first_name: string
    last_name: string
}

export interface Medicine {
    object: string
    id: number
    description: string
    VPID: string
    APID: string
    qty: string
    directions: string
    created_at: string
    updated_at: string
    APPID: string
    price: string
    QTYVAL: number
    pricePerTablet: string
    totalPrice: string
}