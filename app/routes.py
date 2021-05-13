from flask import render_template,flash, redirect, url_for, request
from app import app, db
from app.forms import LoginForm, RegistrationForm
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User
from werkzeug.urls import url_parse



@app.route('/')
@app.route('/home')
@login_required  # to protect some pages nd only allow access to authenticated user
def home():
    return render_template("home.html", title='Main Page')


@app.route('/loginTest', methods=['GET', 'POST'])
def loginTest():
    form = LoginForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            user = User.query.filter_by(email=form.email.data).first()
            if user is None or not user.check_password(form.password.data):
                flash('Invalid username or password')
                return redirect(url_for('loginTest'))
            login_user(user, remember=form.remember_me.data)
            next_page = request.args.get('next')

            if not next_page or url_parse(next_page).netloc != '':
                # page user enters after log in
                next_page = url_for('home')
            return redirect(next_page)

    # check if user is logged in yet - false if logged in and true if isn't
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    return render_template('loginTest.html', form=form)


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))


@app.route('/forgetPass')
def forgetPass():
    return render_template('forgetPass.html')

@app.route('/signupPage2', methods=['GET', 'POST'])
def signupPage2():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RegistrationForm()

    #adding user to db 
    if form.validate_on_submit():
        user = User(email=form.email.data, firstname = form.firstname.data, lastname=form.lastname.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('loginTest'))
    return render_template('signupPage2.html', title='Register', form=form)

#user profile view 
@app.route('/user/<firstname>')
@login_required  # protects a view function against anonymous users
def user(firstname):
    user = User.query.filter_by(firstname=firstname).first_or_404()

    return render_template('user.html', user=user)


####################### START OF TEST HTML PAGES ########################
@app.route('/TestLogin', methods=['GET', 'POST'])
def TestLogin():
    if request.method=='GET': # if the request is a GET we return the login page
        return render_template('TestLogin.html')            
    else: # if the request is POST the we check if the user exist and with the right password
        email = request.form.get('email')
        password = request.form.get('password')
    user = User.query.filter_by(email=email).first()
        # check if the user actually exists
# take the user-supplied password, hash it, and compare it 
# to the hashed password in the database
    if not user:
        flash('Please sign up before!')
        return redirect(url_for('TestSignUp'))

    elif not check_password_hash(user.password, password):
        flash('Please check your login details and try again.')
        return redirect(url_for('TestLogin')) # if the user 
#doesn't exist or password is wrong, reload the page
# if the above check passes, then we know the user has the 
# right credentials
        login_user(user, remember=remember)
    return redirect(url_for('main.profile'))
