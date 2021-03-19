FROM node:15.11.0-alpine3.11

RUN yarn global add http-server

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN ROOT_API=http://localhost:5001 yarn build

EXPOSE 8080

CMD [ "http-server", "build" ]
