export type AuthMode = 'login' | 'register'

export interface AuthFormValues {
  email: string
  name: string
  password: string
}

export type AuthFormField = keyof AuthFormValues
export type AuthFormErrors = Partial<Record<AuthFormField, string>>
