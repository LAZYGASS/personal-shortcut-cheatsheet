# Shortcut Cheat Sheet Project

여러 프로그램의 핵심 단축키를 프리미엄 디자인(Storyfox 스타일)으로 모아 둔 웹 기반 치트시트입니다. 외부 라이브러리 없이 순수 HTML/CSS/JS로 만들었고, GitHub Pages 안내와 Vercel 로그인 보호 Preview 배포 설정을 제공합니다.

## 🚀 Live Demo
👉 **[https://lazygass.github.io/personal-shortcut-cheatsheet/](https://lazygass.github.io/personal-shortcut-cheatsheet/)**

## 📑 페이지 (Cheat Sheets)

| 페이지 | 내용 |
|--------|------|
| Excel (Win) | Windows 엑셀 핵심 단축키 |
| Google Sheets | 구글 스프레드시트 단축키 |
| Markdown | 마크다운 문법 (Obsidian 콜아웃 포함) |
| Google Search | 구글 검색 연산자 |
| Windows OS | 윈도우 OS 단축키 |
| AutoCAD | 오토캐드 명령어/단축키 |
| Codex | Codex CLI 한국어 치트시트 |
| PowerPoint | 프레젠테이션 편집 단축키 |
| XG5000 | PLC 프로그램 편집 단축키 |
| Claude Code | Claude Code CLI 단축키 (한국어) |
| Terminal | 터미널/셸 단축키 |
| GitHub | Git / GitHub 사용법 |

## ✨ 기능 (Features)

- 🔍 **실시간 검색:** 원하는 단축키를 타이핑하면 즉시 필터링. `/` 키로 검색창에 바로 포커스됩니다.
- ✅ **"내가 아는 단축키" 관리:** 각 줄의 토글로 아는 단축키를 표시하면 흐리게 처리되고, 헤더의 **🙈 아는 것 숨기기** 버튼으로 완전히 감출 수 있습니다. 브라우저에 페이지별로 저장됩니다(localStorage).
- 🖨️ **인쇄 최적화:** `인쇄하기` 버튼으로 군더더기 없이 A4에 깔끔하게 출력.
- 📱 **화면 너비 자동 대응:** 가로·세로 모니터와 모바일에서 카드가 1~4열로 자동 배치됩니다. 상단 메뉴는 줄바꿈하고 페이지와 함께 스크롤되어 본문을 가리지 않습니다.

## 🛠️ 기술 스택 (Tech Stack)

- **HTML5**: 구조화된 내용과 접근성 (`<kbd>` 태그 활용).
- **CSS3**: 글래스모피즘 시스템, Masonry 형태의 멀티 컬럼 레이아웃, 커스텀 변수 및 키보드 캡 테마.
- **Vanilla JavaScript**: 외부 라이브러리 없이 실시간 검색, DOM 렌더링, localStorage 상태 관리.

## ▶️ 실행 방법 (How to Run)

별도 서버 없이 `html/index.html`을 브라우저에서 바로 열면 됩니다. 상단 탭으로 다른 치트시트로 이동할 수 있습니다. (루트 `index.html`은 자동으로 `html/index.html`로 이동)

## 📂 구성 요소

```
personal-shortcut-cheatsheet/
├─ index.html          # 루트 → html/index.html로 리다이렉트
├─ html/               # 각 치트시트 페이지 (index, sheets, md, google, win, cad, claude, terminal, github)
├─ css/style.css       # 공통 스타일시트
├─ js/                 # 페이지별 데이터/렌더 스크립트 + known.js(공용: 아는 것 표시/숨기기)
├─ md/                 # 마크다운 원본 데이터
├─ CHANGELOG.md        # 변경 이력
└─ TODO.md             # 할 일 목록
```

---
**단축키를 까먹었을 때 당황하지 말고 치트시트를 켜세요! 🚀**

## Vercel 배포

`node scripts/build-static-site.mjs`로 `public/`에 정적 사이트를 생성합니다. Vercel은 해당 폴더를 배포합니다. 현재 운영 방식은 Vercel 로그인 보호 Preview이며, GitHub 자동 배포는 비활성화되어 있어 push만으로 Vercel 사이트가 갱신되지 않습니다.
