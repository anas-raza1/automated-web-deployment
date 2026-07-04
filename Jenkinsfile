pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:${env.PATH}"
    }

    stages {

        stage('Check Environment') {
            steps {
                sh 'echo "PATH=$PATH"'
                sh 'which node'
                sh 'which npm'
                sh 'node --version'
                sh 'npm --version'
            }
        }
    }
}