import { type FC } from 'react'
import { IPropsResults } from './result.interface'

const Results: FC<IPropsResults> = ({ coefficient, bias }) => {
  return (
    <>
      <p className='text-white'>Результат: <span className='font-bold'>{coefficient}</span></p>
      <p className='text-white'>Смещение: <span className='font-bold'>{bias}</span></p>
    </>
  )
}

export default Results
