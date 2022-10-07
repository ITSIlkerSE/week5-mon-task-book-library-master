FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/booklib.jar booklib.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /booklib.jar"]