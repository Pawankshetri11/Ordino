import type {
  AuthFormErrors,
  AuthFormField,
  AuthFormValues,
  AuthMode,
} from '../types/auth-form.types'
import { AuthTextField } from './AuthTextField'

interface AuthFieldsProps {
  errors: AuthFormErrors
  mode: AuthMode
  onChange: (field: AuthFormField, value: string) => void
  onTogglePassword: () => void
  showPassword: boolean
  values: AuthFormValues
}

export function AuthFields({
  errors,
  mode,
  onChange,
  onTogglePassword,
  showPassword,
  values,
}: AuthFieldsProps) {
  return (
    <>
      {mode === 'register' && (
        <AuthTextField
          autoCapitalize="words"
          error={errors.name}
          icon="Aa"
          label="Full name"
          onChangeText={(value) => onChange('name', value)}
          placeholder="Your full name"
          value={values.name}
        />
      )}
      <AuthTextField
        error={errors.email}
        icon="@"
        keyboardType="email-address"
        label="Work email"
        onChangeText={(value) => onChange('email', value)}
        placeholder="you@restaurant.com"
        value={values.email}
      />
      <AuthTextField
        error={errors.password}
        icon="*"
        label="Password"
        onChangeText={(value) => onChange('password', value)}
        onToggleSecure={onTogglePassword}
        placeholder="Minimum 8 characters"
        secureTextEntry={!showPassword}
        value={values.password}
      />
    </>
  )
}
