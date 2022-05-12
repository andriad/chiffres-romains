import {Convertisseur} from '../js/utils.js'

let convertisseur;

beforeAll(() => {
    convertisseur = new Convertisseur()
})

test('-1 == ""', () => {
    expect(convertisseur.convert(-1).toBe(""))
})

test('0 == ""', () => {
    expect(convertisseur.convert(0).toBe(""))
})

test('1 == "I"', () => {
    expect(convertisseur.convert(1).toBe("I"))
})

test('2 == "II"', () => {
    expect(convertisseur.convert(2).toBe("II"))
})

test('3 == "III"', () => {
    expect(convertisseur.convert(3).toBe("III"))
})

test('5 == "V"', () => {
    expect(convertisseur.convert(5)).toBe("V")
})

test('10 == "X"', () => {
    expect(convertisseur.convert(10)).toBe("X")
})

test('50 == "L"', () => {
    expect(convertisseur.convert(50)).toBe("L")
})

test('100 == "C"', () => {
    expect(convertisseur.convert(100)).toBe("C")
})

test('500 == "D"', () => {
    expect(convertisseur.convert(500)).toBe("D")
})

test('1000 == "M"', () => {
    expect(convertisseur.convert(1000)).toBe("M")
})