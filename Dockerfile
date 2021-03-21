FROM node:15.12.0-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN ROOT_API=http://localhost:5001 yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
