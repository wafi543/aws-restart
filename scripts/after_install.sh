#!/bin/bash
# setup backend node express
# sudo fuser -k 3001/tcp
sudo service status codedeploy-agent
# DIR="/home/ec2-user/aws-backend-node"
# if [ -d "$DIR" ]; then
#   git config --global --add safe.directory /home/ec2-user/aws-backend-node
#   ### Take action if $DIR exists ###
#   cd /home/ec2-user/aws-backend-node
#   git fetch origin
#   git pull
#   # node -r dotenv/config index.js
# else
#   git config --global --add safe.directory /home/ec2-user/aws-backend-node
#   ###  Control will jump here if $DIR does NOT exists ###
#   cd ~
#   echo "git clone https://github.com/wafi543/aws-backend-node"
#   git clone https://github.com/wafi543/aws-backend-node
#   cd /home/ec2-user/aws-backend-node
#   sudo npm install
#   # node -r dotenv/config index.js
# fi