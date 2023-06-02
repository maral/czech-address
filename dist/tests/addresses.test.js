"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const src_1 = require("../src");
const addresses = [
    {
        address: "Studentská 1903/14a, Dejvice, 16000 Praha 6",
        type: src_1.AddressPointType.Description,
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
        type: src_1.AddressPointType.Registration,
        houseNumber: 9998,
        city: "Praha",
        postalCode: "11800",
        district: "Praha 1",
        municipalityPart: "Malá Strana",
        pragueDistrict: "Praha 1",
    },
    {
        address: "Černovičky č.ev. 276, Slatina, 62700 Brno",
        type: src_1.AddressPointType.Registration,
        houseNumber: 276,
        city: "Brno",
        postalCode: "62700",
        street: "Černovičky",
        district: "Brno-Slatina",
        municipalityPart: "Slatina",
    },
    {
        address: "Lhenická 1120/1, České Budějovice 2, 37005 České Budějovice",
        type: src_1.AddressPointType.Description,
        houseNumber: 1120,
        city: "České Budějovice",
        postalCode: "37005",
        street: "Lhenická",
        orientationalNumber: 1,
        municipalityPart: "České Budějovice 2",
    },
    {
        address: "Žamberecká 339, 51601 Vamberk",
        type: src_1.AddressPointType.Description,
        houseNumber: 339,
        city: "Vamberk",
        postalCode: "51601",
        street: "Žamberecká",
        municipalityPart: "Vamberk",
    },
    {
        address: "Dolní Adršpach 13, 54957 Adršpach",
        type: src_1.AddressPointType.Description,
        houseNumber: 13,
        city: "Adršpach",
        postalCode: "54957",
        municipalityPart: "Dolní Adršpach",
    },
    {
        address: "č.p. 111, 50333 Praskačka",
        type: src_1.AddressPointType.Description,
        houseNumber: 111,
        city: "Praskačka",
        postalCode: "50333",
        municipalityPart: "Praskačka",
    },
];
(0, globals_1.describe)("address-builder - test correct address generation", () => {
    (0, globals_1.test)("Prague addresses", () => {
        addresses.forEach((address) => {
            (0, globals_1.expect)((0, src_1.createSingleLineAddress)(address)).toBe(address.address);
        });
    });
});
