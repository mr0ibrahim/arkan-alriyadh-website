@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist qa-reports mkdir qa-reports
call npm run build
if errorlevel 1 goto failed
if exist scripts\check-build.mjs (
  call node scripts\check-build.mjs
  if errorlevel 1 goto failed
)
set QA_FAILED=0
call npx playwright test --config=playwright.config.mjs
if errorlevel 1 (
  echo WARNING: Playwright detected test failures. Read qa-reports\playwright\index.html
  set QA_FAILED=1
)
call npx lhci collect --config=lighthouserc.json
if errorlevel 1 goto lighthousefail
call npx lhci assert --config=lighthouserc.json
if errorlevel 1 set QA_FAILED=1
call npx lhci upload --config=lighthouserc.json
if errorlevel 1 goto lighthousefail
echo.
echo ==============================================
echo QA finished. Review reports:
echo qa-reports\playwright\index.html
echo qa-reports\lighthouse\
echo ==============================================
if "%QA_FAILED%"=="1" (
  echo Some checks failed. See reports.
  exit /b 1
)
exit /b 0
:lighthousefail
echo Lighthouse encountered an error. Check Chrome installation and CLI output.
exit /b 1
:failed
echo Build or build validation failed. Fix it before QA.
exit /b 1
