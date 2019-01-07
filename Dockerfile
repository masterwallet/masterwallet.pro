FROM node:11-alpine
WORKDIR /app
COPY package*.* /app/
RUN npm install
COPY public /app/public/
COPY src /app/src/
RUN npm run build

FROM nginx:1.15.8-alpine
COPY --from=0 /app/build/ /usr/share/nginx/html/
COPY ./services/nginx/default.conf /etc/nginx/conf.d/
EXPOSE 80
EXPOSE 443

# start NGINX with reloading every 12 hours (to grab new certificates)
# CMD /bin/sh -c 'while :; do sleep 12h & wait $${!}; nginx -s reload; done & nginx -g "daemon off;"'

CMD ["nginx", "-g", "daemon off;"]
