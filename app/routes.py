from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/accountPage')
def accountPage():
    return render_template('accountPage.html')

@app.route('/forgetPass')
def forgetPass():
    return render_template('forgetPass.html')


