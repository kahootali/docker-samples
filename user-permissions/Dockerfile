FROM ubuntu
RUN groupadd -r temp-user && useradd -r -g temp-user temp-user
USER root

RUN apt update

WORKDIR /app
USER temp-user
COPY --chown=temp-user:temp-user test-file.txt .