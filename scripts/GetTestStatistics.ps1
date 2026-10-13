$reportPath = ".\reports\results.xml"

if (!(Test-Path $reportPath))
{
    Write-Host "Report file not found."

    Set-Content total.txt "0"
    Set-Content passed.txt "0"
    Set-Content failed.txt "0"
    Set-Content percentage.txt "0"

    exit 0
}

[xml]$xml = Get-Content $reportPath

$total = 0
$failed = 0

foreach($suite in $xml.testsuites.testsuite)
{
    $total += [int]$suite.tests
    $failed += [int]$suite.failures
}

$passed = $total - $failed

if($total -gt 0)
{
    $percentage =
        :Round(
            ($passed * 100.0) / $total,
            2
        )
}
else
{
    $percentage = 0
}

Set-Content total.txt $total
Set-Content passed.txt $passed
Set-Content failed.txt $failed
Set-Content percentage.txt $percentage

Write-Host "================"
Write-Host "Total    : $total"
Write-Host "Passed   : $passed"
Write-Host "Failed   : $failed"
Write-Host "Percent  : $percentage"
Write-Host "================"