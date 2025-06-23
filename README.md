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

## Demo

![Working Responsive App](https://github.com/user-attachments/assets/ce84722a-7dc2-4061-b07e-060cc668a3fe)


![Network Error Handling](https://github.com/user-attachments/assets/72df4f60-4f8b-4ee5-a55a-6314e7799180)

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
