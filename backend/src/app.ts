import express from 'express'

import { authRouter } from './modules/auth/index.js'

const app = express()

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({
    success: true,
    message: 'Backend is working successfully',
  })
})

// Auth endpoints will be added inside the auth module.
app.use('/api/auth', authRouter)

export { app }
