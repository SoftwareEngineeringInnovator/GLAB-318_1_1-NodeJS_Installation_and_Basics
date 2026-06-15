# GLAB 318.1.1 - NodeJS Installation and Basics

## Project Overview

This lab introduced the basics of Node.js and npm (Node Package Manager). The goal was to learn how to run JavaScript outside of a web browser, create a Node project, install packages, and build a simple HTTP server.

Throughout this project, I learned how to install and verify Node.js, initialize a project using npm, create and run JavaScript files from the command line, install development dependencies, and create a basic web server with custom routes.

This project was completed as part of the Per Scholas Software Engineering program.

---

## Technologies Used

* Node.js
* npm (Node Package Manager)
* Nodemon
* Git
* GitHub
* Visual Studio Code
* Git Bash

---

## What I Learned

During this lab I learned how to:

* Verify Node.js and npm installations
* Run JavaScript from the command line
* Create and execute JavaScript files using Node
* Initialize a project using npm
* Create and understand a package.json file
* Create and use npm scripts
* Install development dependencies
* Use nodemon to automatically restart applications
* Create a basic HTTP server
* Handle HTTP requests and responses
* Create custom routes
* Return different responses based on URLs
* Handle 404 Page Not Found responses
* Use Git and GitHub to track project progress

---

## Commands Learned

### Verify Node and npm

```bash
node -v
npm -v
```

### Execute JavaScript Expressions

```bash
node -e "17 + 25"
```

```bash
node -p "17 + 25"
```

### Run a JavaScript File

```bash
node index.js
```

### Initialize a Node Project

```bash
npm init
```

### Start the Application

```bash
npm start
```

### Install Nodemon

```bash
npm i --save-dev nodemon
```

### Run Nodemon

```bash
npx nodemon index.js
```

## Project Structure

```text
GLAB-318_1_1-NodeJS_Installation_and_Basics
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
├── README.md
│
└── node_modules
```

---

## How to Run the Project

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project Folder

```bash
cd GLAB-318_1_1-NodeJS_Installation_and_Basics
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```

Or run with nodemon:

```bash
npx nodemon index.js
```

---

## Available Routes

### Home Page

```text
http://127.0.0.1:3000/
```

Displays:

```text
Hello World!
I am a Software Engineering Innovator!
I am learning Node.js.
```

### About Page

```text
http://127.0.0.1:3000/about
```

Displays information about the project and learning experience.

### Contact Page

```text
http://127.0.0.1:3000/contact
```

Displays project and GitHub information.

### Invalid Routes

Any unknown route will return:

```text
404 Page Not Found
```

---

## Challenges Encountered

Some of the challenges I encountered during this lab included:

* Understanding the difference between `node -e` and `node -p`
* Learning how npm scripts work
* Understanding the purpose of `package.json`
* Learning what nodemon does and how it improves development
* Understanding the difference between terminal output and browser responses
* Understanding how `req` and `res` work in a Node server
* Troubleshooting a missing `server.listen()` statement

Working through these issues helped me better understand how Node.js applications run.

---

## Author

Fredy Chilito
Per Scholas Software Engineering Student