import type {
  AuthUser,
  RegisterInput,
  StoredAuthUser,
} from './auth.types.js'

export interface CreateAuthUserInput extends Omit<RegisterInput, 'password'> {
  passwordHash: string
}

// The future MySQL implementation will satisfy this contract.
export interface AuthRepository {
  findByEmail(email: string): Promise<StoredAuthUser | null>
  create(input: CreateAuthUserInput): Promise<AuthUser>
}
