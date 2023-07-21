export enum AddressPointType {
  Description = "c.p.", // číslo popisné
  Registration = "c.ev.", // číslo evidenční
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

const prague = "Praha";

export const createSingleLineAddress = (address: AddressPoint): string => {
  return createMultiLineAddress(address).join(", ");
};

export const createMultiLineAddress = (address: AddressPoint): string[] => {
  const result: ThreeRowsAddress = {
    firstRow: "",
    secondRow: "",
    thirdRow: "",
  };
  if (!!address.street && !municipalityPartEqualsCity(address)) {
    result.secondRow = address.municipalityPart;
  }

  if (!address.street) {
    if (municipalityPartEqualsCity(address)) {
      let buildingType =
        address.type === AddressPointType.Registration ? "č.ev. " : "č.p. ";
      result.firstRow = buildingType + address.houseNumber;
    } else {
      result.firstRow = address.municipalityPart;
      result.firstRow += " " + buildHouseNumber(address);
    }

    result.firstRow += buildOrientationalNumber(address);
    buildLastRow(result, address);

    return threeRowsAddressToArray(result);
  }

  result.firstRow = address.street;
  result.firstRow += " " + buildHouseNumber(address);
  result.firstRow += buildOrientationalNumber(address);
  buildLastRow(result, address);

  return threeRowsAddressToArray(result);
};

const threeRowsAddressToArray = (address: ThreeRowsAddress): string[] => {
  const result: string[] = [
    address.firstRow,
    address.secondRow,
  ];
  result.push();
  result.push();
  if (address.thirdRow) {
    result.push(address.thirdRow);
  }
  return result;
};

const buildHouseNumber = (address: AddressPoint) => {
  if (address.type === AddressPointType.Registration) {
    return "č.ev. " + address.houseNumber;
  }

  return address.houseNumber;
};

const buildOrientationalNumber = (address: AddressPoint) => {
  if (address.orientationalNumber) {
    return (
      "/" +
      address.orientationalNumber +
      (address.orientationalNumberLetter ?? "")
    );
  }
  return "";
};

const buildLastRow = (result: ThreeRowsAddress, address: AddressPoint) => {
  if (!result.secondRow) {
    if (address.city === prague) {
      result.secondRow = address.postalCode + " " + address.pragueDistrict;
    } else {
      result.secondRow = address.postalCode + " " + address.city;
    }
  } else {
    if (address.city === prague) {
      result.thirdRow = address.postalCode + " " + address.pragueDistrict;
    } else {
      result.thirdRow = address.postalCode + " " + address.city;
    }
  }
};

const municipalityPartEqualsCity = (address: AddressPoint) => {
  return address.municipalityPart === address.city;
};
