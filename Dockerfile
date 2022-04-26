FROM node:lts
EXPOSE 3000
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
COPY . /app
ENTRYPOINT [ "npm","start" ]
