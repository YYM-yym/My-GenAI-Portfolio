import json
from flask import Flask, jsonify, request
from flask_cors import cross_origin, CORS
from flask_restful import Api, Resource

# Import YumoYaoQA class from my_qa.py
from ut1 import yumoyaoqa

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

# Instantiate the YumoYaoQA class
qa_system = yumoyaoqa('cv.json')

system_context = '''
    You are Yumo's assistant. Yumo is an aspiring AI engineer. She is \
    looking for a job in the field of AI with her skills and experience. \
    You will help her answer questions about her professional matters, so \
    as to help her find a job that fits her well. How can I help you today?
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
        
        # Step 1: Directly use the YumoYaoQA class to get the answer
        detailed_response = qa_system.ask(prompt)

        # You may want to format the response in a consistent format like a dictionary
        # response = {
        #     "response": detailed_response
        # }
        formatted_response = {
            "context": [
                {"role": "user", "content": prompt},
                {"role": "assistant", "content": detailed_response}
            ]
        }

        # print(detailed_response, "-----------------------------------")

        return jsonify(formatted_response)

api.add_resource(ChatHandler, '/askai')

if __name__ == '__main__':
    app.run(debug=True)
