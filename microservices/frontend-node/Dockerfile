FROM node:10-alpine

LABEL name="Node Express Application" \   
     maintainer="Ali Kahoot <kahoot.ali@outlook.com>" \
     summary="A Node Express application"

# Create app directory
WORKDIR /app

EXPOSE 8080

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

COPY server.js ./

CMD [ "npm", "start" ]