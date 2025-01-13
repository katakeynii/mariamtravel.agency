# Étape de build
FROM node:20.18.0-alpine AS builder

WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./
# COPY yarn.lock ./

# Installation des dépendances
RUN yarn install --frozen-lockfile

# Copie du code source
COPY . .

# Construction de l'application
RUN yarn build

# Étape de production avec Nginx
FROM nginx:alpine

# Copie de la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie des fichiers statiques depuis l'étape de build
COPY --from=builder /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=builder /app/public /usr/share/nginx/html/public
COPY --from=builder /app/.next/standalone /usr/share/nginx/html

# Exposition du port 80
EXPOSE 80

# Démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]