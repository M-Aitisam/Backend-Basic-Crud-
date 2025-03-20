pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'master', url: 'https://github.com/M-Aitisam/Backend-Basic-Crud-.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
