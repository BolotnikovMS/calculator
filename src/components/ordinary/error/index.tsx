import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { useErrorStore } from '@/core/store/errors'
import { AlertCircle } from 'lucide-react'
import { type FC } from 'react'

const Error: FC = () => {
  const errors = useErrorStore(state => state.errors)

  if (!errors.length) return null

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Ошибка ввода!</AlertTitle>
      <AlertDescription>
        {errors.map(error => (
          <p key={error.id}>{error.message}</p>
        ))}
      </AlertDescription>
    </Alert>
  )
}

export default Error
