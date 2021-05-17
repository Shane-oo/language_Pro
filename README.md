# language_Pro
HTML files:
 all html files go into sub directory "templates"
CSS and JS files:
  all css and JS files go into sub directory "style"
 
GIT FIRST STEP:
 1.Clone repository into your files
 2. IF YOU ARE GOING TO WORK ON CODE- CREATE A BRANCH AND WORK IN THAT BRANCH DO NOT WORK IN MAIN!!!!! THEN WHEN YOU
 THINK ITS DONE AND WORKING PUSH IT AND THEN IF YOU ARE CONFIDENT PULL REQUEST INTO MAIN
 3. DO NOT WORK IN MAIN!!!!!
 4. DO NOT WORK IN MAIN!!!!!
 5. DO NOT WORK IN MAIN!!!!!
 
HOW TO RUN FLASK:
in terminal:
  1. cd into the languagePro directory
  2. $source venv/bin/activate
  3. should see (venv) on the far left of the terminal
  4. flask run
  5. should say running on "http://127.0.0.1:5000/" (numbers may be different)
  6. enter that address in search bar and boom should be working
  
  if any errors occur you may not have Flask downloaded:
  see "Installing Flask" section on https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world
  do not edit any files besides the hmtl, css and js files. if flask is not working and you want to change the .py files pls let me know

Design : 
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

 Development : 
  Python, HTML, CSS, JavaScript, Jquery, Bootstrap and SQLite are used to create the website. 