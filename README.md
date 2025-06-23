# Qantas Coding Challenge

This project is a React + TypeScript application bootstrapped with Vite. It demonstrates a searchable and paginated list of airports, with details for each airport, using the Qantas API.

## Features
- List and search airports
- View detailed airport information
- Pagination for large airport lists
- Data fetching with React Query
- UI components with Material-UI (MUI)
- TypeScript for type safety
- ESLint and Prettier for code quality and formatting
- Unit tests with Jest and React Testing Library

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Installation
```bash
npm install
```

### Development
Start the development server:
```bash
npm start
```

### Build
Build the app for production:
```bash
npm run build
```

### Linting
Run ESLint to check for code issues:
```bash
npm run lint
```

### Formatting
Format your codebase with Prettier:
```bash
npm run prettier
```

### Testing
Run all unit tests:
```bash
npm test
```

## Project Structure
- `src/components/` – React components (AirportList, AirportDetails, Loader, etc.)
- `src/hooks/` – Custom React hooks (e.g., useGetAirports)
- `src/types/` – TypeScript type definitions
- `src/assets/` – Static assets

## Configuration
- `.prettierrc` – Prettier configuration
- `eslint.config.js` – ESLint configuration
- `jest.config.cjs` – Jest configuration

## License
This project is for demonstration purposes only.
