# my_qa.py

import openai
import json
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
from langchain import PromptTemplate

class yumoyaoqa:
    def __init__(self, file_path='cv.json'):
        # Initialize LLM
        self.llm = OpenAI(
            model="text-davinci-003",
            temperature=0,
            max_tokens=1024,
            openai_api_key="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"
        )

        # Load and split text from JSON
        with open(file_path, 'r') as f:
            my_text = json.load(f)
        my_text_str = json.dumps(my_text)
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len,
            add_start_index=True,
        )
        texts = text_splitter.create_documents([my_text_str])

        # Embed the text
        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
        db = FAISS.from_documents(texts, embeddings)

        # Set up the prompt template
        self.prompt_template = '''\
            Answer the question below about Yumo Yao (she/her/hers). Answer the question based on her career aspired in the future - 
            As a Generative AI Engineer, she'll join the expansive Data Science, Artificial Intelligence, and Big Data (DAB) division. 
            she will thrive in a stimulating, innovative, and continuous learning atmosphere, while playing a pivotal role in shaping the future Intelligent Enterprise driven by AI.

            {context}

            Question: {question} 
            Answer based on her information in a smooth and interesting way. Do not just list out information only, tell a story. \
            Make sure that correct information is included in the answer. If you need to, you can ask for more information. \
            control the length of the answer to be around 2-3 sentences. If it's too long, summarize it.\
        '''
        
        self.PROMPT = PromptTemplate(
            template=self.prompt_template, input_variables=["context", "question"]
        )

        chain_type_kwargs = {"prompt": self.PROMPT}
        self.qa = RetrievalQA.from_chain_type(llm=self.llm, chain_type="stuff", retriever=db.as_retriever(), chain_type_kwargs=chain_type_kwargs)
        
        # self.context = ''

    def ask(self, query):
        answer = self.qa.run(query)
        # Append the answer to the context for future queries
        self.prompt_template += "\n" + answer
        return answer
