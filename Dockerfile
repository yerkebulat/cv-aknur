FROM node:22.2.0-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22.2.0-slim

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/out ./out

EXPOSE 3000

CMD ["serve", "out", "-l", "3000"]
