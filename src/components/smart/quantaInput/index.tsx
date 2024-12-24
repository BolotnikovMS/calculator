import { Input } from '@/components/ui/input'
import { useCalculatorStore } from '@/core/store/calculator'
import { useErrorStore } from '@/core/store/errors'
import { ChangeEvent, type FC } from 'react'

const QuantaInput: FC = () => {
  const quanta = useCalculatorStore(state => state.quanta)
  const setQuanta = useCalculatorStore(state => state.setQuanta)
  const setError = useErrorStore(state => state.addError)
  const removeError = useErrorStore(state => state.removeError)
  const changeQuanta = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (/^\d*\.?\d*$/.test(value)) {
      setQuanta(+value)
      removeError('quantaError')
    } else {
      removeError('quantaError')
      setError('Поле "Кванты" должно быть положительным числом!', 'quantaError')
    }
  }

  return (
    <Input
      className='max-w-[300px]'
      type='text'
      onChange={(e) => changeQuanta(e)}
      value={!quanta ? '' : quanta}
      placeholder='Кванты'
      aria-autocomplete='none'
    />
  )
}

export default QuantaInput
