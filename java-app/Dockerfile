FROM gcr.io/distroless/java:11

LABEL name="Java Application" \    
      maintainer="Ali Kahoot <kahoot.ali@outlook.com>" \
      summary="A Java Spring Boot application" 

USER 1001

ENV HOME=/opt/app

WORKDIR $HOME

# Expose the port on which your service will run
EXPOSE 8080

# NOTE we assume there's only 1 jar in the target dir
COPY target/*.jar $HOME/artifacts/app.jar

CMD ["artifacts/app.jar"]