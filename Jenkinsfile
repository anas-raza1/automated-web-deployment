pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:${env.PATH}"
        IMAGE_NAME = "automated-web-app"
        CONTAINER_NAME = "automated-web-app"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Source code downloaded from GitHub."
            }
        }

        stage('Verify Environment') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'docker --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop ${CONTAINER_NAME} || true'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm ${CONTAINER_NAME} || true'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker run -d \
                  --name ${CONTAINER_NAME} \
                  -p 3000:3000 \
                  ${IMAGE_NAME}:latest
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo "Application deployed successfully!"
        }

        failure {
            echo "Deployment failed!"
        }
    }
}