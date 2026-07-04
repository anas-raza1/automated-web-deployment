pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code downloaded from GitHub.'
            }
        }

        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application Test') {
            steps {
                sh 'node app.js &'
                sh 'sleep 5'
                sh 'pkill -f "node app.js" || true'
            }
        }
    }
}