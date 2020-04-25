FROM node:12.14.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public
RUN npm run build

COPY . /usr/src/app

CMD ["npm", "start"]