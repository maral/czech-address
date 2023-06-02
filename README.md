# czech-address
Utility for composing Czech addresses according to the _Vyhláška č. 359/2011 Sb._ This is
handy when working with address points taken from the RÚIAN database. You can find any
address point on the [RÚIAN remote access page](https://vdp.cuzk.cz/vdp/ruian/overeniadresy?atfill=).

## Installation
```
npm install czech-address
```
or
```
yarn add czech-address
```

## Usage
You can use the library in TypeScript (for JS, just remove the typings):
```
import { createSingleLineAddress, AddressPoint, AddressPointType }

const addressPoint: AddressPoint = {
  type: AddressPointType.Description, // "c.ev." in JS (or "c.p.")
  houseNumber: 1903,
  city: "Praha",
  postalCode: "16000",
  street: "Studentská",
  orientationalNumber: 14,
  orientationalNumberLetter: "a",
  district: "Praha 6",
  municipalityPart: "Dejvice",
  pragueDistrict: "Praha 6",
}

// prints "Studentská 1903/14a, Dejvice, 16000 Praha 6"
console.log(createSingleLineAddress(addressPoint));

// returns [ "Studentská 1903/14a", "Dejvice", "16000 Praha 6" ]
const address = createMultiLineAddress(addressPoint);
```

The following fields might be omitted (some address points do not have those): `street`, `orientationalNumber`, `orientationalNumberLetter`, `district`, `pragueDistrict`. The field `municipalityPart` is required,
because it is included in most addreeses and is easy to forget. In smaller towns and villages, the `municipalityPart`
is often identical to the town name (`city`).

## Credits
This library was based on code from [RUIAN-search](https://github.com/letomas/RUIAN-search), app made by [letomas](https://github.com/letomas).