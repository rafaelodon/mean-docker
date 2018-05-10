# Stage 0: Angular Sources + NPM/Node
FROM node:carbon-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
RUN npm install -g @angular/cli & npm run build

# Stage 1: Angular Dist + Nginx
FROM nginx:1.13.3-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=0 /app/dist/ /usr/share/nginx/html/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
