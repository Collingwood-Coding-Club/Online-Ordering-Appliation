FROM debian:latest

RUN apt update -y && apt upgrade -y
RUN apt install -y npm nodejs

WORKDIR /app
COPY . /app

RUN npm install

CMD [ "npm", "run", "dev" ]
