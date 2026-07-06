# 🚀 Automated Web Application Deployment using GitHub, Jenkins & Docker

> A complete CI/CD pipeline that automatically builds and deploys a
> Node.js web application using **GitHub**, **Jenkins**, and **Docker**.

## 📌 Project Overview

This project demonstrates an end-to-end Continuous Integration and
Continuous Deployment (CI/CD) workflow. Whenever code is pushed to
GitHub, Jenkins automatically retrieves the latest source code, installs
dependencies, builds a Docker image, replaces the running container, and
deploys the latest version of the application.

## ✨ Features

-   Continuous Integration (CI)
-   Continuous Delivery (CD)
-   Automated Docker deployment
-   GitHub Webhook integration
-   Jenkins Pipeline (`Jenkinsfile`)
-   Health check after deployment
-   Dockerized Node.js + Express application

## 🛠️ Tech Stack

  Technology     Purpose
  -------------- -------------------------------------
  Node.js        Backend Runtime
  Express.js     Web Framework
  Git & GitHub   Version Control
  Jenkins        CI/CD Automation
  Docker         Containerization
  ngrok          Public webhook tunnel (development)
  macOS M1       Development environment

## 🏗️ System Architecture

``` text
Developer
    │
git add / commit / push
    │
    ▼
GitHub Repository
    │
GitHub Webhook
    │
    ▼
Jenkins Pipeline
    │
 ├── Checkout Source
 ├── Verify Environment
 ├── npm install
 ├── Build Docker Image
 ├── Stop Old Container
 ├── Remove Old Container
 ├── Deploy New Container
 └── Health Check
    │
    ▼
Running Web Application
```

## 📁 Project Structure

``` text
automated-web-deployment/
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── Jenkinsfile
├── .dockerignore
├── .gitignore
└── README.md
```

## ⚙️ Prerequisites

-   Git
-   Node.js & npm
-   Docker Desktop
-   Jenkins LTS
-   GitHub Account
-   ngrok

## 🚀 Installation

### Clone

``` bash
git clone https://github.com/anas-raza1/automated-web-deployment.git
cd automated-web-deployment
```

### Install

``` bash
npm install
```

### Run

``` bash
node app.js
```

Open: http://localhost:3000

## 🐳 Docker

``` bash
docker build -t automated-web-app:latest .
docker run -d --name automated-web-app -p 3000:3000 automated-web-app:latest
```

## ⚙️ Jenkins Pipeline

1.  Checkout Source Code
2.  Verify Environment
3.  Install Dependencies
4.  Build Docker Image
5.  Stop Previous Container
6.  Remove Previous Container
7.  Deploy New Container
8.  Health Check

## 🔄 CI/CD Workflow Final CI/CD Workflow

``` text
Code Change
    │
git push
    │
    ▼
GitHub
    │
Webhook
    │
    ▼
Jenkins
    │
Build Pipeline
    │
Docker Deployment
    │
Health Check
    │
Application Live
```
Final CI/CD Workflow

Create Project
        │
        ▼
Initialize Git
        │
        ▼
Create Node.js Application
        │
        ▼
Install Express
        │
        ▼
Push Code to GitHub
        │
        ▼
Create Docker Image
        │
        ▼
Run Docker Container
        │
        ▼
Install Jenkins
        │
        ▼
Create Jenkins Pipeline
        │
        ▼
Configure GitHub Webhook
        │
        ▼
git push
        │
        ▼
GitHub Webhook
        │
        ▼
Jenkins
        │
        ▼
Checkout Source Code
        │
        ▼
npm install
        │
        ▼
Docker Build
        │
        ▼
Stop Old Container
        │
        ▼
Deploy New Container
        │
        ▼
Health Check
        │
        ▼
Application Running Successfully

## 📈 Future Enhancements

-   Docker Hub
-   Slack/Email Notifications
-   SonarQube
-   Kubernetes

## 👨‍💻 Author

  Anas Raza





# ============================================
# STEP 1: Create Project Directory
# ============================================

