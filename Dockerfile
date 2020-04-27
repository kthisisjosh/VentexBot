# pull official base image
FROM node:13.13.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["node", "./src/bot.js"]