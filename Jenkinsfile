pipeline {
    agent any

    triggers {
        githubPush() // This line triggers the pipeline on GitHub push events
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                script {
                    sh 'node server.js'
                    slackSend(channel: '#YourFirstName_IP1', message: "Build successful! Build ID: ${env.BUILD_ID}, View here: ${env.RENDER_URL}")
                }
            }
        }
    }
}