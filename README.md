# sample-api
The sample API

## How to set up this project:

### Step 0: Pre-Requisites:
- Any opesample system EXCEPT Windows Home Edition
  - If Windows Home is all you have, then you're going to have to either develop in a VM or create a partition and install an OS compatible with Docker (Ubuntu is probably the best option here)
- A Docker account for fetching the MongoDB docker image
- Docker Desktop App (and make sure you're logged in)
- Port 3049 for the App
- Port 27035 for Mongo
- You must have NO mongo docker images existing on your localhost. You must prune/delete them before installing this project.

### Step 1: Build the "sample-api" Docker image
```docker build --rm=true -t sample-api -f Dockerfile-dev .```

### Step 2: Compose the Docker containers for sample-api and MongoDB
```docker-compose up```
