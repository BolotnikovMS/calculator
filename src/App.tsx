import { Calculator } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import Error from './components/ordinary/error'
import InformationQuanta from './components/simple/informationQuanta'
import Results from './components/simple/results'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { calculate } from './core/utils/calculate/calculate'
import { quantitiesData } from './data/quantitiesData'
import { typeCalculationData } from './data/typeCalculationData'
import { voltageClassessData } from './data/voltageClassessData'
import { IError } from './interfaces/error.interface'
import { TQuantity } from './types/quantity.type'
import { TTypeCalculation } from './types/typeCalculation.type'
import { TVoltage } from './types/voltage.type'

const App = () => {
  const [currentCoefficient, setCurrentCoefficient] = useState<string>('')
  const [quanta, setQuanta] = useState<string>('')
  const [voltage, setVoltage] = useState<TVoltage>('6')
  const [typeCalculation, setTypeCalculation] = useState<TTypeCalculation>('amperage')
  const [coefficient, setCoefficient] = useState<number>(0)
  const [bias, setBias] = useState<number>(0)
  const [quantity, setQuantity] = useState<TQuantity>('kilowatts')
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
  const changeVoltage = (value: TVoltage) => setVoltage(value)
  const changeTypeCalculation = (value: TTypeCalculation) => setTypeCalculation(value)
  const changeQuantity = (value: TQuantity) => setQuantity(value)
  const calculation = () => {
    const result = calculate(typeCalculation, +quanta, +voltage, +currentCoefficient, quantity)

    setCoefficient(result?.coefficient ?? 0)
    setBias(result?.bias ?? 0)
  }

  return (
    <div className='flex flex-wrap justify-center gap-6'>
      <Error errorCurrentCoefficient={errors.errorCurrentCoefficient} errorQuanta={errors.errorQuanta} />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-4'>
          <Input className='max-w-[300px]' type='text' onChange={(e) => changeCurrentCoefficient(e)} value={currentCoefficient} placeholder='Коэффициент по току' aria-autocomplete='none' />
          <Input className='max-w-[300px]' type='text' onChange={(e) => changeQuanta(e)} value={quanta} placeholder='Кванты' aria-autocomplete='none' />
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
          {(typeCalculation === 'power' || typeCalculation === 'powerReverse') && (
            <RadioGroup defaultValue={quantity} onValueChange={changeQuantity}>
              {quantitiesData.map(item => (
                <div key={item.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={item.value} id={item.value} />
                  <Label htmlFor={item.value}>{item.name}</Label>
                </div>
              ))}
            </RadioGroup>
          )}
          <Button variant="outline" size="icon" type='button' className={`w-[300px] hover:bg-gray-300/85 transition ease-out duration-500 ${!quanta && 'bg-gray-500/90'}`} onClick={calculation} disabled={!quanta}>
            <Calculator />
          </Button>
        </div>
        <Results coefficient={coefficient} bias={bias} />
      </div>
      <InformationQuanta />
    </div>
  )
}

export default App
