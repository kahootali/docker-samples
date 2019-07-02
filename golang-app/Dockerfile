FROM golang:alpine
 
WORKDIR /app

EXPOSE 8080 

ADD main.go .
 
RUN go build
 
CMD ["./app"]