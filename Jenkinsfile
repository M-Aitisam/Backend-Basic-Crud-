pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'master', url: 'https://github.com/M-Aitisam/Backend-Basic-Crud-.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 5000:5000 --name my-app-container my-app'
            }
        }
    }
    post {
        success {
            echo "Application deployed! Access it at http://<JENKINS_SERVER_IP>:5000"
        }
    }
}
