import { type FC } from 'react'
import { IPropsResults } from './result.interface'

const Results: FC<IPropsResults> = ({ coefficient, bias }) => {
  return (
    <>
      <p>Результат: <span className='font-bold'>{coefficient}</span></p>
      <p>Смещение: <span className='font-bold'>{bias}</span></p>
    </>
  )
}

export default Results
