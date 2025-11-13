FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
RUN npm i -g serve
COPY --from=builder /app/dist ./dist

ENV PORT=5173
EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
