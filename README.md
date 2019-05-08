# nestjs-bull-example

## Prerequisite
  * docker
  * docker-compose
  
## Installation

```bash
$ docker-compose build
```

## Running the app

```bash
# Start the stack
$ docker-compose up

```

## Add jobs

```bash
# Request with httpie
$ http POST http://localhost:3000/jobs value=2
```
