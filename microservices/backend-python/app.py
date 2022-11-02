from flask import Flask, jsonify
app = Flask(__name__)

instructors = [
    { 'firstName': "Muhammad Ali", 'lastName': "Kahoot"  },
    { 'firstName': "Mehmood", 'lastName': "Khan"  }
]
students = [
    { 'id': "1", 'firstName': "Hassan", 'lastName': "Sheikh"  },
    { 'id': "2",'firstName': "Kazim", 'lastName': "Ali"  },
    { 'id': "3",'firstName': "Adeel", 'lastName': "Ahmed"  },
    { 'id': "4",'firstName': "Adeel", 'lastName': "Raza"  },
    { 'id': "5",'firstName': "Test", 'lastName': "User"  },
    { 'id': "6",'firstName': "Ali", 'lastName': "Ahmed"  },
    { 'id': "7",'firstName': "Hamad", 'lastName': "Khan"  }
]

@app.route('/hello')
def hello():
    greeting = "Hello world!"
    return greeting

@app.route('/instructors', methods=["GET"])
def getInstructors():
    return jsonify(instructors)

@app.route('/students', methods=["GET"])
def getStudents():
    return jsonify(students)

@app.route('/instructor/<id>', methods=["GET"])
def getInstructor(id):
    id = int(id) - 1
    return jsonify(instructors[id])

@app.route('/student/<id>', methods=["GET"])
def getStudent(id):
    id = int(id) - 1
    return jsonify(students[id])

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8080)