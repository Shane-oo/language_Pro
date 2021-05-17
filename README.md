# CITS3403 language_Pro Group Project

## Design : 
  1. Base page 
    This page is the page that is being referenced by the other html pages. It includes the navigation bar that will be present for most of our pages and links all the available pages that are available. 

  2. Index Page - Home page 
    This is the first page that all users will be able to see and does not require user login. 
    The home page consist of 3 things - course information, about us and contact us. 

  3. Sign Up Page 
    This is the page that unregistered users will be directed to create an account. It can also be accessed when users click on 
    "Get Started" button in home page.
    Users are required to fill in their name, email and password to create an account. 

  4. Login Page 
    This is the page where users will be directed to if the click on the "I already have an account" button in the home page.
    After successfully loging in, users will be directed to the Index page with their names showing on the navigation bar.  

  5. Forgot Password Page  - includes password request page
    This page is accessible through the login page and will be required to enter their registered email account. 
    If the email received is a valid and registered email, users will be notified to check their email. A link will be sent to the user which they can click on that will direct them to the password request page. 

  6. Module Page 
    In this page, 7 modules are linked to it with various levels. User is only allowed to access this page if they are a registered user and have logged in. User will only be able to access the first module and can only proceed upon completion. 

  7. Quiz Page 
    This page is only accessible in the Module page and only if all modules are completed. Users will click on 'Test yourself' button to start the quiz and they are required to complete a number of timed questions. 
    Once time is up, the right answer will be shown to the user. Upon completion of the quiz, score will be shown and user will be given the option of either restarting the quiz or to get their certificate. 

 ## Development : 
  Python, HTML, CSS, JavaScript, Jquery, Bootstrap and SQLite are used to create the website. 

  How to Run : 
  1. Prerequisites : 
      - python 3.7 is required for this project to run. 

      on linux : 
      $ sudo apt-get install python3.6 

      on mac : 
      $ install python3 

      on Windows : 
      Proceed to python website and download the installer 


  2. Installation 
    To set up the virtual environment, this needs to be set up first before flask run can be done : 
    
    on mac and Linux : 
    $ python3 -m venv venv
    $ virtualenv venv
    $ source venv/bin/activate
    $ pip install flask
    $ pip install -r requirements.txt 

    on Windows : 
    $ python3 -m venv venv
    $ virtualenv venv
    $ venv\Scripts\activate
    $ pip install flask
    $ pip install -r requirements.txt 


    To test the project  :

    on mac and Linux : 
    $ python3 tests.py


    For Selanium testing : 

    on mac and Linux : 
    $ python3 test_selanium.py

    Deployment : 
    To run this locally. Flask environment needs to be set up and is done as followed. 

    on mac and Linux :
    $ export FLASK_APP=languagePro.py
    $ flask run 

    on Windows : 
    set FLASK_APP=languagePro.py
    flask run 


  ## References : 
  1. https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world
  2. https://getbootstrap.com/docs/5.0/getting-started/introduction/
  3. https://www.w3schools.com/css/


  ## Authors : 
  - Joe Win Tan 
  - Shane Monck 
  - Nur'Iffah Binte Mohamed Zulkifli 
  - Yuh Shin Lim 
        


