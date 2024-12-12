import { useState } from 'react'
import './App.css'
import { Input } from './components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className='flex flex-col justify-center gap-4'>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Input className='max-w-[250px]' aria-autocomplete='none' />
        <Select>
          <SelectTrigger className='max-w-[250px]'>
            <SelectValue placeholder="Выберите напряжение" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="6">6</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="35">35</SelectItem>
            <SelectItem value="110">110</SelectItem>
            <SelectItem value="220">220</SelectItem>
            <SelectItem value="500">500</SelectItem>
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
      </div>
      <div>
        <p className='text-white'>Результат: <span>10</span></p>
      </div>
    </div>
  )
}

export default App
