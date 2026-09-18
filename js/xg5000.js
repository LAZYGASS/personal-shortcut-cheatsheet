const xg5000Shortcuts = [
    {
        category: "PLC 플래그 메모 (XGB 계열 참고)",
        color: "#DA291C",
        icon: "💡",
        items: [
            { desc: "F0099 · _ON · 항상 ON — F99 ON으로 기억한 항목. PLC RUN 중 매 스캔 참인 조건으로 사용합니다. 키보드 단축키가 아닌 특수 릴레이 주소입니다.", keys: [] },
            { desc: "F009B · _1ON · 최초 1스캔 ON — PLC가 RUN을 시작한 첫 스캔에만 켜지는 플래그. 초기값 설정 등 시작할 때 한 번 실행할 처리에 사용합니다.", keys: [] },
            { desc: "F009B의 한 번 = RUN 시작 후 첫 스캔 — XG5000 편집기를 여는 순간이 아닙니다. STOP → RUN으로 다시 시작하면 첫 스캔이 다시 발생합니다. 1스캔은 프로그램을 한 차례 처리하는 주기입니다.", keys: [] },
            { desc: "주소 확인 — 위 표기는 XGB 계열 공식 자료 기준입니다. 실제 CPU 모델·언어의 플래그 일람을 확인하세요. F0099와 F00099처럼 자릿수가 다른 주소를 다른 기종에 그대로 옮겨 쓰지 않습니다.", keys: [] }
        ]
    },
    {
        category: "S000.00 · 스텝 순서 제어 메모",
        color: "#0072CE",
        icon: "🔢",
        items: [
            { desc: "S000.00 — S는 스텝 컨트롤러(스텝 릴레이), 000은 그룹 번호, .00은 그 그룹의 0번 스텝입니다. 소수나 시간 값이 아니라 순서 제어에 쓰는 주소입니다.", keys: [] },
            { desc: "S000.00이 ON — 해당 스텝이 활성 상태라는 뜻입니다. 접점으로 사용하면 그 스텝일 때 조건이 참이 됩니다. 초기·대기·운전 중 어떤 의미인지는 프로그램 작성자가 정합니다.", keys: [] },
            { desc: "S000.00 → S000.01 → S000.02 — 대기 → 운전 → 완료처럼 단계를 나누는 설명용 예시입니다. 주소만 적으면 자동 진행되는 것은 아니며, 전환 조건과 스텝 설정 로직이 필요합니다.", keys: [] },
            { desc: "F009B와 S000.00 연결 — 시작 첫 스캔에 초기 스텝을 설정하는 용도로 조합할 수 있습니다. 실제 초기화 방식·유지 설정은 해당 CPU와 프로그램에서 확인합니다. 사용자 프로그램에서 이 연결이 구현됐는지는 미확인입니다.", keys: [] }
        ]
    },

    {
        category: "LD 심볼 입력",
        color: "#DA291C",
        icon: "⚡",
        items: [
            { desc: "A 접점 (평상시 열린 접점)", keys: ["F3"] },
            { desc: "B 접점 (평상시 닫힌 접점)", keys: ["F4"] },
            { desc: "양변환 검출 접점 (P 입력)", keys: ["Shift", "F1"] },
            { desc: "음변환 검출 접점 (N 입력)", keys: ["Shift", "F2"] },
            { desc: "출력 코일", keys: ["F9"] },
            { desc: "SET 코일", keys: ["Shift", "F3"] },
            { desc: "RESET 코일", keys: ["Shift", "F4"] },
            { desc: "양변환 검출 코일", keys: ["Shift", "F5"] },
            { desc: "타이머·응용명령 펑션 불러오기", keys: ["F10"] }
        ]
    },
    {
        category: "라인과 연결",
        color: "#0072CE",
        icon: "📏",
        items: [
            { desc: "가로줄 입력", keys: ["F5"] },
            { desc: "세로줄 입력", keys: ["F6"] },
            { desc: "A접점 병렬연결", keys: ["Ctrl", "3"] },
            { desc: "B접점 병렬연결", keys: ["Ctrl", "4"] },
            { desc: "연결선", keys: ["Shift", "F8"] },
            { desc: "INSERT 모드", keys: ["Insert"] },
            { desc: "선택 모드 (커서)", keys: ["Esc"] },
            { desc: "셀 또는 심볼 삭제", keys: ["Delete"] },
            { desc: "셀 편집 확정", keys: ["Enter"] }
        ]
    },
    {
        category: "편집",
        color: "#8764B8",
        icon: "✏️",
        items: [
            { desc: "줄 삭제", keys: ["Ctrl", "D"] },
            { desc: "줄 삽입", keys: ["Ctrl", "L"] },
            { desc: "칸 삭제", keys: ["Ctrl", "T"] },
            { desc: "칸 삽입", keys: ["Ctrl", "I"] },
            { desc: "설명문 입력", keys: ["Ctrl", "E"] },
            { desc: "실행 취소", keys: ["Ctrl", "Z"] },
            { desc: "다시 실행", keys: ["Ctrl", "Y"] },
            { desc: "복사", keys: ["Ctrl", "C"] },
            { desc: "잘라내기", keys: ["Ctrl", "X"] },
            { desc: "붙여넣기", keys: ["Ctrl", "V"] },
            { desc: "전체 선택", keys: ["Ctrl", "A"] }
        ]
    },
    {
        category: "시뮬레이션",
        color: "#34A853",
        icon: "▶",
        items: [
            { desc: "시뮬레이터 시작", keys: ["Alt", "T", "S"], separator: "→" },
            { desc: "시뮬레이션 종료", keys: ["Alt", "T", "E"], separator: "→" }
        ]
    },
    {
        category: "파일과 일반",
        color: "#00B7C3",
        icon: "📁",
        items: [
            { desc: "프로젝트 저장", keys: ["Ctrl", "S"] },
            { desc: "프로젝트 열기", keys: ["Ctrl", "O"] },
            { desc: "새 프로젝트", keys: ["Ctrl", "N"] },
            { desc: "인쇄", keys: ["Ctrl", "P"] },
            { desc: "프로그램 검사 (컴파일)", keys: ["Ctrl", "Alt", "C"] },
            { desc: "온라인 접속 또는 해제", keys: ["Ctrl", "Alt", "O"] }
        ]
    },
    {
        category: "찾기와 보기",
        color: "#F29900",
        icon: "🔍",
        items: [
            { desc: "찾기", keys: ["Ctrl", "F"] },
            { desc: "바꾸기", keys: ["Ctrl", "H"] },
            { desc: "디바이스 찾기", keys: ["Ctrl", "F2"] },
            { desc: "확대 또는 축소", keys: ["Ctrl", "마우스휠"] },
            { desc: "모니터 시작 또는 종료", keys: ["Ctrl", "M"] },
            { desc: "다음 창으로 이동", keys: ["Ctrl", "Tab"] }
        ]
    }
];

