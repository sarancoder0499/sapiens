FROM node:alpine

RUN addgroup app && adduser -S -G app app

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm install

# Install Vite CLI globally
RUN npm install -g vite

# Provisioning Permission
RUN chown -R app:app /app
USER app
COPY --chown=app:app . .

EXPOSE 5173

CMD ["npm", "run", "dev"]