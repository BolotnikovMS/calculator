import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCalculatorStore } from '@/core/store/calculator'
import { voltageClassessData } from '@/data/voltageClassessData'
import { type FC } from 'react'

const VoltageSelect: FC = () => {
  const voltage = useCalculatorStore(state => state.voltage)
  const setVoltage = useCalculatorStore(state => state.setVoltage)

  return (
    <Select
      onValueChange={setVoltage}
      defaultValue={voltage.toString()}
    >
      <SelectTrigger className='max-w-[300px]'>
        <SelectValue placeholder="Напряжение" />
      </SelectTrigger>
      <SelectContent>
        {voltageClassessData.map(voltage => (
          <SelectItem key={voltage.value} value={voltage.value}>
            {voltage.lable}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default VoltageSelect
