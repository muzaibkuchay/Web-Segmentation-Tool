FROM node:14-alpine3.16

WORKDIR /app

COPY package.json.

COPY package-lock.json.

RUN npm install

EXPOSE 9000

CMD ["npm","start"]