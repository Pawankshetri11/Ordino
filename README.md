# Restaurant QR SaaS

Basic project setup with a universal Expo frontend and an Express backend.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Use `npm run web`, `npm run android`, or `npm run ios` to run the same frontend code on each platform.

## Backend

```bash
cd backend
npm install
npm run dev
```

The backend health check is available at `GET /api/health`.

## Team workflow

See [Team Development Guide](docs/TEAM_DEVELOPMENT_GUIDE.md) for the `develop` → `staging` → `main` workflow, daily Git commands, ownership, authentication planning, visual flowcharts, and the phased roadmap.

For a beginner-friendly command handbook, see [Ordino Git & GitHub Workflow PDF](docs/ORDINO_GIT_GITHUB_WORKFLOW_GUIDE.pdf).

## Project structure

```text
ordino/
├── frontend/
│   └── src/modules/auth/
├── backend/
│   └── src/modules/auth/
└── docs/
```

The authentication folders currently contain modular contracts and placeholders only.
Database access, password handling, tokens, validation, and real authentication behavior
will be implemented in later steps.
