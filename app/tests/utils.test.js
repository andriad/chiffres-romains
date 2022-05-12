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

test('4000 == "Error"', () => {
    expect(() => convertisseur.arabicToRoman(4000)).toThrow(Error)
})

