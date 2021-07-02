FROM golang:alpine as build

WORKDIR /app

COPY main.go ./
 
RUN go env -w GO111MODULE=auto 

RUN go build main.go

FROM alpine

LABEL name="Golang Application" \    
      maintainer="Ali Kahoot <kahoot.ali@outlook.com>" \
      summary="A Golang Sample application"  

EXPOSE 8080 

WORKDIR /app

COPY --from=build ./app/main ./
 
CMD ["./app/main"]