FROM node:20.8.0-alpine3.18

LABEL name="Node Application" \   
     maintainer="Ali Kahoot <kahoot.ali@outlook.com>" \
     summary="A Node Sample application"

# Create app directory
WORKDIR /app

EXPOSE 8080

COPY index.js ./

CMD [ "node", "index.js" ]