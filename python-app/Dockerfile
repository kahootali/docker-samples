FROM python:3.6-alpine

LABEL name="Python Application" \   
     maintainer="Ali Kahoot <kahoot.ali@outlook.com>" \
     summary="A Sample Python application"

# Create app directory
WORKDIR /app

EXPOSE 8080

RUN pip install flask

COPY app.py ./

CMD [ "python", "./app.py" ]