const winShortcuts = [
    {
        category: "LD 심볼 입력 (핵심)",
        color: "#DA291C", // LS ELECTRIC Red
        icon: "⭐",
        items: [
            { desc: "평상시 열린 접점 ─┤├─", keys: ["F3"] },
            { desc: "평상시 닫힌 접점 ─┤/├─", keys: ["F4"] },
            { desc: "양변환 검출 접점 ─┤P├─", keys: ["Shift", "F1"] },
            { desc: "음변환 검출 접점 ─┤N├─", keys: ["Shift", "F2"] },
            { desc: "코일 ─( )─", keys: ["F9"] },
            { desc: "셋(Set) 코일 ─(S)─", keys: ["Shift", "F3"] },
            { desc: "리셋(Reset) 코일 ─(R)─", keys: ["Shift", "F4"] },
            { desc: "양변환 검출 코일 ─(P)─", keys: ["Shift", "F5"] },
            { desc: "응용명령 (Instruction)", keys: ["F10"] }
        ]
    },
    {
        category: "라인 & 연결 (Line)",
        color: "#0072CE", // Blue
        icon: "📏",
        items: [
            { desc: "가로선 입력", keys: ["F5"] },
            { desc: "세로선 입력", keys: ["F6"] },
            { desc: "연결선", keys: ["Shift", "F8"] },
            { desc: "선택 모드 (커서)", keys: ["Esc"] },
            { desc: "셀 / 심볼 삭제", keys: ["Delete"] },
            { desc: "셀 편집 (입력 확정)", keys: ["Enter"] }
        ]
    },
    {
        category: "편집 (Edit)",
        color: "#8764b8", // Purple
        icon: "✏️",
        items: [
            { desc: "실행 취소 (Undo)", keys: ["Ctrl", "Z"] },
            { desc: "다시 실행 (Redo)", keys: ["Ctrl", "Y"] },
            { desc: "복사하기", keys: ["Ctrl", "C"] },
            { desc: "잘라내기", keys: ["Ctrl", "X"] },
            { desc: "붙여넣기", keys: ["Ctrl", "V"] },
            { desc: "전체 선택", keys: ["Ctrl", "A"] },
            { desc: "객체 속성 (Properties)", keys: ["Ctrl", "F3"] },
            { desc: "행 삽입", keys: ["Ctrl", "Shift", "Insert"] },
            { desc: "행 삭제", keys: ["Ctrl", "Shift", "Delete"] }
        ]
    },
    {
        category: "파일 & 일반 (File)",
        color: "#34A853", // Green
        icon: "📁",
        items: [
            { desc: "프로젝트 저장", keys: ["Ctrl", "S"] },
            { desc: "프로젝트 열기", keys: ["Ctrl", "O"] },
            { desc: "새 프로젝트", keys: ["Ctrl", "N"] },
            { desc: "인쇄하기", keys: ["Ctrl", "P"] },
            { desc: "프로그램 검사 (컴파일)", keys: ["Ctrl", "Alt", "C"] },
            { desc: "온라인 접속 / 해제", keys: ["Ctrl", "Alt", "O"] }
        ]
    },
    {
        category: "찾기 & 보기 (Find & View)",
        color: "#00b7c3", // Cyan
        icon: "🔍",
        items: [
            { desc: "찾기", keys: ["Ctrl", "F"] },
            { desc: "바꾸기", keys: ["Ctrl", "H"] },
            { desc: "디바이스 찾기", keys: ["Ctrl", "F2"] },
            { desc: "확대 / 축소", keys: ["Ctrl", "마우스휠"] },
            { desc: "모니터 시작 / 끝", keys: ["Ctrl", "M"] },
            { desc: "다음 창으로 이동", keys: ["Ctrl", "Tab"] }
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
