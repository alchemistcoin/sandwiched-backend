FROM node:14

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . .

RUN npm ci #--only=production
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "start" ]
