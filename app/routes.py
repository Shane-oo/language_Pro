from flask import render_template,flash, redirect, url_for, request
from app import app, db
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User
from werkzeug.urls import url_parse
from app.email import send_password_reset_email
from app.form import ResetPasswordForm


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

#module
@app.route('/home')
@login_required  # to protect some pages nd only allow access to authenticated user
def home():
    return render_template("home.html", title='Main Page')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    
    else : 
        email = request.form.get('email')
        password = request.form.get('password')
        user = User.query.filter_by(email=email).first()

        if user is None or not user.check_password(password):
            flash('Invalid username or password','danger')
            return redirect(url_for('login'))
        login_user(user)
        next_page = request.args.get('next')

        if not next_page or url_parse(next_page).netloc != '':
            # page user enters after log in
            next_page = url_for('index')
            return redirect(next_page)

    # check if user is logged in yet - false if logged in and true if isn't
    if current_user.is_authenticated:
        return redirect(url_for('home'))


@app.route('/forgot_pass', methods =['GET', 'POST'])
def forgot_pass():
    if current_user.is_authenticated:
        return redirect(url_for('home'))

    if request.method == 'POST' : 
        email = request.form.get('email')
        user = User.query.filter_by(email=email).first()

        if user : 
            send_password_reset_email(user)
            flash('Check your email for the instructions to reset your password', 'success')
            return redirect(url_for('login'))
    
    return render_template('forgot_pass.html')

@app.route('/pass_request/<token>', methods=['GET', 'POST'])
def pass_request(token):

    # if current_user.is_authenticated:
    #     return redirect(url_for('index'))

    # user = User.verify_reset_password_token(token)

    # if request.method == 'POST' : 
    #     password = request.form.get('new_password')
    #     user.set_password(password)
    #     db.session.commit()

    #     flash('Your password has been reset!', 'success')
    #     return redirect(url_for('login'))
    # return render_template('pass_request.html')

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
        return redirect(url_for('login'))
    return render_template('pass_request.html', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))


@app.route('/signUp', methods=['GET', 'POST'])
def signUp():
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
            return redirect(url_for('login'))
        
        new_user = User(firstname = firstname, lastname=lastname, email=email, progress = 0)
        new_user.set_password(password)

        db.session.add(new_user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!', 'success')
        return redirect(url_for('login'))
    return render_template('signUp.html', title='Register')

    
#-----------------------------------#
# Route to module page
@app.route('/module_page')
@login_required  # protects a view function against anonymous users
def module_page():
    return render_template('module_page.html')

@app.route('/learnHello/')
def learnHello():

    return render_template('learningQuizzes/learnHello.html')

    
@app.route('/learnIntroduce/')
def learnIntroduce():

    return render_template('learningQuizzes/learnIntroduce.html')
@app.route('/learnHowAreYou/')
def learnHowAreYou():

    return render_template('learningQuizzes/learnHowAreYou.html')
@app.route('/learnGoodbye/')
def learnGoodbye():

    return render_template('learningQuizzes/learnGoodbye.html')
@app.route('/learnNumbers/')
def learnNumbers():

    return render_template('learningQuizzes/learnNumbers.html')
@app.route('/learnSimpleQuestions/')
def learnSimpleQuestions():

    return render_template('learningQuizzes/learnSimpleQuestions.html')

@app.route('/quiz/')
def quiz():
    return render_template('quiz.html')

@app.route('/updateProgress/<int:id>/<int:moduleFin>',methods=['POST'])
def updateProgress(id,moduleFin):
    user_to_update = User.query.get_or_404(id)
    if request.method == "POST":
        currentProgress = user_to_update.progress
        # Dont update if its a module thats already been completed
        if(currentProgress<moduleFin):
            user_to_update.progress = user_to_update.progress+1
            try:
                db.session.commit()
                return redirect('/module_page')
            except:
                return "error updating progress"
        else:
            return redirect('/module_page')
    else:
        return render_template('learningQuizzes/learnHello.html')