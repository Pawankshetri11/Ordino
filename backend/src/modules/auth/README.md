# Backend authentication module

This folder is the backend boundary for authentication.

- `auth.routes.ts`: Express route definitions.
- `auth.controller.ts`: HTTP request and response handlers.
- `auth.service.ts`: Authentication business rules.
- `auth.repository.ts`: Database access contract.
- `auth.types.ts`: Backend authentication types.
- `index.ts`: Public exports for the module.

Himani can implement each layer without putting authentication code in `app.ts`.
Database, password hashing, tokens, and validation are intentionally not implemented yet.
