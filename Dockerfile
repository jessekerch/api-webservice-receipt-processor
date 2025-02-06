FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# Copying home.html to dist before building
RUN mkdir -p dist/views && cp -r src/views/home.html dist/views/

RUN npm run build

# Exposing the port the app runs on
EXPOSE 3030

# Starting the app
CMD ["node", "dist/app.js"]
