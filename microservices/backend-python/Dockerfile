FROM python:3.10.13-alpine

RUN pip install flask

COPY app.py /

EXPOSE 8080

CMD [ "python", "./app.py" ]