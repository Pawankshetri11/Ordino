# Frontend authentication module

The auth feature is intentionally compact. It is shared by web, Android, and iOS
without splitting every visual fragment into a separate file.

- `screens/AuthScreen.tsx`: login, forgot password, form state, validation, and one-use UI pieces.
- `screens/auth-screen.styles.ts`: responsive login styles.
- `api/`, `state/`, `types/`: contracts and non-visual logic for future backend wiring.
- `index.ts`: the public module boundary.

Global color, typography, and radius tokens live in `src/theme/tokens.ts`. Create
a new component only when it is reused, independently complex, or has meaningful
behavior. Database credentials must never be added to the frontend.
