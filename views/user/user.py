from flask import render_template

from blueprints import user
from flask import request, Response, session

@user.route('/login', methods=['POST'])
def login():    
    if request.form['password'] == 'senha123' and request.form['username'] == 'admin':
        session['logged_in'] = True
        return render_template('home.html')
    else:
        session['logged_in'] = False
    return render_template('login.html')

@user.route('/logout')
def logout():
    if session.get('logged_in'):
        session['logged_in'] = False    
    return render_template('login.html')
    
    