FROM node:8-alpine

WORKDIR /opt/app
COPY . /opt/app
RUN apk add --no-cache tini && npm install --production

USER node
ENTRYPOINT ["/sbin/tini", "--"]

EXPOSE 3000
CMD ["node", "bin/global-feature-express.js", "/opt/app/features/"]
