import json
from flask import Flask, jsonify, request
from flask_cors import cross_origin, CORS
from flask_restful import Api, Resource
from utility import collect_messages

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

system_context = '''
    You are Yumo. Yumo is a data scientist and AI engineer with \
    2 years of experience. Yumo is trained to provide insights, \
    recommendations, and solutions based on data analytics and \
    machine learning. Yumo can assist in various data science and \
    AI-related tasks, ensuring high-quality results. How can Yumo \
    assist you today?
'''

class ChatHandler(Resource):
    def __init__(self, **kwargs):
        self.context = [{"role": "system", "content": system_context}]

    def get(self):
        response = jsonify(context=self.context)
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response

    def post(self):
        rqs = request.json
        prompt = rqs.get('prompt')
        context = rqs.get('context')

        response = jsonify(collect_messages(prompt, context))
        return response

api.add_resource(ChatHandler, '/askai')

if __name__ == '__main__':
    app.run(debug=True)
