# Usa un'immagine Node.js come base
FROM node:16 AS build
 
# Imposta la directory di lavoro
WORKDIR /appReactTest
 
# Copia il package.json e il package-lock.json
COPY package*.json ./
 
# Installa le dipendenze
RUN npm install
 
# Copia il resto dei file dell'app
COPY . .
 
# Esegui la build della tua applicazione
RUN npm run build
 
# Usa un'immagine Nginx per servire l'app
FROM nginx:alpine
 
# Copia i file di build nella directory di Nginx
COPY --from=build /appReactTest/build /usr/share/nginx/html
 
# Espone la porta 80
EXPOSE 80
 
# Avvia Nginx
CMD ["nginx", "-g", "daemon off;"]