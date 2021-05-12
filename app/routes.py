from flask import render_template, flash, redirect, url_for, request
from app import app, db
from app.forms import LoginForm
#from flask_login import current_user, login_user, logout_user, login_required
from app.models import User
from werkzeug.urls import url_parse
from app import app


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/loginPage', methods=['GET', 'POST'])
def loginPage():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
    return render_template('loginFinal.html', form=form)


@app.route('/loginTest', methods=['GET', 'POST'])
def loginTest():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.email.data, form.remember_me.data))
        return redirect(url_for('index'))
    return render_template('loginTest.html', title='Sign In', form=form)


@app.route('/forgetPass')
def forgetPass():
    return render_template('forgetPass.html')


@app.route('/signupPage')
def signupPage():
    return render_template('signupPage.html')
