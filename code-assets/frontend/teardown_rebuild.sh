cd csun-dash
git pull
npm run build
sudo rm -rf /var/www/csundash.kyeou.xyz/html
sudo mkdir /var/www/csundash.kyeou.xyz/html
sudo cp -r build/* /var/www/csundash.kyeou.xyz/html/ 
sudo systemctl restart nginx
