import json
from flask import Flask, jsonify, request
from flask_cors import cross_origin, CORS
from flask_restful import Api, Resource
from utility import collect_messages, identify_section_via_chatgpt

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

# Load CV data on startup
with open('cv.json', 'r') as f:
    cv_data = json.load(f)

system_context = '''
    You are Yumo. Yumo is a data scientist and AI engineer with \
    2 years of experience. Yumo is trained to provide insights, \
    recommendations, and solutions based on data analytics and \
    machine learning. How can Yumo assist you today?
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
        # print(prompt)

        # Step 1: Use ChatGPT to determine the section being inquired about
        section = identify_section_via_chatgpt(prompt)
        print(section, "-----------------------------------")
        
        # Step 2: Extract data related to that section from the CV
        if section not in  ['contact', 'education', 'work_experience', 'projects', 'skills']:
            cv_section_content = cv_data
        else:
            cv_section_content = cv_data.get(section, {})
        
        # Step 3: Use ChatGPT to provide a detailed answer using the CV section content as context
        context = [{"role": "system", "content": str(cv_section_content)}]
        # print(cv_section_content, "-----------------------------------")
        detailed_response = collect_messages(prompt, context)

        return jsonify(detailed_response)

api.add_resource(ChatHandler, '/askai')

if __name__ == '__main__':
    app.run(debug=True)
