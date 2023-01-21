# syntax=docker/dockerfile:1

FROM node:18.13.0

ENV NODE_ENV=test

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]