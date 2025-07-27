# 🔧 Jekyll Blog 빌드 오류 분석 도구

GitHub Actions에서 Jekyll 빌드가 실패했을 때 빠르게 오류를 찾고 해결하기 위한 자동화 스크립트들입니다.

## 📁 파일 목록

- `debug_build.bat` - Windows 배치 스크립트 (CMD용)
- `debug_build.ps1` - PowerShell 스크립트 (권장)
- `build_error_log.txt` - 분석 결과 로그 파일 (자동 생성)

## 🚀 사용법

### PowerShell 스크립트 (권장)

```powershell
# 최근 실패한 빌드 자동 분석
.\debug_build.ps1

# 특정 빌드 ID 분석  
.\debug_build.ps1 -RunId 16552029360
```

### 배치 스크립트 (CMD)

```cmd
# 더블 클릭으로 실행하거나
debug_build.bat
```

## 🔍 분석하는 오류 패턴

| 오류 유형 | 검색 패턴 | 설명 |
|-----------|-----------|------|
| **🔴 Liquid 오류** | `Liquid Exception`, `Could not locate` | 누락된 include 파일, 잘못된 Liquid 문법 |
| **🟡 레이아웃 경고** | `Layout.*does not exist` | 존재하지 않는 레이아웃 참조 |
| **🔴 파일 경로 오류** | `No such file`, `cannot load` | 누락된 파일이나 잘못된 경로 |
| **🔴 YAML 오류** | `YAML`, `mapping values` | _config.yml이나 front matter 문법 오류 |
| **🔴 테마 오류** | `theme`, `remote_theme` | 테마 설정 충돌 |

## 💡 자동 해결 제안

스크립트가 다음과 같은 문제들을 자동으로 감지하고 해결 명령어를 제시합니다:

### 1. test 폴더 문제
```bash
# 문제: test/_posts/ 폴더로 인한 갤러리 include 오류
# 해결:
rd /s /q test
```

### 2. docs 설정 파일 충돌
```bash  
# 문제: docs/_config.yml과 루트 _config.yml 충돌
# 해결:
del "docs\_config.yml"
```

### 3. 중복 레이아웃 폴더
```bash
# 문제: _layouts와 docs/_layouts 중복
# 해결: 
rd /s /q "docs\_layouts"
```

## 📋 실행 예시

```
🔍 GitHub Actions 빌드 오류 분석기
====================================

📋 최근 GitHub Actions 실행 목록 조회 중...
🚨 분석할 빌드 ID: 16552029360

📥 빌드 로그 다운로드 중...
🔍 오류 패턴 분석 중...

==================== 발견된 오류들 ====================
🔴 [Liquid 오류 발견]
   Liquid Exception: Could not locate the included file 'gallery' in any of ["/github/workspace/_includes"]. Ensure it exists in one of those directories and is not a symlink as those are not allowed in safe mode. in /github/workspace/test/_posts/2010-09-09-post-gallery.md

🟡 [레이아웃 경고 발견]
   총 67개의 레이아웃 경고
   첫 번째 경고:
   Build Warning: Layout 'single' requested in test/_posts/2009-05-15-edge-case-nested-and-mixed-lists.md does not exist.

======================================================

💡 자동 해결 제안:

⚠️  'test' 폴더가 발견되었습니다!
   ➜ 해결 명령어: Remove-Item -Recurse -Force test
   ➜ CMD 명령어: rd /s /q test

📄 전체 로그는 'build_error_log.txt' 파일에서 확인하세요.
✨ 분석 완료!
```

## 🛠️ 사전 요구사항

- [GitHub CLI](https://cli.github.com/) 설치 및 인증
- PowerShell 5.1+ (Windows 기본 포함)
- Jekyll 블로그 프로젝트 루트 디렉토리에서 실행

## 📝 추가 기능

- 로그 파일 자동 저장 (`build_error_log.txt`)
- 한국어 유니코드 지원 (UTF-8)
- 컬러 출력으로 가독성 향상
- 임시 파일 자동 정리

## 🚨 문제 해결

### GitHub CLI 인증 오류
```bash
gh auth login
```

### PowerShell 실행 정책 오류
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

이제 빌드 오류가 발생할 때마다 스크립트 하나만 실행하면 됩니다! 🎉 