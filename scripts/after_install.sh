#!/bin/bash
# setup backend node express
# sudo fuser -k 3001/tcp
DIR="/home/ec2-user/aws-backend-node"
if [ -d "$DIR" ]; then
  ### Take action if $DIR exists ###
  cd ~/aws-backend-node
  git fetch origin
  git pull
  # node -r dotenv/config index.js
else
  ###  Control will jump here if $DIR does NOT exists ###
  cd ~
  echo "git clone https://github.com/wafi543/aws-backend-node"
  git clone https://github.com/wafi543/aws-backend-node
  cd aws-backend-node
  sudo npm install
  # node -r dotenv/config index.js
fi