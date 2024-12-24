import { TQuantity } from "@/types/quantity.type"
import { TTypeCalculation } from "@/types/typeCalculation.type"
import { TVoltage } from "@/types/voltage.type"

export interface ICalculatorStore {
  currentCoefficient: number
  quanta: number
  voltage: TVoltage
  typeCalculation: TTypeCalculation
  quantity: TQuantity
  coefficient: number
  bias: number
  setCurrentCoefficient: (value: number) => void
  setQuanta: (value: number) => void
  setVoltage: (value: TVoltage) => void
  setTypeCalculation: (value: TTypeCalculation) => void
  setQuantity: (value: TQuantity) => void
  calculateResult: () => void
}
