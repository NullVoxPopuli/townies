# ---- Base Node ----
FROM mhart/alpine-node:9.4.0 AS base

ENV YARN_CACHE_FOLDER=/app/.yarn-cache
WORKDIR /app

RUN apk add --no-cache make gcc bash g++ python \
  && mkdir -p /app/.yarn-cache

COPY package.json yarn.lock /app/
COPY api/package.json /app/api/package.json
COPY core/package.json /app/core/package.json
COPY config/package.json /app/config/package.json
COPY infrastructure/package.json /app/infrastructure/package.json
RUN  yarn install --pure-lockfile

# ---- Development ----
FROM base as development
ENV YARN_CACHE_FOLDER=/app/.yarn-cache
WORKDIR /app
COPY --from=base /app /app

FROM base as release-build
COPY . .
COPY --from=base /app /app
RUN yarn
RUN /app/node_modules/.bin/tsc

# ---- Release ----
FROM mhart/alpine-node:9.4.0 AS release
WORKDIR /app
COPY --from=release-build /app/dist /app/dist
EXPOSE 3000
CMD ["node", "dist/api/src/index.js"]
