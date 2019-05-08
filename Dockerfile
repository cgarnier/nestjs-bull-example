FROM mhart/alpine-node
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
CMD node dist/main.js
