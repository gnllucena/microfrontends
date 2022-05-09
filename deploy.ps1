$DEPLOY_PATH = "D:/iis/microfrontends/"

Write-Host "BUILDING APP FIRST" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix app-first run build:webpack

Write-Host "DEPLOYING APP FIRST" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./app-first/dist/* "$($DEPLOY_PATH)$("app-first")"

Write-Host "`n"

Write-Host "BUILDING APP SECOND" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix app-second run build:webpack

Write-Host "DEPLOYING APP SECOND" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./app-second/dist/* "$($DEPLOY_PATH)$("app-second")"

Write-Host "`n"

Write-Host "BUILDING NAVIGATION BAR" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix navigation run build:webpack

Write-Host "DEPLOYING NAVIGATION BAR" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./navigation/dist/* "$($DEPLOY_PATH)$("navigation")"

Write-Host "`n"