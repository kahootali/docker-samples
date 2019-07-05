FROM golang:alpine

LABEL name="Golang Application" \    
      maintainer="Ali Kahoot <kahoot.ali@outlook.com>" \
      summary="A Golang Sample application"  

WORKDIR /app

EXPOSE 8080 

ADD main.go .
 
RUN go build
 
CMD ["./app"]