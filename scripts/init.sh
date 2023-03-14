#! /usr/bin/bash

# Start docker
sudo systemctl start docker

# Pull container
docker pull sarant1/websitev2:nginx

# Run containers
docker run -d -p 8080:80 sarant1/websitev2:nginx
docker run -d -p 8081:80 sarant1/websitev2:nginx


