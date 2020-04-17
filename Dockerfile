### STAGE 1: Build ###
# pull official base image
FROM node:13.12 as build

#ARG MAX_OLD_SPACE_SIZE=4096
#ENV NODE_OPTIONS=--max-old-space-size=${MAX_OLD_SPACE_SIZE}
# add `/viade/node_modules/.bin` to $PATH
ENV PATH /viade/node_modules/.bin:$PATH

# set working directory
WORKDIR /viade

# install app dependencies
COPY package.json /viade/package.json
COPY package-lock.json /viade/package-lock.json

RUN npm install --silent 
RUN npm install react-scripts -g --silent

# add app
COPY . /viade

# generar build
RUN npm run --max-old-space-size=4096 build 

### STAGE 2: Production Environment ###
FROM nginx:1.17.9-alpine

# Modificamos la configuración por defecto de nginx para que funcionen las rutas en la aplicación React
RUN rm -rf /etc/nginx/conf.d && mkdir /etc/nginx/conf && mkdir /etc/nginx/conf/conf.d
COPY .ngix.conf /etc/nginx/conf/conf.d/default.conf

# copiamos a la carpeta pública del servidor 
COPY --from=build /viade/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
