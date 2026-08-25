# Frontend authentication module

This folder contains the shared authentication frontend for web, Android, and iOS.

- `api/`: Backend API contract and future HTTP calls.
- `components/`: Reusable authentication UI.
- `screens/`: Complete authentication screens.
- `state/`: Session state and future auth actions.
- `types/`: Request, response, and user types.
- `index.ts`: Public exports for the module.

Pawan can build the UI here once and use it on every Expo platform. Database credentials
must never be added to the frontend.
