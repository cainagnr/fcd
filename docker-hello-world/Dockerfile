FROM node:10.13.0-alpine

RUN echo http://dl-4.alpinelinux.org/alpine/v3.8/main > /etc/apk/repositories; \
    echo http://dl-4.alpinelinux.org/alpine/v3.8/community >> /etc/apk/repositories

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]