mkdir automated-web-deployment
cd automated-web-deployment


# ============================================
# STEP 2: Initialize Git Repository
# ============================================

git init


# ============================================
# STEP 3: Create Node.js Project
# ============================================

npm init -y


# ============================================
# STEP 4: Install Express Framework
# ============================================

npm install express


# ============================================
# STEP 5: Run the Application
# ============================================

node app.js


# ============================================
# STEP 6: Verify Node & npm Installation
# ============================================

node --version
npm --version


# ============================================
# STEP 7: Create .gitignore
# ============================================

touch .gitignore

# Add:
node_modules
.env
.DS_Store


# ============================================
# STEP 8: Initialize GitHub Repository
# ============================================

git status
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/anas-raza1/automated-web-deployment.git
git push -u origin main


# ============================================
# STEP 9: Build Docker Image
# ============================================

docker build -t automated-web-app:latest .


# ============================================
# STEP 10: Check Docker Images
# ============================================

docker images


# ============================================
# STEP 11: Run Docker Container
# ============================================

docker run -d --name automated-web-app -p 3000:3000 automated-web-app:latest


# ============================================
# STEP 12: Verify Running Container
# ============================================

docker ps
docker ps -a


# ============================================
# STEP 13: View Docker Logs
# ============================================

docker logs automated-web-app


# ============================================
# STEP 14: Stop & Remove Container
# ============================================

docker stop automated-web-app
docker rm automated-web-app


# ============================================
# STEP 15: Rebuild Docker Image
# ============================================

docker build -t automated-web-app:latest .


# ============================================
# STEP 16: Run New Container
# ============================================

docker run -d --name automated-web-app -p 3000:3000 automated-web-app:latest


# ============================================
# STEP 17: Install Jenkins (Homebrew)
# ============================================

brew install jenkins-lts


# ============================================
# STEP 18: Start Jenkins
# ============================================

brew services start jenkins-lts


# ============================================
# STEP 19: Restart Jenkins (If Required)
# ============================================

brew services restart jenkins-lts


# ============================================
# STEP 20: Verify Jenkins Service
# ============================================

brew services list


# ============================================
# STEP 21: Open Jenkins
# ============================================

http://localhost:8080


# ============================================
# STEP 22: Verify Environment
# ============================================

which node
which npm
brew --prefix
brew --version
git --version
java -version
docker --version


# ============================================
# STEP 23: Create Jenkins Pipeline
# ============================================

# Create Jenkinsfile
# Commit changes

git add .
git commit -m "Added Jenkins pipeline"
git push


# ============================================
# STEP 24: Update Jenkins Pipeline
# ============================================

git add .
git commit -m "Complete CI/CD pipeline"
git push


# ============================================
# STEP 25: Create .dockerignore
# ============================================

touch .dockerignore

# Add:
node_modules
.git
.gitignore
README.md
Jenkinsfile


# ============================================
# STEP 26: Install ngrok
# ============================================

brew install ngrok


# ============================================
# STEP 27: Verify ngrok
# ============================================

ngrok version


# ============================================
# STEP 28: Start ngrok Tunnel
# ============================================

ngrok http 8080


# ============================================
# STEP 29: Configure GitHub Webhook
# ============================================

# Payload URL

https://YOUR-NGROK-URL/github-webhook/


# ============================================
# STEP 30: Test Webhook
# ============================================

curl -i https://YOUR-NGROK-URL/github-webhook/


# ============================================
# STEP 31: Push New Changes
# ============================================

git add .
git commit -m "Webhook test"
git push


# ============================================
# STEP 32: Jenkins Automatically Executes
# ============================================

npm install

docker build -t automated-web-app:latest .

docker stop automated-web-app || true

docker rm automated-web-app || true

docker run -d \
  --name automated-web-app \
  -p 3000:3000 \
  automated-web-app:latest

docker ps


# ============================================
# STEP 33: Verify Application
# ============================================

http://localhost:3000


# ============================================
# PROJECT COMPLETED
# ============================================