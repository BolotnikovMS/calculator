import { useCalculatorStore } from '@/core/store/calculator'
import { type FC } from 'react'

const Results: FC = () => {
  const coefficient = useCalculatorStore(state => state.coefficient)
  const bias = useCalculatorStore(state => state.bias)

  return (
    <>
      <p>Результат: <span className='font-bold'>{coefficient}</span></p>
      <p>Смещение: <span className='font-bold'>{bias}</span></p>
    </>
  )
}

export default Results
