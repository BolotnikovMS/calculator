import { Calculator } from 'lucide-react'
import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'

const voltageClassess = [
  {value: '6000', lable: '6'},
  {value: '10000', lable: '10'},
  {value: '35000', lable: '35'},
  {value: '110000', lable: '110'},
  {value: '220000', lable: '220'},
  {value: '500000', lable: '500'},
]

function App() {
  const [result, setResult] = useState<number>(0)
  const [voltage, setVoltage] = useState<number | null>(null)

  const changeVoltage = (value: string) => setVoltage(+value)
  const calculation = () => {
    console.log('clik')
  }

  return (
    <div className='flex flex-col justify-center gap-4'>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Input className='max-w-[250px]' aria-autocomplete='none' />
        <Select onValueChange={changeVoltage}>
          <SelectTrigger className='max-w-[250px]' >
            <SelectValue placeholder="Выберите напряжение"/>
          </SelectTrigger>
          <SelectContent>
            {voltageClassess.map(voltage => (
              <SelectItem key={voltage.value} value={voltage.value}>{voltage.lable}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='max-w-[250px]'>
            <SelectValue placeholder="Выберите тип" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6">Ток</SelectItem>
            <SelectItem value="10">Мощность</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon" className='hover:bg-gray-300/85 transition ease-out duration-500'  onClick={calculation}>
          <Calculator />
        </Button>
      </div>
      <div>
        <p className='text-white'>Результат: <span>{result}</span></p>
      </div>
    </div>
  )
}

export default App
