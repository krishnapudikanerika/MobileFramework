$reportFile =
".\reports\mobile-report.json"

if (!(Test-Path $reportFile))
{
    Set-Content total.txt "0"
    Set-Content passed.txt "0"
    Set-Content failed.txt "0"
    Set-Content percentage.txt "0"

    exit 0
}

$json =
Get-Content $reportFile -Raw |
ConvertFrom-Json

$total =
$json.stats.tests

$passed =
$json.stats.passes

$failed =
$json.stats.failures

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
