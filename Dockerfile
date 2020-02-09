FROM node:13.8.0-alpine

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN apk add bash
RUN npm i electron -g
