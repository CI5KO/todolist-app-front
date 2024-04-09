FROM node:20.11.0 AS base

FROM base AS production
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install
COPY . .
RUN npm run build
CMD ["sh", "-c", "npm run start"]

FROM base AS development
WORKDIR /packages
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install
# Next 14 mod
RUN sed -i -e '/NODE_OPTIONS.*nodeDebugType.*/s//NODE_OPTIONS = `${NODE_OPTIONS} --${nodeDebugType}=0.0.0.0:9230`;/' node_modules/next/dist/cli/next-dev.js
WORKDIR /app
COPY . .
CMD [ "sh", "-c", "rm -rf /app/node_modules && mv /packages/node_modules /app && npm run dev" ]

FROM base AS documentation
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install
COPY . .
RUN npm run build:sb
CMD ["sh", "-c", "npm run dev:sb"]