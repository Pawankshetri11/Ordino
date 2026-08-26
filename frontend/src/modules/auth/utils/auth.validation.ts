import type {
  AuthFormErrors,
  AuthFormValues,
  AuthMode,
} from '../types/auth-form.types'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateAuthForm(
  mode: AuthMode,
  values: AuthFormValues,
): AuthFormErrors {
  const errors: AuthFormErrors = {}

  if (mode === 'register' && values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid work email.'
  }

  if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  return errors
}
