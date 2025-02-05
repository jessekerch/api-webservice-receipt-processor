FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# Exposing the port the app runs on
EXPOSE 3000

# Starting the app
CMD ["node", "dist/app.js"]
