from flask import Flask, jsonify
app = Flask(__name__)

instructors = [
    { 'firstName': "Muhammad Ali", 'lastName': "Kahoot"  },
    { 'firstName': "Umer", 'lastName': "Munir"  },
    { 'firstName': "Muhammad", 'lastName': "Hammad"  }
]

@app.route('/hello')
def hello():
    greeting = "Hello world!"
    return greeting

@app.route('/instructors', methods=["GET"])
def getInstructors():
    return jsonify(instructors)

@app.route('/instructor/<id>', methods=["GET"])
def getInstructor(id):
    id = int(id) - 1
    return jsonify(instructors[id])

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080)