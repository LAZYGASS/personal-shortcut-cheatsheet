# 작업 기록

## 2026-09-05 — GitHub 폴더 푸시 화면 정리

- GitHub 치트시트 상단에 `상태 확인 → 폴더 스테이징 → 커밋 → 푸시` 순서의 폴더 변경사항 업로드 안내를 추가했다.
- 작은 화면에서는 단계 카드가 한 줄씩 표시되도록 반응형 레이아웃을 적용했고, 원격 명령 목록에도 `git add <folder>/`를 추가했다.
- 검증: `node --check js/github.js`, 정적 빌드 산출물의 화면·명령 포함 여부, `git diff --check` 통과.

## 2026-09-05 — Vercel 비공개 정적 배포 준비

- `scripts/build-static-site.mjs`가 화면에 필요한 HTML·CSS·JS·robots.txt만 `public/`에 생성하도록 구성해, 원본 마크다운·엑셀·생성 도구가 배포 산출물에 포함되지 않게 했다.
- `vercel.json`에 빌드 명령과 `public` 출력 디렉터리를 지정하고, 배포 소스·로그 공개 설정 및 Git 자동 배포를 `false`로 명시했다.
- 생성 폴더와 Vercel 연결 정보가 저장소에 추적되지 않도록 `.gitignore`에 `public/`, `.vercel/`을 추가했다.
- 검증: 정적 빌드 실행, 전체 화면 스크립트 문법 검사, `vercel.json` JSON 구문 검사, `git diff --check` 통과.
- Vercel Preview 배포를 완료하고, 프로젝트의 Vercel Authentication 보호 범위를 `preview`로 설정했다. 공개 Production 배포는 삭제해 READY 상태의 인증 보호 Preview만 남겼다.
- Vercel 프로젝트의 GitHub 연결도 해제해, 이후 저장소 푸시가 자동으로 공개 Production 배포를 만들지 못하게 했다.
- Codex 화면이 실행 시 불러오는 `md/codex-cheat-sheet-ko.md`를 배포 허용 목록에 추가해, 정적 Preview에서도 치트시트를 렌더링하도록 보완했다.
- Codex 문서가 공통 카드 화면의 다단 레이아웃을 상속해 흐트러지던 문제를 단일 컬럼 규칙으로 수정했다.
- 넓은 화면에서는 Codex 본문을 최대 1,680px까지 사용하도록 확장해 긴 표와 코드 예제가 답답하게 줄어들지 않게 했다.
- 검증: 정적 빌드 후 원본과 산출물 마크다운 해시 일치, 전체 화면 스크립트 문법 검사, `git diff --check` 통과.
- 수정본을 Vercel 인증 보호 Preview로 재배포하고 READY 상태를 확인했다.
- 제한사항: Hobby 플랜은 Production 도메인 전체 비공개를 지원하지 않으므로, 이 사이트는 로그인한 소유자만 접근 가능한 Preview URL로 사용한다.

## 2026-09-05 — XG5000 병렬연결 단축키 정정

- `Ctrl + 3`의 설명을 `A접점 병렬연결`로 정정하고, `Ctrl + 4` `B접점 병렬연결`과 `Insert` `INSERT 모드`를 `js/xg5000.js`에 추가했다.
- 화면 데이터와 참고 문서가 어긋나지 않도록 `md/xg5000_shortcuts.md`에도 동일하게 반영했다.
- 검증: `node --check js/xg5000.js` 및 `git diff --check` 통과.

## 2026-09-04 — XG5000 단축키 보완

- `js/xg5000.js`에 A/B 접점, P/N 변환 검출 접점, 출력·SET·RESET 코일, 라인, 줄·칸 편집, 설명문, 병렬 라인, 시뮬레이션, 타이머 펑션 단축키를 반영했다.
- 시뮬레이션 메뉴 조작은 동시 입력이 아닌 순차 입력임을 `Alt → T → S/E` 형식으로 표시했다.
- `md/xg5000_shortcuts.md`도 화면 데이터와 동일하게 갱신했다.
- 검증: `node --check js/xg5000.js` 및 `git diff --check` 통과.

## 남은 제한사항

- 단축키는 XG5000의 사용자 단축키 설정에 따라 달라질 수 있다.

## 2026-09-04 — Codex 치트시트 전체 추가

- BA-CalderonMorales/codex-cheat-sheet 저장소의 README 전체(1,036줄)를 `md/codex-cheat-sheet.md`에 가져왔다.
- MIT 라이선스 전문을 `md/codex-cheat-sheet-LICENSE.md`에 보관하고, 새 페이지와 원문에 저작권·출처를 표시했다.
- `html/codex.html`과 `js/codex.js`를 추가해 제목, 표, 코드 블록, 링크, 목록을 브라우저에서 읽을 수 있게 렌더링했다.
- 모든 기존 치트시트 페이지의 내비게이션에 Codex 탭을 추가했다.
- 검증: 원문 1,036줄, 가져온 문서 1,044줄(출처·라이선스 안내 8줄 포함), `node --check js/codex.js`, `git diff --check` 통과.

## 남은 제한사항

- 외부 원문은 갱신될 수 있으므로 최신 Codex 기능은 공식 OpenAI 문서에서 재확인해야 한다.

## 2026-09-04 — Codex 치트시트 한글화

- `md/codex-cheat-sheet-ko.md`에 설치·인증·입력·슬래시 명령·CLI 옵션·설정·MCP·샌드박스·자동화·리뷰·실무 워크플로를 한국어로 정리했다.
- 정확한 입력이 필요한 명령어, 옵션, 경로, 설정 키는 영어 원문을 유지했다.
- Codex 페이지가 한국어 문서를 표시하도록 `js/codex.js`를 변경했고, 전체 영어 원문과 MIT 라이선스는 별도 파일로 계속 보관한다.
- 검증: `node --check js/codex.js`, `git diff --check` 통과.

## 2026-09-04 — Codex 원문 전체 한글화

- 원문 1,036줄의 설명·제목·표 내용을 한국어화한 전체 번역본으로 `md/codex-cheat-sheet-ko.md`를 교체했다.
- 설치 명령, CLI 옵션, 코드 블록과 설정 예시는 실행 정확성을 위해 원문 표기를 유지했다.
- 원문에 포함된 접기 섹션을 보이도록 `js/codex.js`의 마크다운 렌더러를 보완했다.
- 검증: `node --check js/codex.js`, `git diff --check` 통과.
# 2026-09-12

- 단축키 문서·정적 빌드 스크립트·Vercel 설정 변경을 커밋하고 `master` 원격에 push했다.
- 검증: 로컬 커밋 생성 및 원격 push 성공.
