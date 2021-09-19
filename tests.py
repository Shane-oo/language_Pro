# from _typeshed import NoneType
import unittest
import os
from app import app, db, routes
from app.models import User
from app.routes import signUp
# from flaskr import flaskr


class UserModelCase(unittest.TestCase):

    def setUp(self):

        app.config['TESTING'] = True
        app.config['WTF_CSRF_ENABLED'] = False
        app.config['DEBUG'] = False
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' 
        self.app = app.test_client()
        db.drop_all()
        db.create_all()
   

    def tearDown(self):
        db.session.remove()
        db.drop_all()        

    def test_password_hashing(self):
        u = User(firstname= "Joe", lastname= "Tan", email = "joe@test.com")
        u.set_password('joewinpassword')

        self.assertFalse(u.check_password('joelosepassword'))
        self.assertTrue(u.check_password('joewinpassword')) 


   
    def test_valid_user_registration(self):
        response = self.register("Shane","monck",'patkennedy89@gmail.com', 'Eagles1125',0)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Congratulations, you are now a registered user!', response.data)
        
    def test_invalid_user_registration_duplicate_email(self):
        response = self.register("bob","Smith",'patkennedy79@gmail.com', 'Eagles1125', 0)
        self.assertEqual(response.status_code, 200)
        response = self.register("bob","Smith",'patkennedy79@gmail.com', 'Eagles1125', 0)
        self.assertIn(b'Email address already exists!', response.data)
    
    def test_valid_logIn_does_not_exist(self):
        response = self.login('patkennedy89@gmail.com','Eagles2511')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Invalid username or password', response.data)

    def test_valid_logIn(self):
        self.register("Shane","monck",'patkennedy89@gmail.com', 'Eagles1125',0)
        response = self.login('patkennedy89@gmail.com','Eagles1125')
        self.assertEqual(response.status_code, 200)
        # Should be routed to index page
        self.assertIn(b'WELCOME TO LANGUAGE PRO', response.data)

    def test_module_progress(self):
        self.register("Shane","monck",'patkennedy89@gmail.com', 'Eagles1125',0)
        self.login('patkennedy89@gmail.com','Eagles1125')
        response = self.module()
        self.assertEqual(response.status_code, 200)
        self.assertIn(b' Modules Completed = <span id = "progress">0</span>/7', response.data)

    def register(self,firstname,lastname, email, password,progress):
        return self.app.post(
        '/signUp',
        data=dict(firstname = firstname , lastname=lastname, email=email, password=password, progress = progress ),
        follow_redirects=True
    )
    def login(self,email, password):
        return self.app.post(
        '/login',
        data=dict(email=email, password=password ),
        follow_redirects=True
    )
 
    def module(self):
        return self.app.get(
        '/module_page',
        follow_redirects=True
    )

if __name__ == "__main__":
    unittest.main(verbosity=2)
    app.run()
