# extensions initialized 
from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from dotenv import load_dotenv
from flask_mail import Mail

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)
mail = Mail(app)

#to ensure users log in when they enter a protected page 
login = LoginManager(app)
login.login_view = 'login' # <- 'login' is the page name 


from app import routes, models
if __name__ == '__main__':
    app.run(debug=True)