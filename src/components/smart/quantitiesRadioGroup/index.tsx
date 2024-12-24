import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useCalculatorStore } from '@/core/store/calculator'
import { quantitiesData } from '@/data/quantitiesData'
import { type FC } from 'react'

const QuantitiesRadioGroup: FC = () => {
  const typeCalculation = useCalculatorStore(state => state.typeCalculation)
  const quantity = useCalculatorStore(state => state.quantity)
  const setQuantity = useCalculatorStore(state => state.setQuantity)

  if (typeCalculation !== 'power' && typeCalculation !== 'powerReverse') return null

  return (
    <RadioGroup
      defaultValue={quantity}
      onValueChange={setQuantity}
    >
      {quantitiesData.map(item => (
        <div key={item.value} className="flex items-center space-x-2">
          <RadioGroupItem value={item.value} id={item.value} />
          <Label htmlFor={item.value}>{item.name}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default QuantitiesRadioGroup
