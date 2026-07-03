// GitHub Cheat Sheet — 한국어 (Git + GitHub CLI)
// git 명령어와 gh CLI 자주 쓰는 명령 모음.

const shortcuts = [
    {
        category: "시작 & 설정 (Setup)",
        color: "#2563EB",
        icon: "🚀",
        items: [
            { desc: "새 저장소 초기화", keys: ["git", "init"] },
            { desc: "원격 저장소 복제", keys: ["git", "clone", "<url>"] },
            { desc: "사용자 이름 설정", keys: ["git config", "user.name"] },
            { desc: "이메일 설정", keys: ["git config", "user.email"] },
            { desc: "전역 설정 목록", keys: ["git config", "--list"] },
            { desc: "기본 브랜치명 설정", keys: ["init.defaultBranch"] }
        ]
    },
    {
        category: "스테이징 & 커밋 (Commit)",
        color: "#0891B2",
        icon: "✅",
        items: [
            { desc: "변경 상태 확인", keys: ["git", "status"] },
            { desc: "파일 스테이징", keys: ["git", "add", "<file>"] },
            { desc: "전체 스테이징", keys: ["git", "add", "."] },
            { desc: "커밋", keys: ["git", "commit", "-m"] },
            { desc: "스테이징 + 커밋 한번에", keys: ["git", "commit", "-am"] },
            { desc: "직전 커밋 수정", keys: ["git", "commit", "--amend"] },
            { desc: "변경 내용 비교", keys: ["git", "diff"] },
            { desc: "스테이징된 변경 비교", keys: ["git", "diff", "--staged"] }
        ]
    },
    {
        category: "브랜치 (Branch)",
        color: "#7C3AED",
        icon: "🌿",
        items: [
            { desc: "브랜치 목록", keys: ["git", "branch"] },
            { desc: "새 브랜치 생성 + 이동", keys: ["git", "switch", "-c"] },
            { desc: "브랜치 이동", keys: ["git", "switch", "<name>"] },
            { desc: "브랜치 병합", keys: ["git", "merge", "<name>"] },
            { desc: "리베이스", keys: ["git", "rebase", "<base>"] },
            { desc: "브랜치 삭제", keys: ["git", "branch", "-d"] },
            { desc: "브랜치 이름 변경", keys: ["git", "branch", "-m"] }
        ]
    },
    {
        category: "원격 (Remote)",
        color: "#D97706",
        icon: "🔗",
        items: [
            { desc: "원격 목록", keys: ["git", "remote", "-v"] },
            { desc: "원격 추가", keys: ["git", "remote", "add"] },
            { desc: "원격 변경 가져오기", keys: ["git", "fetch"] },
            { desc: "가져오기 + 병합", keys: ["git", "pull"] },
            { desc: "원격에 푸시", keys: ["git", "push"] },
            { desc: "새 브랜치 첫 푸시", keys: ["git", "push", "-u"] },
            { desc: "강제 푸시 (안전) ⚠️", keys: ["git", "push", "--force-with-lease"] }
        ]
    },
    {
        category: "히스토리 (History)",
        color: "#059669",
        icon: "📜",
        items: [
            { desc: "커밋 로그", keys: ["git", "log"] },
            { desc: "한 줄 요약 로그", keys: ["git", "log", "--oneline"] },
            { desc: "그래프 로그", keys: ["git", "log", "--graph"] },
            { desc: "커밋 상세 보기", keys: ["git", "show", "<hash>"] },
            { desc: "줄별 작성자 추적", keys: ["git", "blame", "<file>"] },
            { desc: "변경 임시 저장", keys: ["git", "stash"] },
            { desc: "임시 저장 복원", keys: ["git", "stash", "pop"] }
        ]
    },
    {
        category: "되돌리기 (Undo)",
        color: "#DC2626",
        icon: "↩️",
        items: [
            { desc: "작업 디렉터리 변경 취소", keys: ["git", "restore", "<file>"] },
            { desc: "스테이징 취소", keys: ["git", "restore", "--staged"] },
            { desc: "커밋 되돌리는 새 커밋", keys: ["git", "revert", "<hash>"] },
            { desc: "이전 커밋으로 리셋 (기록 유지)", keys: ["git", "reset", "--soft"] },
            { desc: "완전 초기화 ⚠️", keys: ["git", "reset", "--hard"] },
            { desc: "추적 안 된 파일 삭제", keys: ["git", "clean", "-fd"] }
        ]
    },
    {
        category: "GitHub CLI · 저장소 (gh repo)",
        color: "#4B5563",
        icon: "🐙",
        items: [
            { desc: "로그인", keys: ["gh", "auth", "login"] },
            { desc: "로그인 상태 확인", keys: ["gh", "auth", "status"] },
            { desc: "저장소 생성", keys: ["gh", "repo", "create"] },
            { desc: "저장소 복제", keys: ["gh", "repo", "clone"] },
            { desc: "저장소 브라우저에서 열기", keys: ["gh", "repo", "view", "-w"] },
            { desc: "포크", keys: ["gh", "repo", "fork"] }
        ]
    },
    {
        category: "GitHub CLI · PR & 이슈 (gh pr)",
        color: "#0EA5E9",
        icon: "🔀",
        items: [
            { desc: "PR 생성", keys: ["gh", "pr", "create"] },
            { desc: "PR 목록", keys: ["gh", "pr", "list"] },
            { desc: "PR 보기", keys: ["gh", "pr", "view"] },
            { desc: "PR 체크아웃", keys: ["gh", "pr", "checkout"] },
            { desc: "PR 병합", keys: ["gh", "pr", "merge"] },
            { desc: "이슈 생성", keys: ["gh", "issue", "create"] },
            { desc: "CI 실행 감시", keys: ["gh", "run", "watch"] }
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

renderShortcuts();

document.getElementById('searchInput').addEventListener('input', (e) => {
    renderShortcuts(e.target.value);
});

window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
