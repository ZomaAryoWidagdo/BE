FROM node:latest

WORKDIR /home/app

COPY . .

ENV TZ="Asia/Jakarta"

RUN npm install --save --production=true

EXPOSE 80 4002
CMD ["npm", "start"]