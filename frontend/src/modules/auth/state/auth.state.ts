import type { AuthSession } from '../types/auth.types'

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'error'

export interface AuthState {
  session: AuthSession | null
  status: AuthStatus
  errorMessage: string | null
}

export const initialAuthState: AuthState = {
  session: null,
  status: 'idle',
  errorMessage: null,
}
