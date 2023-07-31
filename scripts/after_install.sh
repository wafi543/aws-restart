#!/bin/bash
# setup backend node express
DIR="/home/ec2-user/aws-backend-node"
if [ -d "$DIR" ]; then
  ### Take action if $DIR exists ###
  echo "git pull main from aws-back-node..."
else
  ###  Control will jump here if $DIR does NOT exists ###
  echo "git clone https://github.com/wafi543/aws-backend-node"
  git clone https://github.com/wafi543/aws-backend-node
fi