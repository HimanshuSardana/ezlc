# --- Base Builder Image ---
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copy source files
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js app
RUN npm run build


# --- Production Image ---
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy dependencies and Prisma client
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Optional: ensure database access for Prisma (depends on deployment target)
# e.g., if using SQLite:
# COPY --from=builder /app/dev.db ./dev.db

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

