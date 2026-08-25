import type {
  AuthSession,
  LoginInput,
  RegisterInput,
} from './auth.types.js'

// Authentication business rules will be implemented behind this contract.
export interface AuthService {
  login(input: LoginInput): Promise<AuthSession>
  register(input: RegisterInput): Promise<AuthSession>
}
