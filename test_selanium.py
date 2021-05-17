import unittest, os, time, string, random
from app import app, db
form selenium import webdriver

class SystemTest(unittest, TestCase):
    driver = None
    #TEST IF WEBSITE WORKING FINE FOR CHROME'S USER
    def test_user_chrome(self):
        # SET UP DRIVER
        self.driver = webdriver.Chrome('/chromedriver')
        if not self.driver: 
            self.skipTest("web browser not available")
        else:
            self.driver.maximize_window()
        # TEST USER'S REGISTRATION
        self.driver.get("http://127.0.0.1:5000/")
        self.driver.implicity_wait(2)

        
