# E-Commerce REST API

CRUD API for an e-commerce system built with Node.js, Express.js, and PostgreSQL.

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Installation & Running Locally](#installation--running-locally)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [How to Deploy](#how-to-deploy)
- [Author](#author)
- [License](#license)

## Demo

Live demo: [https://ch3ber.github.io](https://ch3ber.github.io)

## Technologies

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- Joi Validation
- Docker & Docker Compose
- Jest & Supertest
- Swagger (OpenAPI v3)

## Prerequisites

- Node.js >= 14
- npm >= 6
- Docker & Docker Compose
- PostgreSQL (optional if using Docker)

## Quickstart

```bash
git clone https://github.com/ch3ber/e-commer-api.git
cd e-commer-api
```

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Server
PORT=3000

# Database (PostgreSQL or specify DB_URL)
DB_USER=
DB_PASSWORD=
DB_HOST=localhost
DB_NAME=
DB_PORT=5432
DB_URL=postgres://<user>:<pass>@<host>:<port>/<dbname>

# JWT
JWT_SECRET=
JWT_RECOVERY_SECRET=

# Recovery email service (optional)
RECOVERY_SERVICE_HOST=
RECOVERY_SERVICE_EMAIL=
RECOVERY_SERVICE_EMAIL_PASSWORD=

# pgAdmin (for Docker Compose)
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
```

## Docker Setup

Start PostgreSQL, MySQL, and admin services via Docker Compose:

```bash
docker-compose up -d
```

## Installation & Running Locally

Install dependencies and start development server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Scripts

Available npm scripts:

| Script                                              | Description                                                      |
| --------------------------------------------------- | ---------------------------------------------------------------- |
| `npm run dev`                                       | Start server in development mode (with ts-node).                 |
| `npm run start`                                     | Start production server (after build).                           |
| `npm run tsc`                                       | Compile TypeScript sources.                                      |
| `npm run lint`                                      | Run ESLint.                                                      |
| `npm run lint:fix`                                  | Run ESLint with auto-fix.                                        |
| `npm run test`                                      | Run unit tests with Jest.                                        |
| `npm run test:watch`                                | Run unit tests in watch mode.                                    |
| `npm run test:e2e`                                  | Run end-to-end tests.                                            |
| `npm run migrations:generate --name <name>`         | Generate a new migration.                                        |
| `npm run migrations:run`                            | Run pending migrations.                                          |
| `npm run migrations:revert`                         | Revert last migration.                                           |
| `npm run migrations:delete`                         | Revert all migrations.                                           |
| `npm run predeploy`                                 | Clean `dist/` folder.                                            |
| `npm run deploy`                                    | Build & migrate database (predeploy + tsc + migrations:run).     |

## Project Structure

```
.  
├── src
│   ├── app.ts              # Express app setup
│   ├── index.ts            # App entry point
│   ├── config              # Configuration (dotenv, env vars)
│   ├── routes              # Express route definitions
│   ├── schemas             # Joi validation schemas
│   ├── services            # Business logic
│   ├── db                  # Database models & relations (Sequelize)
│   ├── libs                # DB clients & utilities
│   ├── middlewares         # Error handling & auth
│   └── utils               # Utility modules (e.g. auth)
├── swagger.yaml            # OpenAPI spec
├── docker-compose.yaml     # Docker Compose for DB services
├── jest.config.ts          # Unit test config
├── jest.e2e.config.ts      # E2E test config
├── tsconfig.json
├── tsconfig.build.json
├── package.json
└── README.md
```

## API Endpoints

Base URL: `http://localhost:3000/api/v1`

| Endpoint            | Method | Description                        |
| ------------------- | ------ | ---------------------------------- |
| `/products`         | GET    | List products                      |
|                     | POST   | Create new product                 |
| `/products/:id`     | GET    | Get product by ID                  |
|                     | PATCH  | Update a product                   |
|                     | DELETE | Delete a product                   |
| `/categories`       | GET    | List categories                    |
|                     | POST   | Create new category                |
| `/categories/:id`   | GET    | Get category by ID                 |
|                     | PATCH  | Update a category                  |
|                     | DELETE | Delete a category                  |
| `/users`            | GET    | List users                         |
|                     | POST   | Create new user                    |
| `/users/:id`        | GET    | Get user by ID                     |
|                     | PATCH  | Update a user                      |
|                     | DELETE | Delete a user                      |
| `/customers`        | GET    | List customers                     |
|                     | POST   | Create new customer                |
| `/customers/:id`    | GET    | Get customer by ID                 |
|                     | PATCH  | Update a customer                  |
|                     | DELETE | Delete a customer                  |
| `/orders`           | GET    | List orders                        |
|                     | POST   | Create new order                   |
| `/orders/:id`       | GET    | Get order by ID                    |
|                     | PATCH  | Update an order                    |
|                     | DELETE | Delete an order                    |
| `/auth/login`       | POST   | Authenticate and get JWT token     |
| `/auth/register`    | POST   | Register a new customer (alias)    |
| `/profile`          | GET    | Get current user profile (auth)    |
|                     | PATCH  | Update current user profile (auth) |

## API Documentation

Interactive API docs (Swagger UI) available at `http://localhost:3000/api-docs`.

## Testing

### Unit Tests

```bash
npm test
```

### End-to-End (E2E) Tests

```bash
npm run test:e2e
```

## How to Deploy

1. Build the project and run migrations:

   ```bash
   npm run deploy
   ```

2. Ensure environment variables are set in production.

3. Start production server:

   ```bash
   npm run start
   ```

## Author

- **Eber Edrey Alejo Berrones** ([ch3ber](https://github.com/ch3ber))

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
