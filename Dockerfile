FROM node:20-alpine3.16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# FROM nginx:1.21-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

RUN mkdir -p /usr/share/nginx/data
ADD data/amazon-filter.json /usr/share/nginx/data/
COPY --from=build /app/build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
