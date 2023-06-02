"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMultiLineAddress = exports.createSingleLineAddress = exports.AddressPointType = void 0;
var AddressPointType;
(function (AddressPointType) {
    AddressPointType["Description"] = "c.p.";
    AddressPointType["Registration"] = "c.ev.";
})(AddressPointType = exports.AddressPointType || (exports.AddressPointType = {}));
const prague = "Praha";
const createSingleLineAddress = (address) => {
    return (0, exports.createMultiLineAddress)(address).join(", ");
};
exports.createSingleLineAddress = createSingleLineAddress;
const createMultiLineAddress = (address) => {
    const result = {
        firstRow: "",
        secondRow: "",
        thirdRow: "",
    };
    if (!!address.street && !municipalityPartEqualsCity(address)) {
        result.secondRow = address.municipalityPart;
    }
    if (!address.street) {
        if (municipalityPartEqualsCity(address)) {
            let buildingType = address.type === AddressPointType.Registration ? " č.ev. " : "č.p. ";
            result.firstRow = buildingType + address.houseNumber;
        }
        else {
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
exports.createMultiLineAddress = createMultiLineAddress;
const threeRowsAddressToArray = (address) => {
    const result = [
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
const buildHouseNumber = (address) => {
    if (address.type === AddressPointType.Registration) {
        return "č.ev. " + address.houseNumber;
    }
    return address.houseNumber;
};
const buildOrientationalNumber = (address) => {
    var _a;
    if (address.orientationalNumber) {
        return ("/" +
            address.orientationalNumber +
            ((_a = address.orientationalNumberLetter) !== null && _a !== void 0 ? _a : ""));
    }
    return "";
};
const buildLastRow = (result, address) => {
    if (!result.secondRow) {
        if (address.city === prague) {
            result.secondRow = address.postalCode + " " + address.pragueDistrict;
        }
        else {
            result.secondRow = address.postalCode + " " + address.city;
        }
    }
    else {
        if (address.city === prague) {
            result.thirdRow = address.postalCode + " " + address.pragueDistrict;
        }
        else {
            result.thirdRow = address.postalCode + " " + address.city;
        }
    }
};
const municipalityPartEqualsCity = (address) => {
    return address.municipalityPart === address.city;
};
