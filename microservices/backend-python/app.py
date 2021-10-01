from flask import Flask, jsonify
app = Flask(__name__)

instructors = [
    { 'firstName': "Muhammad Ali", 'lastName': "Kahoot"  },
    { 'firstName': "Ali", 'lastName': "Arslan"  }
]
students = [
    { 'id': "1", 'firstName': "Khizer", 'lastName': "Rehan"  },
    { 'id': "2",'firstName': "Bilal", 'lastName': "Maqsood"  },
    { 'id': "3",'firstName': "Ayaz", 'lastName': "UlHaq"  },
    { 'id': "4",'firstName': "Haider", 'lastName': "Rizvi"  },
    { 'id': "5",'firstName': "Test", 'lastName': "User"  }
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