# 폴더 구조 안내

```text
personal-shortcut-cheatsheet/
├─ .claude/                      # 로컬 도구 설정 (Git 제외)
├─ css/                          # style.css 공통 스타일, symbols.css 특수문자 스타일
├─ html/                         # 치트시트 HTML 16개
├─ js/                           # 데이터·화면 렌더링·검색·즐겨찾기 등
├─ md/                           # 참고 원본·번역·라이선스
├─ scripts/
│  ├─ build-static-site.mjs       # 배포할 파일을 public/에 복사
│  ├─ generate_excel.py          # 엑셀 참고 파일 생성
│  └─ legacy/
│     ├─ generate_md.js          # 과거 JS 데이터 → Markdown 생성
│     ├─ inject_links.js         # 과거 소스 링크 삽입
│     ├─ reorg.js                # 최초 HTML 분리 작업
│     └─ update_navs.js          # 과거 AutoCAD 메뉴 추가
├─ exports/
│  └─ Excel_Shortcuts_Reference.xlsx
├─ docs/
│  └─ folder-structure.md        # 이 안내
├─ index.html                    # html/index.html로 이동하는 진입점
├─ robots.txt                    # 검색 엔진 안내
├─ vercel.json                   # 정적 빌드·배포 설정
├─ .gitignore                    # 로컬 설정·생성물 제외 규칙
├─ README.md                     # 소개·실행 방법
├─ TODO.md                       # 요구사항·할 일
├─ WORKLOG.md                    # 작업·검증 기록
└─ CHANGELOG.md                  # 변경 이력
```

## 새 파일을 둘 위치

- 화면은 `html/`, 스타일은 `css/`, 화면 데이터와 동작은 `js/`에 둡니다. 기존 웹 주소를 유지합니다.
- 단축키 원본과 출처·라이선스는 `md/`, 개발·운영 설명은 `docs/`에 둡니다. Codex 화면은 `md/codex-cheat-sheet-ko.md`를 실행 중 읽으므로 이동하지 않습니다.
- 보조 도구는 `scripts/`, 전달할 엑셀·CSV는 `exports/`에 둡니다. 현재 엑셀 참고 파일은 Git으로 관리합니다.
- 루트에는 진입점, 실행·배포 설정, 프로젝트 요약과 작업 기록을 둡니다.

## 실행과 생성물

- 저장소 루트에서 `node scripts/build-static-site.mjs`를 실행하면 `public/`을 재생성합니다. HTML·CSS·JS·robots.txt와 Codex 한국어 원본만 배포에 포함되며, `public/`은 Git 추적에서 제외합니다.
- `python scripts/generate_excel.py`는 실행 위치에 관계없이 `exports/Excel_Shortcuts_Reference.xlsx`에 저장합니다. pandas·openpyxl이 필요하며 기존 파일을 덮어씁니다. 기존 CSV 대체 저장 동작도 같은 폴더를 사용합니다.
- `scripts/legacy/`는 과거 작업 보관용입니다. 현재 문서·HTML을 덮어쓸 수 있으므로 일반 실행·빌드에 사용하지 않습니다. 특히 `reorg.js`는 초기 폴더 배치를 가정합니다.
- `.claude/`, `.vercel/`, Python `__pycache__/`·`*.pyc`, Office 잠금 파일 `~$*`는 Git 제외 대상입니다. `.vercel/`과 Python 캐시는 도구 실행 시 생성될 수 있습니다.
- 테스트 로그·스크린샷은 OS 임시 폴더에 둡니다. `.git/`은 Git 내부 관리 영역으로 정리 대상이 아닙니다.
