import { calculate } from "./calculate"

interface ITestData {
  typeCalculation: string
  quanta: number
  voltage: number
  currentCoefficient: number
  quantity: string
  expected: {
    coefficient: number,
    bias: number
  }
}

describe('Тесты функций calculate', () => {
  test.each<ITestData>([
    { typeCalculation: 'amperage', quanta: 5, voltage: 6, currentCoefficient: 100, quantity: 'watts', expected: { coefficient: 20, bias: 0 } },
    { typeCalculation: 'power', quanta: 5, voltage: 6, currentCoefficient: 100, quantity: 'watts', expected: { coefficient: 207.8460969, bias: 0 } },
    { typeCalculation: 'powerReverse', quanta: 5, voltage: 6, currentCoefficient: 100, quantity: 'megawatts', expected: { coefficient: 0.0004157, bias: -0.0010392 } },
  ])('Тест функции с корректными значениями calculate($typeCalculation, $quanta, $voltage, $currentCoefficient, $quantity) результат $expected', ({ typeCalculation, quanta, voltage, currentCoefficient, quantity, expected }) => {
    expect(calculate(typeCalculation, quanta, voltage, currentCoefficient, quantity)).toMatchObject(expected)
  })

  test.each<ITestData>([
    { typeCalculation: '', quanta: 5, voltage: 6, currentCoefficient: 100, quantity: 'watts', expected: { coefficient: 0, bias: 0 } },
    { typeCalculation: 'test', quanta: 5, voltage: 6, currentCoefficient: 100, quantity: 'tes', expected: { coefficient: 0, bias: 0 } },
  ])('Тест функции с не корректными значениями calculate($typeCalculation, $quanta, $voltage, $currentCoefficient, $quantity) результат $expected', ({ typeCalculation, quanta, voltage, currentCoefficient, quantity }) => {
    expect(calculate(typeCalculation, quanta, voltage, currentCoefficient, quantity)).toBeNull()
  })
})
