export interface FindPharmacyInterface {
    length: number
    page: number
    dayOfWeek: string
    timeNow: string
    mapBoundary: MapBoundary
}

export interface MapBoundary {
    south: number
    west: number
    north: number
    east: number
}

export type Maploop = {
    item: String,
    key: Number
}


export type PharmacyListsInterface = {
    id: number
    name: string
    branch_logo?: string
    code: string
    pharmacyId: number
    email: string
    phone: string
    address: string
    city: string
    country: string
    postcode: string
    longitude: number
    latitude: number
    website: string
    isAvailableForAcceptOrder: boolean
    availabilityStatusBySuperAdmin: any
    superAdminAvailabilityStatusExpiry: any
    status: string
    createdAt: string
    ryftAccountId: string
    ryftAccountVerificationStatus: string
    ryftAccountFrozen: boolean
    ryftPayoutMethodStatus: string
    priceMultiple: string
    dispensingFee: string
    minimumItemCharge: string
}

