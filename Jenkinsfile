pipeline {

    agent any

    stages {

        stage('Install Dependencies') {

            steps {

                bat 'npm install'

            }

        }

        stage('Verify Device') {

            steps {

                bat 'adb devices'

            }

        }

        stage('Execute Mobile Tests') {

            steps {

                bat 'npm run mobile-smoke'

            }

        }

    }

}