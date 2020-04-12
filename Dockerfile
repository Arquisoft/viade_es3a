### STAGE 1: Build ###
# pull official base image
FROM node:13 as build

# Versions
# RUN npm -v
# RUN node -v

# set working directory
WORKDIR /viade

# add `/viade/node_modules/.bin` to $PATH
ENV PATH /viade/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /viade/package.json
COPY package-lock.json /viade/package-lock.json

RUN npm install #--silent 
RUN npm install react-scripts -g #--silent

# add app
COPY . /viade

# generar build
RUN npm run build

### STAGE 2: Production Environment ###
FROM nginx:1.17.9-alpine

# Modificamos la configuración por defecto de nginx para que funcionen las rutas en la aplicación React
RUN rm -rf /etc/nginx/conf.d
RUN mkdir /etc/nginx/conf
RUN mkdir /etc/nginx/conf/conf.d
COPY .ngix.conf /etc/nginx/conf/conf.d/default.conf

# copiamos a la carpeta pública del servidor 
COPY --from=build /viade/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
