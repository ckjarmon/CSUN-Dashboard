sudo apt install python3.10
sudo apt install python3-venv
mkdir ~/csundash
cd ~/csundash
git clone htps://github.com/kyeou/CSUN-Dashboard
for A in $( find -mindepth 1 -maxdepth 1 ~/csundash/CSUN-Dashboard/code-assets/backend ) ; do B=$( basename $A ) ; mv -iv ~/csundash/CSUN-Dashboard/code-assets/backend$B ~/csundash/ ; done
python3.10 -m venv csundashenv
source csundashenv/bin/activate



# ------
# Database Setup
# => sudo apt-get install libmariadb3 libmariadb-dev
# => sudo apt install mariadb-server
# => sudo mysql_secure_installation
# => sudo mariadb 
# == check if root has admin privlges, if so, create py_serv user and grant all


# ------
# Webserver Setup
sudo apt install nginx
sudo ufw allow 'Nginx HTTP'
sudo ufw status
pip install wheel
pip install uwsgi flask

