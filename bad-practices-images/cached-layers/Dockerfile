FROM ubuntu
ADD . /
RUN apt-get update && apt-get install -y \
    build-essential \ 
    gcc \
    curl \
    make \
    python3 \
    python3-pip
RUN pip3 install --upgrade pip 
CMD ["python3" ,"app.py"]