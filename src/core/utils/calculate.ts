type TCalculate = (typeCalculation: string, quanta: number, voltage: number, currentCoefficient: number) => { coefficient: number, bias: number } | null

export const calculate: TCalculate = (typeCalculation, quanta, voltage, currentCoefficient) => {
  if (!quanta) return null

  let coefficient: number = 0
  let bias: number = 0

  switch (typeCalculation) {
    case 'amperage':
      coefficient = +currentCoefficient / +quanta

      break
    case 'voltage1':
      coefficient = voltage * 1.25 / +quanta

      break
    case 'voltage2':
      coefficient = (voltage * 1.25) / (+quanta * 2.5)
      bias = voltage * 0.75

      break
    case 'power':
      coefficient = (+currentCoefficient * voltage * Math.sqrt(3)) / +quanta

      break
    case 'powerReverse':
      coefficient = ((+currentCoefficient * voltage * Math.sqrt(3)) / +quanta) * 2
      bias = -(+currentCoefficient * voltage * Math.sqrt(3))

      break
    default:
      break
  }

  return { coefficient, bias }
}
