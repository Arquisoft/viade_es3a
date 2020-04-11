# pull official base image
FROM node:13

# Versions
# RUN npm -v
# RUN node -v

# set working directory
WORKDIR /viade

# add `/viade/node_modules/.bin` to $PATH
ENV PATH /viade/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /viade/package.json
#COPY package-lock.json ./
COPY package-lock.json /viade/package-lock.json

RUN npm install --silent 

# add app
COPY . /viade

# start app
CMD ["npm", "start"]
