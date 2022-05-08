$DEPLOY_PATH = "D:/iis/microfrontends/"

Write-Host "BUILDING APP FIRST" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix app-first run build:webpack

Write-Host "DEPLOYING APP FIRST" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./app-first/dist/semnome-app-first.js $DEPLOY_PATH

Write-Host "BUILDING APP SECOND" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix app-second run build:webpack

Write-Host "DEPLOYING APP SECOND" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./app-second/dist/semnome-app-second.js $DEPLOY_PATH

Write-Host "BUILDING NAVIGATION BAR" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix navigation run build:webpack

Write-Host "DEPLOYING NAVIGATION BAR" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./navigation/dist/semnome-navigation.js $DEPLOY_PATH

Write-Host "BUILDING STORYBOOK" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix storybook run build:webpack

Write-Host "DEPLOYING STORYBOOK" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./storybook/dist/semnome-storybook.js $DEPLOY_PATH

Write-Host "BUILDING STYLESHEET" -ForegroundColor Green -BackgroundColor White -nonewline;
npm --prefix stylesheet run build:webpack

Write-Host "DEPLOYING STYLESHEET" -ForegroundColor Green -BackgroundColor White -nonewline;
cp ./stylesheet/dist/semnome-stylesheet.js $DEPLOY_PATH
