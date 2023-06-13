FROM node:alpine

COPY package.json ./

#what happens when you build the image
RUN npm install

#what happens when you run the container
CMD ["node","server.js"]