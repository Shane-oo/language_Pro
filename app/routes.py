from flask import render_template,flash, redirect, url_for, request
from app import app, db
from app.forms import LoginForm, RegistrationForm
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User
from werkzeug.urls import url_parse
from app.email import send_password_reset_email
from app.forms import ResetPasswordForm



@app.route('/')
@app.route('/index2')
def index2():
    return render_template('index2.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/home')
@login_required  # to protect some pages nd only allow access to authenticated user
def home():
    return render_template("home.html", title='Main Page')

@app.route('/login_Final_2', methods=['GET', 'POST'])
def login_Final_2():
    if request.method == 'GET':
        return render_template('login_Final_2.html')
    
    else : 
        email = request.form.get('email')
        password = request.form.get('password')
        user = User.query.filter_by(email=email).first()

        if user is None or not user.check_password(password):
            flash('Invalid username or password','danger')
            return redirect(url_for('login_Final_2'))
        login_user(user)
        next_page = request.args.get('next')

        if not next_page or url_parse(next_page).netloc != '':
            # page user enters after log in
            next_page = url_for('home')
            return redirect(next_page)

    # check if user is logged in yet - false if logged in and true if isn't
    if current_user.is_authenticated:
        return redirect(url_for('home'))


@app.route('/forgot_pass', methods =['GET', 'POST'])
def forgot_pass():
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    if request.method == 'POST' : 
        email = request.form.get('email')
        user = User.query.filter_by(email=email).first()

        if user : 
            send_password_reset_email(user)
            flash('Check your email for the instructions to reset your password', 'success')
            return redirect(url_for('login_Final_2'))
    
    return render_template('forgot_pass.html')

# @app.route('/pass_request/<token>', methods=['GET', 'POST'])
# def pass_request(token):
#     if current_user.is_authenticated:
#         return redirect(url_for('index'))

#     user = User.verify_reset_password_token(token)

#     if not user:
#         return redirect(url_for('index'))

#     if request.method == 'POST' : 
#         password = request.form.get('password')
#         user.set_password(password)
#         db.session.commit()

#         flash('Your password has been reset!', 'success')
#         return redirect(url_for('login_Final_2'))

#     return render_template('pass_request.html')

@app.route('/reset_password2/<token>', methods=['GET', 'POST'])
def reset_password2(token):
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    user = User.verify_reset_password_token(token)

    if not user:
        return redirect(url_for('index'))
        
    form = ResetPasswordForm()

    if form.validate_on_submit():
        user.set_password(form.password.data)
        db.session.commit()
        flash('Your password has been reset.')
        return redirect(url_for('login_Final_2'))
    return render_template('reset_password2.html', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/sign_up_3', methods=['GET', 'POST'])
def sign_up_3():
    if current_user.is_authenticated:
        return redirect(url_for('index'))

    if request.method == 'POST' :  
        #adding user to db 
        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        email = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()

        if user : 
            flash('Email address already exists!','warning')
            return redirect(url_for('login_Final_2'))
        
        new_user = User(firstname = firstname, lastname=lastname, email=email)
        new_user.set_password(password)

        db.session.add(new_user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!', 'success')
        return redirect(url_for('login_Final_2'))
    return render_template('sign_up_3.html', title='Register')

    
#user profile view 
@app.route('/user')
@login_required  # protects a view function against anonymous users
def user():
    return render_template('user.html', name=current_user.firstname)


@app.route('/quiz')
def quiz():
    return render_template('quiz.html')
