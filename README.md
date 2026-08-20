# URL Shortner API

Fastify, Prisma, PostgreSQL, and Redis API for creating short URLs and redirecting short codes to original URLs.

## Tech Stack

- Node.js
- Fastify
- Swagger / OpenAPI
- Prisma
- PostgreSQL
- Redis

## Environment Variables

Use `.env.example` as the local template:

```env
PORT=4001
HOST=localhost
NODE_ENV=development
NODE_VERSION=v1
BASE_URL=http://localhost:4001
CLIENT_ORIGIN=http://localhost:5173
DATABASE_URL="postgresql://postgres:password@localhost:5432/url_shortener"
REDIS_URL=redis://default:password@localhost:6379
```

`NODE_VERSION=v1` creates the route prefix `/api/v1`.

## Local Development

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

For production-like migrations:

```bash
npx prisma migrate deploy
```

## API Routes

```http
GET /health
```

```http
POST /api/<api-version>/shorten
```

Request body:

```json
{
  "originalUrl": "https://example.com"
}
```

```http
GET /<shortCode>
```

Swagger docs are available when the server is running:

```text
GET /docs
GET /docs/json
GET /docs/yaml
```


```
