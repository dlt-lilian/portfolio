FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies
FROM base AS install
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build phase
FROM base AS build
COPY --from=install /app/node_modules node_modules
COPY . .
RUN bun run build

# Production phase
FROM node:18-alpine AS production
WORKDIR /app

# Copy built application
COPY --from=build /app/build build/
COPY --from=build /app/package.json ./

# Install only production dependencies for Node runtime
RUN npm install --only=production

EXPOSE 3000
CMD ["node", "build/index.js"]