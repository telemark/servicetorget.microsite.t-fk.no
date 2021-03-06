FROM mhart/alpine-node:10 as base
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm i --production
COPY . .

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
COPY --from=base /usr/src .
ENV SERVICETORGET_SERVER_PORT 8000
EXPOSE 8000
CMD ["node", "standalone.js"]