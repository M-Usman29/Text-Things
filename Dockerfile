FROM node:14-alpine3.13

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

CMD ["npm", "start"]
