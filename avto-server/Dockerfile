FROM node:12.11.1-alpine

WORKDIR /var/app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npx tsc
EXPOSE 5000
CMD ["npm","start"]