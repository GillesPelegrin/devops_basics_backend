FROM node:18-alpine3.16

RUN apk add --update npm

## Installing OpenJDK

# Default to UTF-8 file.encoding
ENV LANG C.UTF-8

# add a simple script that can auto-detect the appropriate JAVA_HOME value
# based on whether the JDK or only the JRE is installed
RUN { \
    echo '#!/bin/sh'; \
    echo 'set -e'; \
    echo; \
    echo 'dirname "$(dirname "$(readlink -f "$(which javac || which java)")")"'; \
    } > /usr/local/bin/docker-java-home \
    && chmod +x /usr/local/bin/docker-java-home

ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk/jre
ENV PATH $PATH:/usr/lib/jvm/java-11-openjdk/jre/bin:/usr/lib/jvm/java-11-openjdk/bin

RUN set -x \
    && apk add --no-cache \
    openjdk11

## Installing Flyway

WORKDIR /flyway

ENV FLYWAY_VERSION 5.2.1

RUN apk --no-cache add --update bash openssl \
    && wget https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/${FLYWAY_VERSION}/flyway-commandline-${FLYWAY_VERSION}.tar.gz \
    && tar -xzf flyway-commandline-${FLYWAY_VERSION}.tar.gz \
    && mv flyway-${FLYWAY_VERSION}/* . \
    && rm flyway-commandline-${FLYWAY_VERSION}.tar.gz \
    && ln -s /flyway/flyway /usr/local/bin/flyway
