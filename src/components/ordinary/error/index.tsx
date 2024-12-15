import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'
import { type FC } from 'react'
import { IPropsError } from './error.interface'

const Error: FC<IPropsError> = ({ errorCurrentCoefficient, errorQuanta }) => {
  if (!errorCurrentCoefficient && !errorQuanta) return null

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Ошибка ввода!</AlertTitle>
      <AlertDescription>
        {errorCurrentCoefficient && (<p>{errorCurrentCoefficient}</p>)}
        {errorQuanta && (<p>{errorQuanta}</p>)}
      </AlertDescription>
    </Alert>
  )
}

export default Error
