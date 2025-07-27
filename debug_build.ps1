# GitHub Actions 빌드 오류 자동 분석 스크립트
param(
    [string]$RunId = ""
)

Write-Host "🔍 GitHub Actions 빌드 오류 분석기" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

try {
    # 최근 실행 목록 가져오기
    Write-Host "📋 최근 GitHub Actions 실행 목록 조회 중..." -ForegroundColor Yellow
    $runs = gh run list --limit 10 --json status,conclusion,databaseId,headSha,url | ConvertFrom-Json
    
    if (-not $RunId) {
        # 실패한 빌드 찾기
        $failedRun = $runs | Where-Object { $_.conclusion -eq "failure" } | Select-Object -First 1
        
        if (-not $failedRun) {
            Write-Host "✅ 최근에 실패한 빌드가 없습니다!" -ForegroundColor Green
            exit 0
        }
        
        $RunId = $failedRun.databaseId
    }
    
    Write-Host "🚨 분석할 빌드 ID: $RunId" -ForegroundColor Red
    Write-Host ""
    
    # 로그 다운로드
    Write-Host "📥 빌드 로그 다운로드 중..." -ForegroundColor Yellow
    $logContent = gh run view $RunId --log
    $logContent | Out-File -FilePath "build_error_log.txt" -Encoding UTF8
    
    Write-Host "🔍 오류 패턴 분석 중..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "==================== 발견된 오류들 ====================" -ForegroundColor White
    
    $errorFound = $false
    
    # Liquid 오류 검색
    $liquidErrors = @()
    $liquidErrors += $logContent | Select-String -Pattern "Liquid Exception" -CaseSensitive:$false
    $liquidErrors += $logContent | Select-String -Pattern "Could not locate" -CaseSensitive:$false
    if ($liquidErrors) {
        Write-Host "🔴 [Liquid 오류 발견]" -ForegroundColor Red
        $liquidErrors | ForEach-Object { Write-Host "   $($_.Line)" -ForegroundColor Gray }
        Write-Host ""
        $errorFound = $true
    }
    
    # 레이아웃 오류 검색
    $layoutWarnings = @()
    $layoutWarnings += $logContent | Select-String -Pattern "Layout.*does not exist" -CaseSensitive:$false
    $layoutWarnings += $logContent | Select-String -Pattern "Build Warning.*Layout" -CaseSensitive:$false
    if ($layoutWarnings) {
        Write-Host "🟡 [레이아웃 경고 발견]" -ForegroundColor Yellow
        Write-Host "   총 $($layoutWarnings.Count)개의 레이아웃 경고" -ForegroundColor Gray
        if ($layoutWarnings.Count -gt 0) {
            Write-Host "   첫 번째 경고:" -ForegroundColor Gray
            Write-Host "   $($layoutWarnings[0].Line)" -ForegroundColor Gray
        }
        Write-Host ""
        $errorFound = $true
    }
    
    # 파일 경로 오류 검색
    $fileErrors = @()
    $fileErrors += $logContent | Select-String -Pattern "No such file" -CaseSensitive:$false
    $fileErrors += $logContent | Select-String -Pattern "cannot load such file" -CaseSensitive:$false
    $fileErrors += $logContent | Select-String -Pattern "not found" -CaseSensitive:$false
    if ($fileErrors) {
        Write-Host "🔴 [파일 경로 오류 발견]" -ForegroundColor Red
        $fileErrors | ForEach-Object { Write-Host "   $($_.Line)" -ForegroundColor Gray }
        Write-Host ""
        $errorFound = $true
    }
    
    # YAML 오류 검색
    $yamlErrors = @()
    $yamlErrors += $logContent | Select-String -Pattern "YAML" -CaseSensitive:$false
    $yamlErrors += $logContent | Select-String -Pattern "mapping values are not allowed" -CaseSensitive:$false
    $yamlErrors += $logContent | Select-String -Pattern "found character" -CaseSensitive:$false
    if ($yamlErrors) {
        Write-Host "🔴 [YAML 문법 오류 발견]" -ForegroundColor Red
        $yamlErrors | ForEach-Object { Write-Host "   $($_.Line)" -ForegroundColor Gray }
        Write-Host ""
        $errorFound = $true
    }
    
    # 테마 관련 오류 검색
    $themeErrors = @()
    $themeErrors += $logContent | Select-String -Pattern "theme" -CaseSensitive:$false
    $themeErrors += $logContent | Select-String -Pattern "remote_theme" -CaseSensitive:$false
    if ($themeErrors) {
        Write-Host "🔴 [테마 관련 오류 발견]" -ForegroundColor Red
        $themeErrors | ForEach-Object { Write-Host "   $($_.Line)" -ForegroundColor Gray }
        Write-Host ""
        $errorFound = $true
    }
    
    if (-not $errorFound) {
        Write-Host "🤔 명확한 오류 패턴을 찾지 못했습니다. 전체 로그를 확인해주세요." -ForegroundColor Magenta
    }
    
    Write-Host "======================================================" -ForegroundColor White
    Write-Host ""
    
    # 해결 제안
    Write-Host "💡 자동 해결 제안:" -ForegroundColor Cyan
    Write-Host ""
    
    # test 폴더 체크
    if (Test-Path "test") {
        Write-Host "⚠️  'test' 폴더가 발견되었습니다!" -ForegroundColor Yellow
        Write-Host "   ➜ 해결 명령어: Remove-Item -Recurse -Force test" -ForegroundColor White
        Write-Host "   ➜ CMD 명령어: rd /s /q test" -ForegroundColor White
        Write-Host ""
    }
    
    # docs 폴더 설정 파일 체크
    if (Test-Path "docs\_config.yml") {
        Write-Host "⚠️  'docs\_config.yml' 파일이 발견되었습니다!" -ForegroundColor Yellow
        Write-Host "   ➜ 해결 명령어: Remove-Item 'docs\_config.yml'" -ForegroundColor White
        Write-Host ""
    }
    
    # 중복 layout 파일 체크
    if ((Test-Path "_layouts") -and (Test-Path "docs\_layouts")) {
        Write-Host "⚠️  레이아웃 폴더가 중복되었습니다!" -ForegroundColor Yellow
        Write-Host "   ➜ 해결 명령어: Remove-Item -Recurse -Force 'docs\_layouts'" -ForegroundColor White
        Write-Host ""
    }
    
    Write-Host "📄 전체 로그는 'build_error_log.txt' 파일에서 확인하세요." -ForegroundColor Green
    Write-Host "✨ 분석 완료!" -ForegroundColor Green
    
} catch {
    Write-Host "❌ 오류가 발생했습니다: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "GitHub CLI가 설치되어 있고 인증되어 있는지 확인해주세요." -ForegroundColor Yellow
}

# 사용법 출력
Write-Host ""
Write-Host "📚 사용법:" -ForegroundColor Cyan
Write-Host "   .\debug_build.ps1              # 최근 실패한 빌드 분석"
Write-Host "   .\debug_build.ps1 -RunId 12345 # 특정 빌드 ID 분석" 