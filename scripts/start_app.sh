#!/bin/bash
cd /var/www/html
sudo rm -rf *
sudo mv /home/ec2-user/server/build/* /var/www/html/
echo "starting backend app..."
sudo fuser -k 3001/tcp
cd /home/ec2-user/
ls
DIR="/home/ec2-user/aws-backend-node"
if [ -d "$DIR" ]; then
  git config --global --add safe.directory /home/ec2-user/aws-backend-node
  ### Take action if $DIR exists ###
  cd /home/ec2-user/aws-backend-node
  git fetch origin
  git pull
  node -r dotenv/config index.js
else
  echo "aws-backend-node folder doesn't exist :("
fi
  ###  Control will jump here if $DIR does NOT exists ###
  git config --global --add safe.directory /home/ec2-user/aws-backend-node
  cd ~
  echo "git clone https://github.com/wafi543/aws-backend-node"
  git clone https://github.com/wafi543/aws-backend-node
  cd aws-backend-node
  sudo npm install
  node -r dotenv/config index.js