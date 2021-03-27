FROM node:15.12.0-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
