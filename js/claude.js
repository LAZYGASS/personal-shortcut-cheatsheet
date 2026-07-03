// Claude Code Cheat Sheet — 한국어
// 데이터 출처: cc.storyfox.cz (Claude Code Cheat Sheet, by Martin Baláž / @phasE89)
// 기준 버전: Claude Code v2.1.198 (2026-07-01)

const shortcuts = [
    {
        category: "키보드 단축키 (Keyboard)",
        color: "#2563EB",
        icon: "⌨️",
        items: [
            { desc: "입력/생성 취소", keys: ["Ctrl", "C"] },
            { desc: "세션 종료", keys: ["Ctrl", "D"] },
            { desc: "입력창 지우기 + 화면 다시 그리기", keys: ["Ctrl", "L"] },
            { desc: "트랜스크립트 뷰어 토글 (자세한 도구 사용)", keys: ["Ctrl", "O"] },
            { desc: "입력 버퍼 전체 삭제", keys: ["Ctrl", "U"] },
            { desc: "삭제한 입력 버퍼 복원", keys: ["Ctrl", "Y"] },
            { desc: "히스토리 역방향 검색", keys: ["Ctrl", "R"] },
            { desc: "에디터에서 열기", keys: ["Ctrl", "G"] },
            { desc: "실행 중 작업 백그라운드로", keys: ["Ctrl", "B"] },
            { desc: "작업 목록 토글", keys: ["Ctrl", "T"] },
            { desc: "되감기 또는 요약", keys: ["Esc", "Esc"] },
            { desc: "권한 모드 순환 (default→acceptEdits→plan)", keys: ["Shift", "Tab"] },
            { desc: "줄바꿈", keys: ["\\", "Enter"] },
            { desc: "모델 전환 (Mac: Option을 Meta로)", keys: ["⌥", "P"] },
            { desc: "확장 사고(thinking) 토글", keys: ["⌥", "T"] },
            { desc: "빠른 모드(fast) 토글", keys: ["⌥", "O"] }
        ]
    },
    {
        category: "MCP 서버 (MCP)",
        color: "#0891B2",
        icon: "🔌",
        items: [
            { desc: "원격 HTTP 서버 (권장)", keys: ["--transport", "http"] },
            { desc: "로컬 프로세스 서버", keys: ["--transport", "stdio"] },
            { desc: "원격 SSE 서버", keys: ["--transport", "sse"] },
            { desc: "대화형 관리 UI", keys: ["/mcp"] },
            { desc: "서버 목록 보기", keys: ["claude mcp list"] },
            { desc: "스코프: 본인만 (~/.claude.json)", keys: ["Local"] },
            { desc: "스코프: 공유/VCS (.mcp.json)", keys: ["Project"] },
            { desc: "스코프: 전역 (~/.claude.json)", keys: ["User"] },
            { desc: "모든 세션에서 서버 연결 유지", keys: ["alwaysLoad: true"] }
        ]
    },
    {
        category: "슬래시 명령어 · 세션 (Session)",
        color: "#7C3AED",
        icon: "⚡",
        items: [
            { desc: "대화 내용 지우기", keys: ["/clear"] },
            { desc: "컨텍스트 압축", keys: ["/compact"] },
            { desc: "대화 분기 (/fork 별칭)", keys: ["/branch"] },
            { desc: "토큰 사용량·비용·캐시 내역", keys: ["/usage"] },
            { desc: "컨텍스트 사용 현황 시각화", keys: ["/context"] },
            { desc: "대화형 diff 뷰어", keys: ["/diff"] },
            { desc: "마지막(또는 N번째) 응답 복사", keys: ["/copy"] },
            { desc: "대화/코드 체크포인트 되감기", keys: ["/rewind"] },
            { desc: "대화 내보내기", keys: ["/export"] },
            { desc: "플랜 모드로 바로 진입", keys: ["/plan"] },
            { desc: "ID/이름으로 세션 재개", keys: ["/resume"] },
            { desc: "완료 목표 설정 후 달성까지 작업", keys: ["/goal"] }
        ]
    },
    {
        category: "슬래시 명령어 · 설정 (Config)",
        color: "#6D28D9",
        icon: "🎛️",
        items: [
            { desc: "설정 보기/변경 (settings.json에 저장)", keys: ["/config"] },
            { desc: "모델 전환", keys: ["/model"] },
            { desc: "빠른 모드 토글", keys: ["/fast"] },
            { desc: "테마 생성·전환 (Auto 포함)", keys: ["/theme"] },
            { desc: "권한 보기/수정", keys: ["/permissions"] },
            { desc: "노력 수준 설정 (low~max)", keys: ["/effort"] },
            { desc: "키보드 단축키 커스터마이즈", keys: ["/keybindings"] },
            { desc: "터미널 키 설정", keys: ["/terminal-setup"] }
        ]
    },
    {
        category: "슬래시 명령어 · 도구 (Tools)",
        color: "#9333EA",
        icon: "🧰",
        items: [
            { desc: "CLAUDE.md 생성", keys: ["/init"] },
            { desc: "CLAUDE.md 편집·자동 메모리 토글", keys: ["/memory"] },
            { desc: "MCP 서버 관리", keys: ["/mcp"] },
            { desc: "훅(hooks) 관리", keys: ["/hooks"] },
            { desc: "사용 가능한 스킬 목록", keys: ["/skills"] },
            { desc: "에이전트 설정 관리", keys: ["/agents"] },
            { desc: "PR 로컬 리뷰", keys: ["/review"] },
            { desc: "diff 취약점 스캔", keys: ["/security-review"] },
            { desc: "반복 작업 (/proactive 별칭)", keys: ["/loop"] },
            { desc: "IDE 연동 상태", keys: ["/ide"] },
            { desc: "작업 디렉터리 추가", keys: ["/add-dir"] },
            { desc: "설치 상태 진단", keys: ["/doctor"] },
            { desc: "도움말·명령어 보기", keys: ["/help"] }
        ]
    },
    {
        category: "메모리 & 파일 (Memory)",
        color: "#D97706",
        icon: "📁",
        items: [
            { desc: "프로젝트 메모리 (팀 공유)", keys: ["./CLAUDE.md"] },
            { desc: "로컬 개인 메모 (gitignore)", keys: ["./CLAUDE.local.md"] },
            { desc: "개인 메모리 (모든 프로젝트)", keys: ["~/.claude/CLAUDE.md"] },
            { desc: "조직 정책 (Linux/WSL)", keys: ["/etc/claude-code/CLAUDE.md"] },
            { desc: "프로젝트 규칙", keys: [".claude/rules/*.md"] },
            { desc: "사용자 규칙", keys: ["~/.claude/rules/*.md"] },
            { desc: "CLAUDE.md에서 파일 import", keys: ["@path/to/file"] },
            { desc: "자동 메모리 디렉터리 (MEMORY.md 시작 시 로드)", keys: ["~/.claude/projects/…/memory/"] }
        ]
    },
    {
        category: "워크플로우 & 팁 (Workflows)",
        color: "#DC2626",
        icon: "🧠",
        items: [
            { desc: "플랜 모드 순환 (일반→자동수락→플랜)", keys: ["Shift", "Tab"] },
            { desc: "플랜 모드로 시작", keys: ["--permission-mode", "plan"] },
            { desc: "사고(thinking) 켜기/끄기", keys: ["Alt", "T"] },
            { desc: "해당 턴 최대 노력", keys: ["\"ultrathink\""] },
            { desc: "기능별 격리 브랜치(worktree)", keys: ["--worktree", "name"] },
            { desc: "마지막 대화 이어서", keys: ["claude", "-c"] },
            { desc: "이름으로 세션 재개", keys: ["claude", "-r", "\"name\""] },
            { desc: "비대화형 실행 (SDK/헤드리스)", keys: ["claude", "-p", "\"query\""] },
            { desc: "파이프 입력", keys: ["cat file | claude -p"] },
            { desc: "반복 작업 예약", keys: ["/loop", "5m", "msg"] },
            { desc: "claude.ai 웹 세션", keys: ["--remote"] }
        ]
    },
    {
        category: "설정 & 환경변수 (Config & Env)",
        color: "#C2410C",
        icon: "⚙️",
        items: [
            { desc: "사용자 설정", keys: ["~/.claude/settings.json"] },
            { desc: "프로젝트 설정 (공유)", keys: [".claude/settings.json"] },
            { desc: "로컬 전용 설정", keys: [".claude/settings.local.json"] },
            { desc: "OAuth·MCP·상태", keys: ["~/.claude.json"] },
            { desc: "프로젝트 MCP 서버", keys: [".mcp.json"] },
            { desc: "API 키", keys: ["ANTHROPIC_API_KEY"] },
            { desc: "기본 모델", keys: ["ANTHROPIC_MODEL"] },
            { desc: "프록시/게이트웨이 재정의", keys: ["ANTHROPIC_BASE_URL"] },
            { desc: "사고 토큰 상한 (0=끔)", keys: ["MAX_THINKING_TOKENS"] },
            { desc: "API 타임아웃 (기본 600000ms)", keys: ["API_TIMEOUT_MS"] },
            { desc: "자동 메모리 끔", keys: ["CLAUDE_CODE_DISABLE_AUTO_MEMORY"] }
        ]
    },
    {
        category: "스킬 & 에이전트 (Skills & Agents)",
        color: "#059669",
        icon: "🔧",
        items: [
            { desc: "코드 리뷰 (--fix로 자동 수정)", keys: ["/code-review"] },
            { desc: "프로젝트 스킬 위치", keys: [".claude/skills/<name>/"] },
            { desc: "개인 스킬 위치", keys: ["~/.claude/skills/<name>/"] },
            { desc: "스킬 자동 호출 트리거", keys: ["description"] },
            { desc: "권한 프롬프트 생략", keys: ["allowed-tools"] },
            { desc: "스킬 모델 재정의", keys: ["model"] },
            { desc: "사용자 입력 자리표시자", keys: ["$ARGUMENTS"] },
            { desc: "동적 컨텍스트 주입", keys: ["!`cmd`"] },
            { desc: "빠른 읽기 전용 에이전트 (Haiku)", keys: ["Explore"] },
            { desc: "플랜용 리서치 에이전트", keys: ["Plan"] },
            { desc: "전체 도구·복잡 작업", keys: ["General"] },
            { desc: "git worktree에서 실행", keys: ["isolation: worktree"] }
        ]
    },
    {
        category: "CLI & 플래그 (CLI & Flags)",
        color: "#4B5563",
        icon: "🖥️",
        items: [
            { desc: "대화형 실행", keys: ["claude"] },
            { desc: "프롬프트와 함께 실행", keys: ["claude", "\"q\""] },
            { desc: "헤드리스 (SDK)", keys: ["claude", "-p", "\"q\""] },
            { desc: "마지막 대화 이어서", keys: ["claude", "-c"] },
            { desc: "ID/이름으로 재개", keys: ["claude", "-r", "\"n\""] },
            { desc: "업데이트", keys: ["claude update"] },
            { desc: "로그인 (--sso, --console)", keys: ["claude auth login"] },
            { desc: "모델 지정", keys: ["--model"] },
            { desc: "작업 디렉터리 추가", keys: ["--add-dir"] },
            { desc: "출력 형식 (text/json/stream-json)", keys: ["--output-format"] },
            { desc: "비용 상한", keys: ["--max-budget-usd"] },
            { desc: "권한 모드", keys: ["--permission-mode"] },
            { desc: "모든 확인 생략 ⚠️", keys: ["--dangerously-skip-permissions"] },
            { desc: "디버그 로깅", keys: ["--debug"] },
            { desc: "커스터마이즈 전부 끔 (문제 해결)", keys: ["--safe-mode"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    shortcuts.forEach(cat => {
        const filteredItems = cat.items.filter(item =>
            item.desc.toLowerCase().includes(filter.toLowerCase()) ||
            cat.category.toLowerCase().includes(filter.toLowerCase()) ||
            item.keys.join(' ').toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredItems.length > 0) {
            const card = document.createElement('section');
            card.className = "card";
            card.style.setProperty('--accent-color', cat.color);

            let itemsHtml = filteredItems.map(item => `
                <li class="shortcut-item">
                    <span class="desc">${item.desc}</span>
                    <div class="keys">
                        ${item.keys.map(key => `<kbd>${key}</kbd>`).join('')}
                    </div>
                </li>
            `).join('');

            card.innerHTML = `
                <div class="card-header">
                    <span class="icon">${cat.icon}</span>
                    <h2>${cat.category}</h2>
                </div>
                <ul class="shortcut-list">
                    ${itemsHtml}
                </ul>
            `;
            grid.appendChild(card);
        }
    });
}

// Initial Render
renderShortcuts();

// Search Logic
document.getElementById('searchInput').addEventListener('input', (e) => {
    renderShortcuts(e.target.value);
});

// Keyboard Focus for Search
window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
