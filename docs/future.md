# Future Roadmap

This document tracks the next improvements needed to scale the URL shortener project.

## Part 2: Performance

- [ ] Add Redis cache for short-code lookups
- [ ] Add cache invalidation when URLs change or are disabled
- [ ] Add cache expiration with TTL

## Part 3: Scalability

- [ ] Add click analytics after Redis is in place
- [ ] Add background jobs for analytics processing
- [ ] Add BullMQ for queue management
- [ ] Consider Redis Streams for event-driven processing

## Part 4: Reliability

- [ ] Add rate limiting for URL creation and redirects
- [ ] Add Docker Compose for app, PostgreSQL, and Redis
- [ ] Expand health checks for database and Redis readiness
- [ ] Add graceful shutdown for Fastify, Prisma, Redis, and queues

## Part 5: Observability

- [ ] Improve structured logging
- [ ] Add application metrics
- [ ] Add monitoring dashboards and alerts

## Part 6: Testing

- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add end-to-end tests
