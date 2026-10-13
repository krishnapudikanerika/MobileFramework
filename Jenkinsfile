pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {

                checkout scm

            }

        }

        stage('Install Dependencies') {

            steps {

                bat 'npm install'

            }

        }

        stage('Verify Android Device') {

            steps {

                bat 'adb devices'

            }

        }

        stage('Execute Mobile Smoke Test') {

            steps {

                bat 'npm run mobile-smoke'

            }

        }

    }

    post {

        always {

            echo 'Mobile Automation Execution Completed'

        }

        success {

            echo 'Mobile Smoke Test Passed'

        }

        failure {

            echo 'Mobile Smoke Test Failed'

        }

    }

}