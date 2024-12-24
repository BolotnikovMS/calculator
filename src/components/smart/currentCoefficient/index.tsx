import { Input } from '@/components/ui/input'
import { useCalculatorStore } from '@/core/store/calculator'
import { useErrorStore } from '@/core/store/errors'
import { ChangeEvent, type FC } from 'react'

const CurrentCoefficientInput: FC = () => {
  const currentCoefficient = useCalculatorStore(state => state.currentCoefficient)
  const setCurrentCoefficient = useCalculatorStore(state => state.setCurrentCoefficient)
  const setError = useErrorStore(state => state.addError)
  const removeError = useErrorStore(state => state.removeError)
  const changeCurrentCoefficient = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (/^\d*\.?\d*$/.test(value)) {
      setCurrentCoefficient(+value)
      removeError('currentCoefficientError')
    } else {
      removeError('currentCoefficientError')
      setError('Поле "Коэффициент по току" должно быть числом!', 'currentCoefficientError')
    }
  }

  return (
    <Input
      className='max-w-[300px]'
      type='text'
      onChange={(e) => changeCurrentCoefficient(e)}
      value={!currentCoefficient ? '' : currentCoefficient}
      placeholder='Коэффициент по току'
      aria-autocomplete='none'
    />
  )
}

export default CurrentCoefficientInput
