import { Dispatch, SetStateAction } from "react"

interface customer {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: string,
    streetAddress: string,
    city: string,
    state: string,
    zipCode: string,
    createdAt: string,
    updatedAt: string,
}
export interface orders {
    filter(arg0: (d: any) => void): unknown
    sort(arg0: (a: any, b: any) => number): unknown
    length: number
    slice(startIndex: number, endIndex: number): unknown
    map(arg0: (d: orders) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    id: string,
    noOfBedrooms: string,
    noOfBathrooms: string,
    noOfLivingrooms: string,
    noOfKitchens: string,
    appointmentDate: string,
    appointmentTime: string,
    orderStatus: string,
    totalCost: BigInteger,
    createdAt: string,
    updatedAt: string
    customer: customer
}

export interface pagination {
    currentPage: number,
    itemsPerPage: number,
    noOfPages: number,
    handlePageChange: (page: number) => void
}

export interface MyContextType {
    data: orders[] | null,
    token: string | null,
    setToken: (value: React.SetStateAction<string>) => void,
    length: number | null,
}

export interface orderTablePropsTypes {
    sortOption: string;
    data: orders[];
    filterOption: string[];
  }