import { typeCalculationData } from "@/data/typeCalculationData"

export type TTypeCalculation = (typeof typeCalculationData)[number]['value']
