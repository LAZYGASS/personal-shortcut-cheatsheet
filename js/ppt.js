const winShortcuts = [
    {
        category: "핵심 단축키 (Essential)",
        color: "#D24726", // PowerPoint Orange
        icon: "⭐",
        items: [
            { desc: "새 슬라이드 추가", keys: ["Ctrl", "M"] },
            { desc: "저장하기", keys: ["Ctrl", "S"] },
            { desc: "작업 취소 (Undo)", keys: ["Ctrl", "Z"] },
            { desc: "다시 실행 (Redo)", keys: ["Ctrl", "Y"] },
            { desc: "복사 / 붙여넣기", keys: ["Ctrl", "C/V"] },
            { desc: "슬라이드/개체 복제", keys: ["Ctrl", "D"] },
            { desc: "찾기", keys: ["Ctrl", "F"] },
            { desc: "바꾸기", keys: ["Ctrl", "H"] },
            { desc: "처음부터 슬라이드쇼", keys: ["F5"] },
            { desc: "현재 슬라이드부터 쇼", keys: ["Shift", "F5"] }
        ]
    },
    {
        category: "파일 및 일반 (File)",
        color: "#0078d4", // Blue
        icon: "📁",
        items: [
            { desc: "다른 이름으로 저장", keys: ["F12"] },
            { desc: "프레젠테이션 열기", keys: ["Ctrl", "O"] },
            { desc: "새 프레젠테이션", keys: ["Ctrl", "N"] },
            { desc: "인쇄하기", keys: ["Ctrl", "P"] },
            { desc: "도움말 열기", keys: ["F1"] },
            { desc: "창 닫기", keys: ["Ctrl", "W"] },
            { desc: "파워포인트 종료", keys: ["Alt", "F4"] }
        ]
    },
    {
        category: "슬라이드쇼 (Slide Show)",
        color: "#EA4335", // Red
        icon: "📽️",
        items: [
            { desc: "다음 슬라이드", keys: ["N", "또는", "→"] },
            { desc: "이전 슬라이드", keys: ["P", "또는", "←"] },
            { desc: "특정 번호로 이동", keys: ["번호", "Enter"] },
            { desc: "화면 검게 / 복귀", keys: ["B", "또는", "."] },
            { desc: "화면 하얗게 / 복귀", keys: ["W", "또는", ","] },
            { desc: "레이저 포인터", keys: ["Ctrl", "L"] },
            { desc: "펜으로 그리기", keys: ["Ctrl", "P"] },
            { desc: "화살표로 되돌리기", keys: ["Ctrl", "A"] },
            { desc: "잉크 지우기", keys: ["E"] },
            { desc: "슬라이드쇼 종료", keys: ["Esc"] }
        ]
    },
    {
        category: "편집 및 서식 (Formatting)",
        color: "#8764b8", // Purple
        icon: "🎨",
        items: [
            { desc: "굵게 / 기울임 / 밑줄", keys: ["Ctrl", "B/I/U"] },
            { desc: "글꼴 크기 키우기", keys: ["Ctrl", "Shift", ">"] },
            { desc: "글꼴 크기 줄이기", keys: ["Ctrl", "Shift", "<"] },
            { desc: "가운데 정렬", keys: ["Ctrl", "E"] },
            { desc: "왼쪽 / 오른쪽 정렬", keys: ["Ctrl", "L/R"] },
            { desc: "양쪽 맞춤", keys: ["Ctrl", "J"] },
            { desc: "글꼴 서식 대화상자", keys: ["Ctrl", "T"] },
            { desc: "서식 복사", keys: ["Ctrl", "Shift", "C"] },
            { desc: "서식 붙여넣기", keys: ["Ctrl", "Shift", "V"] },
            { desc: "하이퍼링크 삽입", keys: ["Ctrl", "K"] }
        ]
    },
    {
        category: "개체 및 정렬 (Objects)",
        color: "#34A853", // Green
        icon: "🔷",
        items: [
            { desc: "모두 선택", keys: ["Ctrl", "A"] },
            { desc: "그룹으로 묶기", keys: ["Ctrl", "G"] },
            { desc: "그룹 해제", keys: ["Ctrl", "Shift", "G"] },
            { desc: "개체 그룹 이동 (Tab)", keys: ["Tab"] },
            { desc: "개체 미세 이동", keys: ["Ctrl", "방향키"] },
            { desc: "수평/수직 유지 이동", keys: ["Shift", "드래그"] },
            { desc: "개체 회전", keys: ["Alt", "←/→"] },
            { desc: "맨 앞으로 가져오기", keys: ["Ctrl", "Shift", "]"] },
            { desc: "맨 뒤로 보내기", keys: ["Ctrl", "Shift", "["] }
        ]
    },
    {
        category: "슬라이드 관리 (Slides)",
        color: "#FBBC05", // Yellow
        icon: "🗂️",
        items: [
            { desc: "새 슬라이드", keys: ["Ctrl", "M"] },
            { desc: "슬라이드 복제", keys: ["Ctrl", "D"] },
            { desc: "다음 / 이전 슬라이드", keys: ["PgDn/PgUp"] },
            { desc: "첫 / 마지막 슬라이드", keys: ["Home/End"] },
            { desc: "슬라이드 승격/강등 (개요)", keys: ["Shift", "Tab/Tab"] },
            { desc: "구역 축소 / 확장", keys: ["Alt", "Shift", "-/+"] }
        ]
    },
    {
        category: "탐색 및 보기 (Navigation)",
        color: "#00b7c3", // Cyan
        icon: "🔍",
        items: [
            { desc: "확대 / 축소", keys: ["Ctrl", "마우스휠"] },
            { desc: "다음 창/틀로 이동", keys: ["F6"] },
            { desc: "이전 창/틀로 이동", keys: ["Shift", "F6"] },
            { desc: "리본 최소화 / 표시", keys: ["Ctrl", "F1"] },
            { desc: "바로 가기 메뉴", keys: ["Shift", "F10"] },
            { desc: "맞춤법 검사", keys: ["F7"] },
            { desc: "전체 화면 읽기", keys: ["Alt", "W", "F"] }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    winShortcuts.forEach(cat => {
        const filteredItems = cat.items.filter(item =>
            item.desc.toLowerCase().includes(filter.toLowerCase()) ||
            cat.category.toLowerCase().includes(filter.toLowerCase()) ||
            item.keys.join(" ").toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredItems.length > 0) {
            const card = document.createElement('section');
            card.className = "card";
            card.style.setProperty('--accent-color', cat.color);

            let itemsHtml = filteredItems.map(item => `
                <li class="shortcut-item">
                    <span class="desc">${item.desc}</span>
                    <div class="keys">
                        ${item.keys.map(key => `<kbd>${key}</kbd>`).join('<span style="font-size: 0.6rem; margin: 0 1px;">+</span>')}
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
