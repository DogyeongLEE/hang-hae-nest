FROM node:18

WORKDIR /hang-hae-nest

COPY package*.json ./

RUN yarn install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]