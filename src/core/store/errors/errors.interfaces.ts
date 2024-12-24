export interface ErrorState {
  id: string
  message: string
}

export interface ErrorStoreState {
  errors: ErrorState[]
  addError: (message: string, id?: string) => void
  removeError: (id: string) => void
  clearErrors: () => void
}
