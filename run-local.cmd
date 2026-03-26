@echo off
echo ======================================
echo Starting Docusaurus Site Locally
echo ======================================
echo.

cd /d %~dp0

npm install
npm run start