###########################################################
#
# Dockerfile for servicetorget.microsite.t-fk.no
#
###########################################################

# Setting the base to nodejs 4.5.0
FROM mhart/alpine-node:4.5.0@sha256:ea87db7171dc1c439840d0630c7e3bf6e2158536ce86363a6f5766cc5c98541f

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV SERVICETORGET_SERVER_PORT 8000

EXPOSE 8000

# Startup
ENTRYPOINT node standalone.js
