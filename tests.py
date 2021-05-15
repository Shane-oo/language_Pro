from _typeshed import NoneType
import unittest

from app import app, db
from app.models import User

class UserModelCase(unittest.TestCase):

    def setUp(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://'
        #  + os.path.join(basedir, 'language_pro.db')
        self.app = app.test_client()
        db.create_all()
        s1 = User(firstname= "Shin", lastname= "Lim", email = "shin@test.com")
        s1.set_password("myPassword")
        s2 = User(firstname= "Iffah", lastname= "Mohamed Zulkifli", email = "Iffah@test.com")
        s2.set_password("notmYPassword")
        db.session.add(s1)
        db.session.add(s2)
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def test_password_hashing(self):
        u = User(firstname= "Joe", lastname= "Tan", email = "joe@test.com")
        u.set_password('joewinpassword')

        self.assertFalse(u.check_password('joelosepassword'))
        self.assertTrue(u.check_password('joewinpassword')) 

    def test_score(self):

        u1 = User(firstname = "Shane", lastname = "Monck", email = "shane@test.com")
        u2 = User(firstname = "Guest", lastname = "1", email = "guest1@test.com")

        db.session.add(u1)
        db.session.add(u2)

        db.session.commit()

        self.assertEqual(u1.testScore(), NoneType)
        self.assertEqual(u2.testScore(), Null)

if __name__ == "__main__":
    unittest.main(verbosity=2)

