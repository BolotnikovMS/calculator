import { Calculator } from 'lucide-react'
import Error from './components/ordinary/error'
import Results from './components/ordinary/results'
import InformationQuanta from './components/simple/informationQuanta'
import CurrentCoefficientInput from './components/smart/currentCoefficient'
import QuantaInput from './components/smart/quantaInput'
import QuantitiesRadioGroup from './components/smart/quantitiesRadioGroup'
import TypeCalculationSelect from './components/smart/typeCalculationSelect'
import VoltageSelect from './components/smart/voltageSelect'
import { Button } from './components/ui/button'
import { useCalculatorStore } from './core/store/calculator'

const App = () => {
  const quanta = useCalculatorStore(state => state.quanta)
  const calculateResult = useCalculatorStore(state => state.calculateResult)

  return (
    <div className='flex flex-wrap justify-center gap-6'>
      <Error />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col items-center gap-4'>
          <CurrentCoefficientInput />
          <QuantaInput />
          <VoltageSelect />
          <TypeCalculationSelect />
          <QuantitiesRadioGroup />
          <Button variant="outline" size="default" type='button' className={`w-[300px] hover:bg-gray-300/85 transition ease-out duration-500 ${!quanta && 'bg-gray-500/90'}`} onClick={calculateResult} disabled={!quanta}>
            <Calculator />
          </Button>
        </div>
        <Results />
      </div>
      <InformationQuanta />
    </div>
  )
}

export default App
