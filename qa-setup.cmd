@echo off
chcp 65001 >nul
cd /d "%~dp0"
call npm install --save-dev @playwright/test @axe-core/playwright @lhci/cli
if errorlevel 1 exit /b 1
call npx playwright install chromium
if errorlevel 1 exit /b 1
echo Setup completed. Run qa-run.cmd
