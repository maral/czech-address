export declare enum AddressPointType {
    Description = "c.p.",
    Registration = "c.ev."
}
export interface AddressPoint {
    type: AddressPointType;
    street?: string;
    houseNumber: number;
    orientationalNumber?: number;
    orientationalNumberLetter?: string;
    postalCode: string;
    city: string;
    district?: string;
    pragueDistrict?: string;
    municipalityPart: string;
}
export interface ThreeRowsAddress {
    firstRow: string;
    secondRow: string;
    thirdRow: string;
}
export declare const createSingleLineAddress: (address: AddressPoint) => string;
export declare const createMultiLineAddress: (address: AddressPoint) => string[];
