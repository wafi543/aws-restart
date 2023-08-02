#!/bin/bash
cd /var/www/html
sudo rm -rf *
sudo mv /home/ec2-user/server/build/* /var/www/html/