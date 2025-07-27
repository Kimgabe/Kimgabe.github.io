@echo off
chcp 65001 >nul
echo =====================================
echo 🔍 GitHub Actions 빌드 오류 분석기
echo =====================================
echo.

:: 최근 실패한 빌드 찾기
echo 📋 최근 GitHub Actions 실행 목록 조회 중...
gh run list --limit 10 --json status,conclusion,databaseId,headSha,url > temp_runs.json

:: 실패한 빌드 찾기
echo 🔍 실패한 빌드 검색 중...
for /f "tokens=*" %%i in ('powershell -Command "(Get-Content temp_runs.json | ConvertFrom-Json) | Where-Object {$_.conclusion -eq 'failure'} | Select-Object -First 1 | Select-Object -ExpandProperty databaseId"') do set FAILED_RUN_ID=%%i

if "%FAILED_RUN_ID%"=="" (
    echo ✅ 최근에 실패한 빌드가 없습니다!
    del temp_runs.json
    pause
    exit /b 0
)

echo 🚨 실패한 빌드 발견: %FAILED_RUN_ID%
echo.

:: 로그 다운로드
echo 📥 빌드 로그 다운로드 중...
gh run view %FAILED_RUN_ID% --log > build_error_log.txt

:: 에러 패턴 검색
echo 🔍 오류 패턴 분석 중...
echo.
echo ==================== 발견된 오류들 ====================

:: Liquid 오류 검색
findstr /i "Liquid Exception\|Could not locate" build_error_log.txt > nul
if %errorlevel%==0 (
    echo 🔴 [Liquid 오류 발견]
    findstr /i "Liquid Exception\|Could not locate" build_error_log.txt
    echo.
)

:: 레이아웃 오류 검색  
findstr /i "Layout.*does not exist\|Build Warning.*Layout" build_error_log.txt > nul
if %errorlevel%==0 (
    echo 🟡 [레이아웃 경고 발견]
    findstr /i "Layout.*does not exist\|Build Warning.*Layout" build_error_log.txt | findstr /v /c:"Build Warning: Layout" > layout_warnings.txt
    for /f %%a in ('find /c /v "" ^< layout_warnings.txt') do set WARNING_COUNT=%%a
    echo    총 %WARNING_COUNT%개의 레이아웃 경고
    echo    첫 번째 경고:
    findstr /i "Layout.*does not exist\|Build Warning.*Layout" build_error_log.txt | head -1
    del layout_warnings.txt
    echo.
)

:: 파일 경로 오류 검색
findstr /i "No such file\|cannot load such file\|not found" build_error_log.txt > nul
if %errorlevel%==0 (
    echo 🔴 [파일 경로 오류 발견]
    findstr /i "No such file\|cannot load such file\|not found" build_error_log.txt
    echo.
)

:: YAML 오류 검색
findstr /i "YAML\|mapping values are not allowed\|found character" build_error_log.txt > nul
if %errorlevel%==0 (
    echo 🔴 [YAML 문법 오류 발견]
    findstr /i "YAML\|mapping values are not allowed\|found character" build_error_log.txt
    echo.
)

:: 테마 관련 오류 검색
findstr /i "theme\|remote_theme\|gem.*theme" build_error_log.txt > nul
if %errorlevel%==0 (
    echo 🔴 [테마 관련 오류 발견]
    findstr /i "theme\|remote_theme\|gem.*theme" build_error_log.txt
    echo.
)

echo =====================================================
echo.

:: 해결 제안
echo 💡 자동 해결 제안:
echo.

:: test 폴더 체크
if exist "test\" (
    echo ⚠️  'test' 폴더가 발견되었습니다!
    echo    ➜ 명령어: rd /s /q test
    echo.
)

:: docs 폴더 설정 파일 체크  
if exist "docs\_config.yml" (
    echo ⚠️  'docs\_config.yml' 파일이 발견되었습니다!
    echo    ➜ 명령어: del "docs\_config.yml"
    echo.
)

:: 중복 layout 파일 체크
if exist "_layouts\" if exist "docs\_layouts\" (
    echo ⚠️  레이아웃 폴더가 중복되었습니다!
    echo    ➜ 명령어: rd /s /q "docs\_layouts"
    echo.
)

echo 📄 전체 로그는 'build_error_log.txt' 파일에서 확인하세요.
echo 🗑️  임시 파일 정리 중...
del temp_runs.json

echo.
echo ✨ 분석 완료! 위의 제안사항을 확인하여 문제를 해결하세요.
pause 