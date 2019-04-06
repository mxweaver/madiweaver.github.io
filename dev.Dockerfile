FROM node:10.15.0-alpine

WORKDIR /usr/src/mayavera.github.io
ADD package.json package-lock.json ./
RUN npm install

ADD . .

CMD npm run dev
