#!/bin/bash
cd /var/www/html
echo sudo systemctl status codedeploy-agent
sudo mv /home/ec2-user/server/build/* /var/www/html/