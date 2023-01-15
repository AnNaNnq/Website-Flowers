### Build du projet ###
FROM node:16.15.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm config set fetch-retry-maxtimeout 120000 #Eviter les timeout car la commande est longue à l'exécution.
RUN npm install
COPY . .
RUN npm run build
### Lancement du serveur web ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/flowers /usr/share/nginx/html
