import { convertValue } from "./convertValue"

interface ITestData {
  value: number
  quantity: string
  expected: number
}

describe('Тесты функций convertValue', () => {
  test.each<ITestData>([
    { value: 207.8460969, quantity: 'watts', expected: 207.8460969 },
    { value: 207.8460969, quantity: 'kilowatts', expected: 0.2078460969 },
    { value: 207.8460969, quantity: 'megawatts', expected: 0.0002078460969 },
    { value: 1, quantity: 'watts', expected: 1 },
    { value: 1, quantity: 'kilowatts', expected: 0.001 },
    { value: 1, quantity: 'megawatts', expected: 0.000001 },
    { value: -5, quantity: 'watts', expected: -5 },
    { value: -5, quantity: 'kilowatts', expected: -0.005 },
    { value: -5, quantity: 'megawatts', expected: -0.000005 },
  ])('Тест функций с корректными значениями convertValue($value, $quantity) результат $expected', ({ value, quantity, expected }) => {
    expect(convertValue(value, quantity)).toBe(expected)
  })

  test.each<ITestData>([
    { value: 207.8460969, quantity: '', expected: 0 },
    { value: 207.8460969, quantity: 'test', expected: 0 },
  ])('Тест функций с не корректными значениями convertValue($value, $quantity) результат $expected', ({ value, quantity, expected }) => {
    expect(convertValue(value, quantity)).toEqual(expected)
  })
})
