# nestjs-bull-example

## Prerequisite
  * docker
  * docker-compose
  * pm2 process manager (`npm install pm2@latest -g`)
  * pm2 ts transpiler (`pm2 install typesrcipt`)
  
## Installation

```bash
$ npm install
```

## Running the app

```bash
# Start 1 api and 4 workers
$ pm2 start ecosystem.config.yml

```


