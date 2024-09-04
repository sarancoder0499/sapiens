FROM node:alpine

WORKDIR /app

RUN addgroup app && adduser -S -G app app

# Install dependencies
COPY package*.json .
RUN npm install

# Install Nest CLI globally
RUN npm install -g @nestjs/cli

RUN chown -R app:app /app

USER app

COPY --chown=app:app . .

ENV API_URL=https://localhost:3000

EXPOSE 3000

CMD ["npm", "run", "start:dev"]