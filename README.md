# Welcome to Remix Vite CF-X Template

Welcome to the Remix Vite CF-X template! This project is designed to help you get started quickly with Remix, Vite, and Cloudflare Workers.

## Setup

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/Xazu001/remix-vite-cf-x.git
cd remix-vite-cf-x
npm install
```

## Development

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and watch for changes.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build of your application in the `dist` directory.

## Deployment

To deploy your application to Cloudflare Workers, run:

```bash
npm run deploy
```

Make sure you have configured your Cloudflare account and set up the necessary environment variables.

## Guide

This project is based on Remix, Kysely and Drizzle mainly, so just look into the documentation from these libraries.

### Project Structure

- `app/`: This directory contains your main source code.
- `server/`: Contains server-side code and configurations for handling backend logic and API endpoints. Remember to add types in load-context.ts
- `public/`: Static assets that will be served by the server.

### Scripts

### Commands

- `npm run dev`: Starts the Vite development server and watches for changes.
- `npm run dev:wrangler`: Starts the Cloudflare Pages development server using Wrangler.
- `npm run generate`: Generates the database schema using Drizzle Kit.
- `npm run migrate:local`: Applies database migrations locally using Wrangler D1.
- `npm run migrate:prod`: Applies database migrations remotely using Wrangler D1.
- `npm run cf-typegen`: Generates Cloudflare Workers types using Wrangler.
- `npm run build`: Builds the project for production using Remix and Vite.
- `npm run start`: Starts the Cloudflare Pages development server with the built client.
- `npm run preview`: Builds the project and starts the Cloudflare Pages development server locally.
- `npm run deploy`: Builds the project and deploys it to Cloudflare Pages.
- `npm run lint`: Lints the codebase using Biome.
- `npm run fmt`: Formats the codebase using Biome.

### Database Configuration

- `drizzle.config.ts`: Configuration file for Drizzle ORM, specifying the database schema, dialect, and credentials.
- `server/database/schema.ts`: Defines the database schema using Drizzle ORM.
- `server/database/tables.ts`: Maps the schema to Kysely types for type-safe database operations.

### Services

- `server/services/base.ts`: Base service class that other services extend from.
- `server/services/main.ts`: Main service class that contains core business logic.

### Load Context

- `server/load-context.ts`: Sets up the application load context, including database connections and services.

### TypeScript Configuration

- `tsconfig.json`: TypeScript configuration file specifying compiler options and paths.

### Tailwind CSS Configuration

- `tailwind.config.ts`: Configuration file for Tailwind CSS.
- `app/tailwind.css`: Custom styles using Tailwind CSS.

### Linting and Formatting

- `.eslintrc.cjs`: ESLint configuration file for linting JavaScript and TypeScript code.
- `postcss.config.js`: Configuration file for PostCSS, used with Tailwind CSS.

### Cloudflare Configuration

- `wrangler.toml`: Configuration file for Cloudflare Wrangler, specifying D1 database bindings and other settings.
- `worker-configuration.d.ts`: Type definitions for Cloudflare Workers environment.

### Additional Files

- `.gitignore`: Specifies files and directories to be ignored by Git.
- `public/_headers`: HTTP headers configuration for static assets.
- `public/_routes.json`: Defines routing rules for the application.
- `migrations/meta/_journal.json`: Metadata for database migrations.
- `package.json`: Lists project dependencies and scripts.
- `README.md`: Project documentation and setup guide.

### Environment Variables

Make sure to set up the following environment variables for deployment:

- `CF_ACCOUNT_ID`: Your Cloudflare account ID.
- `CF_API_TOKEN`: Your Cloudflare API token.

## Contact

If you have any questions or need further assistance, feel free to reach out.
discord - xazu001
