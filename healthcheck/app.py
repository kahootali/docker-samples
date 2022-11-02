from flask import Flask, jsonify
app = Flask(__name__)

count = 0

@app.route('/hello')
def hello():
    greeting = "Hello world!"
    return greeting

@app.route('/health')
def health():
    greeting = "Status: UP"
    return greeting


@app.route('/count', methods=["GET"])
def getCount():
    global count
    count += 1
    return str(count)

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080)