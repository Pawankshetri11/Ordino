import type { RequestHandler } from 'express'

// HTTP handlers will call AuthService and format API responses.
export interface AuthController {
  login: RequestHandler
  register: RequestHandler
}
