FROM golang:alpine

LABEL name="Golang Application" \    
      maintainer="Ali Kahoot <kahoot.ali@outlook.com>" \
      summary="A Golang Sample application"  

WORKDIR /app

EXPOSE 8080 

COPY main.go ./
 
RUN go env -w GO111MODULE=auto 

RUN go build main.go
 
CMD ["./main"]