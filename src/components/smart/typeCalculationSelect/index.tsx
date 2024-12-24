import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCalculatorStore } from '@/core/store/calculator'
import { typeCalculationData } from '@/data/typeCalculationData'
import { type FC } from 'react'

const TypeCalculationSelect: FC = () => {
  const typeCalculation = useCalculatorStore(state => state.typeCalculation)
  const setTypeCalculation = useCalculatorStore(state => state.setTypeCalculation)

  return (
    <Select
      onValueChange={setTypeCalculation}
      defaultValue={typeCalculation}
    >
      <SelectTrigger className='max-w-[300px]'>
        <SelectValue placeholder="Тип расчета" />
      </SelectTrigger>
      <SelectContent>
        {typeCalculationData.map(item => (
          <SelectItem key={item.value} value={item.value}>
            {item.lable}
          </SelectItem>))}
      </SelectContent>
    </Select>
  )
}

export default TypeCalculationSelect
