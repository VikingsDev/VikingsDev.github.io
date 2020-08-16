from flask import Flask, request, render_template, send_from_directory, flash, redirect, url_for

app = Flask(__name__)  # Creates the application object

test = "test"

@app.route('/')
def index():  # Defines what route "index" will do
    return render_template('index.html')  # Renders index.html


# Starting alphabetical
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/aboutactions')
def aboutactions():
    return render_template('aboutactions.html')

@app.route('/aboutmissions')
def aboutmissions():
    return render_template('aboutmissions.html')

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

# TODO: figure out how to implement all the separate workshop pages


# Other
@app.route('/mainpage-template-1')
def mainpage_template_1():
    return render_template('mainpage-template-1.html')


@app.route('/workshop-template')
def workshop_template():
    return render_template('workshop-template.html')


@app.route('/css/<path>')
def send_style(path):
    return send_from_directory('css', path)


@app.route('/js/<path>')
def send_js(path):
    return send_from_directory('js', path)


# app.run(host='0.0.0.0', port=8080)
