import { Calculator } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import Error from './components/ordinary/error'
import InformationQuanta from './components/simple/informationQuanta'
import Results from './components/simple/results'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { calculate } from './core/utils/calculate'
import { typeCalculationData } from './data/typeCalculationData'
import { voltageClassessData } from './data/voltageClassessData'
import { IError } from './interfaces/error.interface'

const App = () => {
  const [currentCoefficient, setCurrentCoefficient] = useState<string>('')
  const [quanta, setQuanta] = useState<string>('')
  const [voltage, setVoltage] = useState<number>(6)
  const [typeCalculation, setTypeCalculation] = useState<string>('amperage')
  const [coefficient, setCoefficient] = useState<number>(0)
  const [bias, setBias] = useState<number>(0)
  const [errors, setErrors] = useState<IError>({ errorCurrentCoefficient: '', errorQuanta: '' })

  const changeCurrentCoefficient = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (!Number(value)) {
      setCurrentCoefficient('')
      setErrors({ ...errors, errorCurrentCoefficient: 'Поле "Коэффициент по току" должно быть положительным числом!' })

      return
    }

    setErrors({ ...errors, errorCurrentCoefficient: '' })
    return setCurrentCoefficient(value)
  }
  const changeQuanta = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (!Number(value)) {
      setQuanta('')
      setErrors({ ...errors, errorQuanta: 'Поле "Кванты" должно быть положительным числом!' })

      return
    }

    setErrors({ ...errors, errorQuanta: '' })
    return setQuanta(value)
  }
  const changeVoltage = (value: string) => setVoltage(+value)
  const changeTypeCalculation = (value: string) => setTypeCalculation(value)
  const calculation = () => {
    const result = calculate(typeCalculation, +quanta, voltage, +currentCoefficient)

    setCoefficient(result?.coefficient ?? 0)
    setBias(result?.bias ?? 0)
  }

  return (
    <div className='flex flex-wrap justify-center gap-6'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-4'>
          <Input className='max-w-[300px]' onChange={(e) => changeCurrentCoefficient(e)} value={currentCoefficient} placeholder='Коэффициент по току' aria-autocomplete='none' />
          <Input className='max-w-[300px]' onChange={(e) => changeQuanta(e)} value={quanta} placeholder='Кванты' aria-autocomplete='none' />
          <Select onValueChange={changeVoltage} defaultValue={voltage.toString()}>
            <SelectTrigger className='max-w-[300px]' >
              <SelectValue placeholder="Напряжение" />
            </SelectTrigger>
            <SelectContent>
              {voltageClassessData.map(voltage => (
                <SelectItem key={voltage.value} value={voltage.value}>{voltage.lable}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={changeTypeCalculation} defaultValue={typeCalculation}>
            <SelectTrigger className='max-w-[300px]'>
              <SelectValue placeholder="Тип расчета" />
            </SelectTrigger>
            <SelectContent>
              {typeCalculationData.map(item => (<SelectItem key={item.value} value={item.value}>{item.lable}</SelectItem>))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className='w-[300px] hover:bg-gray-300/85 transition ease-out duration-500' onClick={calculation} disabled={!quanta}>
            <Calculator />
          </Button>
        </div>
        <Results coefficient={coefficient} bias={bias} />
      </div>
      <Error errorCurrentCoefficient={errors.errorCurrentCoefficient} errorQuanta={errors.errorQuanta} />
      <InformationQuanta />
    </div>
  )
}

export default App
