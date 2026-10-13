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



       stage('Run Mobile Tests') {

           steps {

               script {

                   try {

                       bat 'npm run mobile-smoke'

                   }
                   catch(Exception ex) {

                       currentBuild.result = 'FAILURE'

                       echo 'Mobile test failed.'

                   }

               }

           }

       }

        stage('Generate Statistics') {

    steps {

        powershell '.\\scripts\\GetTestStatistics.ps1'

        bat 'type total.txt'

        bat 'type passed.txt'

        bat 'type failed.txt'

        bat 'type percentage.txt'

    }

}




    }

    post {

        always {

           script {

    env.TOTAL =
        fileExists('total.txt')
            ? readFile('total.txt').trim()
            : '0'

    env.PASSED =
        fileExists('passed.txt')
            ? readFile('passed.txt').trim()
            : '0'

    env.FAILED =
        fileExists('failed.txt')
            ? readFile('failed.txt').trim()
            : '0'

    env.PERCENTAGE =
        fileExists('percentage.txt')
            ? readFile('percentage.txt').trim()
            : '0'

}

            emailext(

                mimeType: 'text/html',

                subject:
                "[Mobile Framework] Build #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",

                to:
                "krishna.pudi@kanerika.com",

                body: """

                <html>

                <body style="font-family:Calibri,Arial,sans-serif;">

                <h2 style="color:#0078D4;">
                Mobile Automation Execution Report
                </h2>

                <table border="1"
                       cellpadding="8"
                       cellspacing="0"
                       style="border-collapse:collapse;">

                    <tr>
                        <td><b>Build Status</b></td>
                        <td>${currentBuild.currentResult}</td>
                    </tr>

                    <tr>
                        <td><b>Job Name</b></td>
                        <td>${env.JOB_NAME}</td>
                    </tr>

                    <tr>
                        <td><b>Build Number</b></td>
                        <td>${env.BUILD_NUMBER}</td>
                    </tr>

                </table>

                <br/>

                <h3>
                Execution Summary
                </h3>

                <table border="1"
                       cellpadding="8"
                       cellspacing="0"
                       style="border-collapse:collapse;">

                    <tr>
                        <td><b>Total Tests</b></td>
                        <td>${env.TOTAL}</td>
                    </tr>

                    <tr>
                        <td><b>Passed Tests</b></td>
                        <td style="color:green;">
                            ${env.PASSED}
                        </td>
                    </tr>

                    <tr>
                        <td><b>Failed Tests</b></td>
                        <td style="color:red;">
                            ${env.FAILED}
                        </td>
                    </tr>

                    <tr>
                        <td><b>Pass Percentage</b></td>
                        <td>
                            ${env.PERCENTAGE}%
                        </td>
                    </tr>

                </table>

                <br/>

                <h3>
                Useful Links
                </h3>

                <ul>

                    <li>
                    Build URL:
                    ${env.BUILD_URL}
                    </li>

                    <li>
                    Console Log:
                    ${env.BUILD_URL}console
                    </li>

                </ul>

                <br/>

                Regards,<br/>
                <b>Jenkins CI/CD Pipeline</b>

                </body>

                </html>

                """

            )

        }

    }

}