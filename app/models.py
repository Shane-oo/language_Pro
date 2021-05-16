from app import db, login, app
from datetime import datetime
#password security for db 
from werkzeug.security import generate_password_hash, check_password_hash 
from flask_login import UserMixin
from time import time
import jwt

#creating user database model - UserMixin : mixin class that includes generic implementations that are appropriate for most user model classes. 
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128)) #security - user password will not be stored in the db if the database ever becomes compromised, the attackers will have access to the passwords, and that could be devastating for users. Instead of writing the passwords directly, I'm going to write password hashes, which greatly improve security. 
    firstname = db.Column(db.String(64))
    lastname = db.Column(db.String(64)) 
    progress = db.Column(db.Integer)
    testScore = db.Column(db.Integer)


    def __repr__(self):
        return '<User {}>'.format(self.email) 

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)  

    @login.user_loader
    def load_user(id):
        return User.query.get(int(id))
    
    def get_reset_password_token(self, expires_in=600):
        return jwt.encode(
            {'reset_password': self.id, 'exp': time() + expires_in},
            app.config['SECRET_KEY'], algorithm='HS256')

    @staticmethod
    def verify_reset_password_token(token):
        try:
            id = jwt.decode(token, app.config['SECRET_KEY'],
                            algorithms=['HS256'])['reset_password']
        except:
            return
        return User.query.get(id)