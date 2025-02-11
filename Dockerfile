# Utilisation de l'image Node.js
FROM --platform=linux/amd64 node:18

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "start"]