const createShortcutKeysMarkup = (shortcut) => {
    const separator = shortcut.separator ?? "+";
    const separatorMarkup = `<span style="font-size: 0.75rem; margin: 0 3px;">${separator}</span>`;

    return shortcut.keys.map((key) => `<kbd>${key}</kbd>`).join(separatorMarkup);
};

const renderShortcuts = (filter = "") => {
    const shortcutGrid = document.getElementById("shortcutGrid");

    shortcutGrid.innerHTML = "";

    xg5000Shortcuts.forEach((category) => {
        const filteredItems = category.items.filter(item => matchesShortcut(item, category.category, filter));

        if (filteredItems.length === 0) {
            return;
        }

        const shortcutItemsMarkup = filteredItems.map((item) => `
            <li class="shortcut-item">
                <span class="desc">${item.desc}</span>
                <div class="keys">${createShortcutKeysMarkup(item)}</div>
            </li>
        `).join("");

        const shortcutCard = document.createElement("section");
        shortcutCard.className = "card";
        shortcutCard.style.setProperty("--accent-color", category.color);
        shortcutCard.innerHTML = `
            <div class="card-header">
                <span class="icon">${category.icon}</span>
                <h2>${category.category}</h2>
            </div>
            <ul class="shortcut-list">${shortcutItemsMarkup}</ul>
        `;
        shortcutGrid.appendChild(shortcutCard);
    });
};

renderShortcuts();

document.getElementById("searchInput").addEventListener("input", (event) => {
    renderShortcuts(event.target.value);
});

window.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
        event.preventDefault();
        document.getElementById("searchInput").focus();
    }
});
