# URL Shortner

A Fastify and Prisma based URL shortener API. It creates short links for valid HTTP/HTTPS URLs and redirects short codes back to the original URL.

## Tech Stack

- Node.js
- Fastify
- Swagger / OpenAPI
- Prisma
- PostgreSQL
- Postman collection for API testing

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- PostgreSQL running locally or remotely
- A PostgreSQL database created for this project
- A local `.env` file with the required runtime configuration

The `.env` file must include configuration for the server host/port, API version, public short-link base URL, and PostgreSQL connection string. Do not commit real environment values or secrets.

## Installation

```bash
npm install
```

Generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate deploy
```

For local development, you can use:

```bash
npx prisma migrate dev
```

## Running The Project

Start the development server:

```bash
npm run dev
```

If PowerShell blocks `npm` or `npx` scripts on Windows, use:

```bash
npm.cmd run dev
npx.cmd prisma generate
```

## API Routes

Interactive Swagger documentation is available after the server starts:

```text
GET /docs
GET /docs/json
GET /docs/yaml
```

### Health Check

```http
GET /health
```

Returns API health status.

### Create Short URL

```http
POST /api/<api-version>/shorten
```

Request body:

```json
{
  "originalUrl": "https://example.com"
}
```

Returns the original URL and generated short URL.

### Redirect Short URL

```http
GET /<shortCode>
```

Redirects to the original URL for the given short code.

## Postman

A Postman collection is available at:

```text
Postman/url-shortner-api.postman_collection.json
```

Import it into Postman and update the collection variables to match your local environment.

## Common Issues

- `ECONNREFUSED` from Prisma usually means PostgreSQL is not running or the database connection configuration is incorrect.
- If requests return validation errors, make sure `originalUrl` is a full `http://` or `https://` URL.
- If Prisma client errors appear after schema changes, run `npx prisma generate` again.
