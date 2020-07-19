from flask import Flask, request, render_template, send_from_directory, flash, redirect, url_for

app = Flask(__name__)  # Creates the application object


@app.route('/')
def index():  # Defines what route "index" will do
    return render_template('index.html')  # Renders index.html


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/bounties')
def bounties():
    return render_template('bounties.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/events')
def events():
    return render_template('events.html')


@app.route('/workshops')
def workshops():
    return render_template('workshops.html')


@app.route('/mainpage-template-1')
def mainpage_template_1():
    return render_template('mainpage-template-1.html')


@app.route('/css/<path>')
def send_style(path):
    return send_from_directory('css', path)


@app.route('/js/<path>')
def send_js(path):
    return send_from_directory('js', path)


# app.run(host='0.0.0.0', port=8080)
