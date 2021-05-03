from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/loginPage')
def loginPage():
    return render_template('loginPage.html')

@app.route('/forgetPass')
def forgetPass():
    return render_template('forgetPass.html')

@app.route('/signupPage')
def signupPage():
    return render_template('signupPage.html')

@app.route('/module_page')
def moudule_page():
    return render_template('module_page.html')

@app.route('/test1_page')
def test1_page():
    return render_template('learningQuizzes/test1_page.html')
