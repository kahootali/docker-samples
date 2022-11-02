FROM ubuntu
RUN groupadd -r temp-user && useradd -r -g temp-user temp-user
USER root

RUN apt update

COPY --chown=temp-user:temp-user test-file.txt /app/
WORKDIR /app
RUN chown temp-user:temp-user /var
USER temp-user