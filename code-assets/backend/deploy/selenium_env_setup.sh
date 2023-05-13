sudo apt-get update
sudo apt-get install -y wget gnupg unzip
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | sudo tee /etc/apt/sources.list.d/google-chrome.list
sudo apt-get update
sudo apt-get install -y google-chrome-stable
sudo apt-get install -y xvfb unzip
# wget https://chromedriver.storage.googleapis.com/94.0.4606.41/chromedriver_linux64.zip
# wget https://chromedriver.storage.googleapis.com/113.0.5672.24/chromedriver_linux64.zip
wget https://chromedriver.storage.googleapis.com/112.0.5615.49/chromedriver_linux64.zip
unzip chromedriver_linux64.zip
sudo mv chromedriver /usr/local/bin/
sudo chown root:root /usr/local/bin/chromedriver
sudo chmod +x /usr/local/bin/chromedriver
sudo apt-get install -y python3-pip
sudo pip3 install selenium
sudo pip install selenium
