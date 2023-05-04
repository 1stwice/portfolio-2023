# syntax=docker/dockerfile:1.4

#FROM --platform=$BUILDPLATFORM node:18.16.0-bullseye-slim as builder

#RUN mkdir /project
#WORKDIR /project

#RUN npm install -g http-server

#COPY /dist/portfolio .
#CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check"]
#CMD ["http-server", "./dist/portfolio", "-p 80"]

#FROM builder as dev-envs

#RUN <<EOF
#apt-get update
#apt-get install -y --no-install-recommends git
#EOF

#RUN <<EOF
#useradd -s /bin/bash -m vscode
#groupadd docker
#usermod -aG docker vscode
#EOF
# install Docker tools (cli, buildx, compose)
#COPY --from=gloursdocker/docker / /

#CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check"]

#Serve app with nginx
#FROM nginx:latest AS ngi

#RUN chown nginx:nginx /usr/share/nginx/html/*

#COPY --from=builder /project/ /usr/share/nginx/html

#EXPOSE 80