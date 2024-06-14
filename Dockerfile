FROM node:18 AS base
WORKDIR /app

FROM base AS api-dev
COPY api/package.json api/package-lock.json ./
COPY api/ ./api/
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]

FROM base AS chatbot-dev
COPY chatbot/package.json chatbot/package-lock.json ./
COPY chatbot/.eslintrc.cjs chatbot/index.html chatbot/vite.config.ts ./
COPY chatbot/ ./chatbot/
RUN npm install
EXPOSE 5173
CMD [ "npm", "run", "dev" ]