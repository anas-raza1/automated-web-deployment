# 🚀 Automated Web Application Deployment using GitHub, Jenkins & Docker

> A complete CI/CD pipeline that automatically builds and deploys a
> Node.js web application using **GitHub**, **Jenkins**, and **Docker**
> on **macOS (Apple Silicon M1)**.

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

## 🔄 CI/CD Workflow

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

## 📈 Future Enhancements

-   Docker Hub
-   Slack/Email Notifications
-   SonarQube
-   Kubernetes

## 👨‍💻 Author

  Anas Raza
