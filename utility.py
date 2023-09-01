import os
import openai

# from dotenv import load_dotenv, find_dotenv

# _ = load_dotenv(find_dotenv())

openai.api_key = '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'
# openai.api_key = os.getenv('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')


## Helper function
def get_completion(prompt, model="gpt-3.5-turbo", temperature=0):
    messages = [{
        "role": "user",
        "content": prompt
    }]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,  # This should be 'messages' not 'message'
        temperature=temperature,
    )
    return response.choices[0].message["content"]



def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,  # This is correctly named 'messages'
        temperature=temperature,
    )
    return response.choices[0].message["content"]



def collect_messages(prompt: str, context: list, temperature=0):
    context.append({'role': 'user', 'content': f'{prompt}'})
    response = get_completion_from_messages(context, temperature=temperature)
    # response = "HI!!"
    context.append({'role': 'assistant', 'content': f'{response}'})

    return {'context': context}



def identify_section_via_chatgpt(prompt, model="gpt-3.5-turbo", temperature=0):
    # Combine the user's question with a specific question to determine the CV section
    combined_prompt = f"{prompt} Which section would best answer this question?  Answer in a word only: contact, education, work_experience, projects, skills. If no applicable, return other."
    
    messages = [{"role": "user", "content": combined_prompt}]
    
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature,
    )
    
    # Extract the section from the response
    section = response.choices[0].message["content"].strip().lower()

    return section