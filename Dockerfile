# Specify the Docker image to use as a base:
FROM ruby:2.5.8

RUN useradd -m -s /bin/bash -u 1000 winner
USER winner
WORKDIR /home/winner/myapp
