FROM node:8.0.0-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build
EXPOSE 3000
CMD [ "npm", "run", "start:server" ]
