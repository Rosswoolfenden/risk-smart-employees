FROM node:16.5-alpine3.14 AS base
RUN mkdir /code
COPY . /code/
WORKDIR /code/api


RUN npm ci --silent
# RUN npm run test todo
RUN npm run build
RUN chown -R node:node /code


USER node
EXPOSE 5000
CMD ["npm", "run" , "dev"]