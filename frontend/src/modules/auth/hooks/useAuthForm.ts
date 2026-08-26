import { useState } from 'react'

import type {
  AuthFormErrors,
  AuthFormField,
  AuthFormValues,
  AuthMode,
} from '../types/auth-form.types'
import { validateAuthForm } from '../utils/auth.validation'

const emptyValues: AuthFormValues = {
  email: '',
  name: '',
  password: '',
}

export function useAuthForm() {
  const [mode, setMode] = useState<AuthMode>('login')
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState<AuthFormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [notice, setNotice] = useState<string | null>(null)

  const updateField = (field: AuthFormField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setNotice(null)
  }

  const changeMode = (nextMode: AuthMode) => {
    setMode(nextMode)
    setValues(emptyValues)
    setErrors({})
    setNotice(null)
  }

  const submit = () => {
    const nextErrors = validateAuthForm(mode, values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setNotice('Form is ready. We will connect the backend API next.')
    }
  }

  return {
    changeMode,
    errors,
    mode,
    notice,
    rememberMe,
    setNotice,
    setRememberMe,
    setShowPassword,
    showPassword,
    submit,
    updateField,
    values,
  }
}
