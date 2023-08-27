from flask import Flask, request, jsonify

app = Flask(__name__)

#API to get the data from the client
@app.route('/getinput')
def getinput():
    print(1111)
    data = request.get_json()
    print(data)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)