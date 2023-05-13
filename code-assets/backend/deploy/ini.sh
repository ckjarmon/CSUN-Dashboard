# TODO: this aint finished

sudo apt update
sudo apt install python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools
sudo apt install python3-venv mariadb
cd
git clone https://github.com/kyeou/CSUN-Dashboard
mkdir ~/csundash
sudo mv ~/CSUN-Dashboard/code-assets/backend/csundash.py ~/csundash/
cd ~/csundash
python3.10 -m venv csundashenv
source csundashenv/bin/activate
pip install wheel
pip install uwsgi flask
sudo mv ~/CSUN-Dashboard/code-assets/backend/deploy/wsgi.py.py ~/csundash/
uwsgi --socket 0.0.0.0:5000 --protocol=http -w wsgi:app &
pkill -f "uwsgi --socket 0.0.0.0:5000 --protocol=http -w wsgi:app"
deactivate
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your_domain -d www.your_domain