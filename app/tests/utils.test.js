import {Convertisseur} from '../js/utils.js'


let convertisseur;

beforeAll(() => {
    convertisseur = new Convertisseur()
})

test('-1 == ""', () => {
    expect(convertisseur.arabicToRoman(-1)).toBe("")
})

test('0 == ""', () => {
    expect(convertisseur.arabicToRoman(0)).toBe("")
})

test('1 == "I"', () => {
    expect(convertisseur.arabicToRoman(1)).toBe("I")
})

test('2 == "II"', () => {
    expect(convertisseur.arabicToRoman(2)).toBe("II")
})

test('3 == "III"', () => {
    expect(convertisseur.arabicToRoman(3)).toBe("III")
})

test('5 == "V"', () => {
    expect(convertisseur.arabicToRoman(5)).toBe("V")
})

test('10 == "X"', () => {
    expect(convertisseur.arabicToRoman(10)).toBe("X")
})

test('50 == "L"', () => {
    expect(convertisseur.arabicToRoman(50)).toBe("L")
})

test('100 == "C"', () => {
    expect(convertisseur.arabicToRoman(100)).toBe("C")
})

test('500 == "D"', () => {
    expect(convertisseur.arabicToRoman(500)).toBe("D")
})

test('1000 == "M"', () => {
    expect(convertisseur.arabicToRoman(1000)).toBe("M")
})

test('4000 == "Number too high : 4000"', () => {
    expect(() => convertisseur.arabicToRoman(4000)).toThrow(Error)
})

test('1000 == "M"', () => {
    expect(convertisseur.arabicToRoman(1000)).toBe("M")
})

test('4 == "IV"', () => {
    expect(convertisseur.arabicToRoman(4)).toBe("IV")
})

test('20 == "XX"', () => {
    expect(convertisseur.arabicToRoman(20)).toBe("XX")
})

test('30 == "XXX"', () => {
    expect(convertisseur.arabicToRoman(30)).toBe("XXX")
})

test('40 == "XL"', () => {
    expect(convertisseur.arabicToRoman(40)).toBe("XL")
})

test('9 == "IX"', () => {
    expect(convertisseur.arabicToRoman(9)).toBe("IX")
})

test('90 == "XC"', () => {
    expect(convertisseur.arabicToRoman(90)).toBe("XC")
})

test('400 == "CD"', () => {
    expect(convertisseur.arabicToRoman(400)).toBe("CD")
})

test('900 == "CM"', () => {
    expect(convertisseur.arabicToRoman(900)).toBe("CM")
})

test('99 == "XCIX"', () => {
    expect(convertisseur.arabicToRoman(99)).toBe("XCIX")
})

test('999 == "CMXCIX"', () => {
    expect(convertisseur.arabicToRoman(999)).toBe("CMXCIX")
})

