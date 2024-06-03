
## 🤔 What it does ?
A multi-level plagiarism tool that can be used to detect plagiarism in research papers. The tool has been developed to address the issue of the rising instances of plagiarism among students, who submit plagiarized papers for credit without any clear data on how much has been plagiarized. The proposed approach uses the Analytic Hierarchy Process (AHP) technique, which comprises three levels of plagiarism detection: level-0 and level-1

In level-0, the tool uses the Google dorking technique to search for potential plagiarized papers available on the internet. If a paper is found to be plagiarized beyond a set threshold value, it is rejected and does not proceed to level-1. 

In level-1, the tool checks for plagiarism in the introduction, abstract, and references of the paper. Advanced text comparison algorithms are used to compare the submitted paper with existing papers in the database and generate a plagiarism report that highlights any similarities found.

<!-- In level-2, the tool performs a full paper plagiarism check to provide comprehensive detection results. Advanced algorithms are used to scan the entire paper for plagiarism and generate a detailed report that highlights any similarities found. The multi-level approach is aimed at providing an accurate and efficient plagiarism detection system that can identify even the most sophisticated forms of plagiarism, such as when text is heavily reworded or when original text is replaced with similar text using foreign characters. -->
## ⚒️ Technologies used ?

* Frontend - React.js, ChakraUI
* Backend - Node.js, TypeScript, ExpressJS, MongoDB
* NLP - AHP Algorithm, FastAPI



## Installation
### Installing Frontend 

Install all the NPM packages:
```
npm i 
```
In order to run the frontend:
```
npm run start
```

> **Note that you will have to add your own `.env` file at the root directory and add your own environment variables for the project to build.**

Following are the environment variables used for frontend:
- `REACT_APP_BASE_URL` - The domain name (usually http://localhost:3000)


### Installing Backend
```bash
# Install dependencies
npm install

# Add mongoURI, port and JWT_SECRET in .env file
OR
# Edit the default.json file with your mongoURI, port and JWT_SECRET
OR
# Use production.json in production env

# Run
npm start 
OR 
nodemon .\index.js
```
### Installing NLP Plagiarism Detction Part
Install virtual environment 
``` 
pip install virtualenv
```
Create a virtual environment 
```
virtualenv myenv
```
Activate the virtual environment:
```
source myenv/bin/activate
```
Install Requirements.txt
```
pip install -r
```
Run fastapi 
```
python -m uvicorn app:app --reload 
```

