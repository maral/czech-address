import { describe, expect, test } from "@jest/globals";
import { createSingleLineAddress, AddressPoint, AddressPointType } from "../src";

const addresses: (AddressPoint & {address: string }) [] = [
  {
    address: "Studentská 1903/14a, Dejvice, 16000 Praha 6",
    type: AddressPointType.Description,
    houseNumber: 1903,
    city: "Praha",
    postalCode: "16000",
    street: "Studentská",
    orientationalNumber: 14,
    orientationalNumberLetter: "a",
    district: "Praha 6",
    municipalityPart: "Dejvice",
    pragueDistrict: "Praha 6",
  },
  {
    address: "Malá Strana č.ev. 9998, 11800 Praha 1",
    type: AddressPointType.Registration,
    houseNumber: 9998,
    city: "Praha",
    postalCode: "11800",
    district: "Praha 1",
    municipalityPart: "Malá Strana",
    pragueDistrict: "Praha 1",
  },
  {
    address: "Černovičky č.ev. 276, Slatina, 62700 Brno",
    type: AddressPointType.Registration,
    houseNumber: 276,
    city: "Brno",
    postalCode: "62700",
    street: "Černovičky",
    district: "Brno-Slatina",
    municipalityPart: "Slatina",
  },
  {
    address: "Lhenická 1120/1, České Budějovice 2, 37005 České Budějovice",
    type: AddressPointType.Description,
    houseNumber: 1120,
    city: "České Budějovice",
    postalCode: "37005",
    street: "Lhenická",
    orientationalNumber: 1,
    municipalityPart: "České Budějovice 2",
  },
  {
    address: "Žamberecká 339, 51601 Vamberk",
    type: AddressPointType.Description,
    houseNumber: 339,
    city: "Vamberk",
    postalCode: "51601",
    street: "Žamberecká",
    municipalityPart: "Vamberk",
  },
  {
    address: "Dolní Adršpach 13, 54957 Adršpach",
    type: AddressPointType.Description,
    houseNumber: 13,
    city: "Adršpach",
    postalCode: "54957",
    municipalityPart: "Dolní Adršpach",
  },
  {
    address: "č.p. 111, 50333 Praskačka",
    type: AddressPointType.Description,
    houseNumber: 111,
    city: "Praskačka",
    postalCode: "50333",
    municipalityPart: "Praskačka",
  },
];

describe("address-builder - test correct address generation", () => {
  test("Prague addresses", () => {
    addresses.forEach((address) => {
      expect(createSingleLineAddress(address)).toBe(
        address.address
      );
    });
  });
});
