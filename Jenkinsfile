pipeline {
    agent { 
      label 'appspace-nuxt-ci'
    }

    stages {
        stage('Build') {
            steps {
              sh 'echo "Building project"'
            }
        }
        stage('Test') {
            steps {
              sh 'echo "Running unit tests"'
            }
        }
        stage('Deliver for development') {
            when {
                branch 'development' 
            }
            steps {
              sh 'echo "This is only run for the development branch"'
            }
        }
        stage('Deploy for production') {
            when {
                branch 'master'  
            }
            steps {
              slackSend (channel: '#vista-appspace', color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
              sh "cd ${HOME}/build && node index.js -s \"${WORKSPACE}\" -b \"${GIT_BRANCH}\""
            }
        }
    }
    post { 
        success {
           slackSend (channel: '#vista-appspace', color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        failure {
           slackSend (channel: '#vista-appspace', color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        always { 
            cleanWs()
        }
    }
}
