# ---- Base ----
FROM mhart/alpine-node:9.4.0 AS base

ENV YARN_CACHE_FOLDER=/app/.yarn-cache
WORKDIR /app

RUN apk add --update openrc nginx bash \
  && rm -rf /var/cache/apk/* \
  && mkdir -p /run/nginx \
  && mkdir -p /app/.yarn-cache

COPY web/nginx/default-vhost.conf /etc/nginx/conf.d/default.conf
COPY package.json yarn.lock /app/
COPY core/package.json /app/core/package.json
COPY config/package.json /app/config/package.json
COPY infrastructure/package.json /app/infrastructure/package.json
COPY web/package.json /app/web/package.json
RUN yarn install --pure-lockfile

# ---- Development ----
FROM base as development
ENV YARN_CACHE_FOLDER=/app/.yarn-cache
WORKDIR /app
COPY --from=base /app /app

# ---- Build ----
FROM base as release-build
COPY --from=base /app /app
COPY . /app
RUN cd web && NODE_ENV=production /app/node_modules/.bin/webpack --output-path /app/_html_tmp

# ---- Release ----
FROM nginx:stable-alpine AS release
COPY --from=release-build /app/_html_tmp /usr/share/nginx/html
COPY web/nginx/default-vhost.prod.conf etc/nginx/conf.d/default.conf
