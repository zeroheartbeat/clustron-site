@echo off
echo ======================================
echo Deploying Docusaurus to GitHub Pages
echo ======================================
echo.

cd /d %~dp0

set GIT_USER=zeroheartbeat

npm install
npx docusaurus deploy