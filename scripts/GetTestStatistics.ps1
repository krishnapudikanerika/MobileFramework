$reportFile = ".\reports\mobile-report.json"

if (!(Test-Path $reportFile))
{
    Set-Content total.txt "0"
    Set-Content passed.txt "0"
    Set-Content failed.txt "0"
    Set-Content percentage.txt "0"

    Write-Host "Report file not found."

    exit 0
}

$json = Get-Content $reportFile -Raw | ConvertFrom-Json

$total = [int]$json.stats.tests
$passed = [int]$json.stats.passes
$failed = [int]$json.stats.failures

Write-Host "Total Tests: $total"
Write-Host "Passed Tests: $passed"
Write-Host "Failed Tests: $failed"

if ($total -gt 0)
{
    $percentage = [Math]::Round((($passed * 100.0) / $total),2)
}
else
{
    $percentage = 0
}

Set-Content total.txt $total
Set-Content passed.txt $passed
Set-Content failed.txt $failed
Set-Content percentage.txt $percentage

Write-Host "======================"
Write-Host "Total      : $total"
Write-Host "Passed     : $passed"
Write-Host "Failed     : $failed"
Write-Host "Percentage : $percentage"
Write-Host "======================"