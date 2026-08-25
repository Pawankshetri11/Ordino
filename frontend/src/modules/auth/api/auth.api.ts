import type {
  AuthSession,
  LoginRequest,
  RegisterRequest,
} from '../types/auth.types'

// The future HTTP client will implement this contract.
export interface AuthApi {
  login(input: LoginRequest): Promise<AuthSession>
  register(input: RegisterRequest): Promise<AuthSession>
}
