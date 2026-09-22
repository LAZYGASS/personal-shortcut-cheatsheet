const powerToysShortcuts = [
    { category: "빠른 실행 · 클립보드", icon: "⚡", color: "#6750a4", items: [
        { desc: "Command Palette — 앱·명령·파일·웹을 통합 검색", keys: ["Win", "Alt", "Space"] },
        { desc: "PowerToys Run — 빠른 실행 창 열기/닫기", keys: ["Alt", "Space"] },
        { desc: "Run: 선택 항목을 관리자 권한으로 실행", keys: ["Ctrl", "Shift", "Enter"] },
        { desc: "Advanced Paste — 고급 붙여넣기 창", keys: ["Win", "Shift", "V"] },
        { desc: "Advanced Paste — 서식 없는 텍스트로 바로 붙여넣기", keys: ["Ctrl", "Win", "Alt", "V"] },
        { desc: "Command Not Found — PowerShell에서 누락된 명령의 WinGet 패키지 제안", keys: ["PowerShell 7"] }
    ]},
    { category: "창 · 데스크톱", icon: "▣", color: "#0078d4", items: [
        { desc: "Always On Top — 활성 창을 항상 위에 고정/해제", keys: ["Win", "Ctrl", "T"] },
        { desc: "FancyZones — 사용자 지정 영역에 창 배치", keys: ["Shift", "창 드래그"] },
        { desc: "FancyZones — 여러 영역에 걸쳐 창 배치", keys: ["Ctrl", "Shift", "창 드래그"] },
        { desc: "Workspaces — 앱 묶음을 저장한 위치와 크기로 한 번에 실행", keys: ["편집기에서 생성"] },
        { desc: "Window Hopper — 현재 앱에 속한 창 사이를 빠르게 순환", keys: ["설정 가능"] },
        { desc: "Crop And Lock — 창의 일부를 썸네일 또는 대화형 창으로 표시", keys: ["설정 가능"] },
        { desc: "Awake — 전원 설정을 바꾸지 않고 PC를 깨어 있게 유지", keys: ["트레이에서 설정"] }
    ]},
    { category: "화면 · 캡처 · 디자인", icon: "✦", color: "#c43e1c", items: [
        { desc: "Color Picker — 화면 어디서나 색상 선택", keys: ["Win", "Shift", "C"] },
        { desc: "Text Extractor — 화면의 이미지·영상에서 OCR로 텍스트 복사", keys: ["Win", "Shift", "T"] },
        { desc: "Screen Ruler — 화면의 픽셀 거리 측정", keys: ["Win", "Shift", "M"] },
        { desc: "Peek — 선택한 파일을 앱 없이 미리 보기", keys: ["Ctrl", "Space"] },
        { desc: "ZoomIt — 화면 확대", keys: ["Ctrl", "1"] },
        { desc: "ZoomIt — 실시간 확대", keys: ["Ctrl", "4"] },
        { desc: "PowerDisplay — 외부 모니터 밝기·입력·음량·색온도 제어", keys: ["설정 가능"] },
        { desc: "Light Switch — 시간대에 따라 Windows 밝은/어두운 테마 전환", keys: ["자동 실행"] }
    ]},
    { category: "파일 · 시스템 도구", icon: "🛠", color: "#107c10", items: [
        { desc: "PowerRename — 검색·치환·정규식으로 파일 일괄 이름 변경", keys: ["우클릭", "PowerRename"] },
        { desc: "Image Resizer — 여러 이미지의 크기·형식을 일괄 변경", keys: ["우클릭", "Resize with PowerToys"] },
        { desc: "File Locksmith — 파일을 사용 중인 프로세스 확인·종료", keys: ["우클릭", "Unlock with File Locksmith"] },
        { desc: "File Explorer Add-ons — Markdown·SVG·PDF 등 미리 보기/축소판", keys: ["Alt", "P"] },
        { desc: "New+ — 템플릿으로 파일과 폴더 생성", keys: ["우클릭", "New+"] },
        { desc: "Environment Variables — 프로필로 환경 변수 관리", keys: ["설정에서 열기"] },
        { desc: "Hosts File Editor — hosts 파일을 안전하게 편집", keys: ["설정에서 열기"] },
        { desc: "Registry Preview — .reg 파일 시각화·편집·적용", keys: ["우클릭", "Preview"] }
    ]},
    { category: "키보드 · 문자", icon: "⌨", color: "#8e24aa", items: [
        { desc: "Keyboard Manager — 키·단축키·텍스트를 전역 또는 앱별 재매핑", keys: ["PowerToys 설정"] },
        { desc: "Quick Accent — 악센트 문자를 빠르게 입력", keys: ["문자 키", "Space / ← / →"] },
        { desc: "Shortcut Guide — Windows·PowerToys·활성 앱 단축키 검색", keys: ["Win", "Shift", "?"] },
        { desc: "Shortcut Guide — 검색창으로 이동", keys: ["Ctrl", "F"] }
    ]},
    { category: "마우스 · 여러 PC", icon: "🖱", color: "#0067c0", items: [
        { desc: "Find My Mouse — 커서 위치에 스포트라이트", keys: ["왼쪽 Ctrl", "두 번"] },
        { desc: "Mouse Highlighter — 클릭 위치 강조 켜기/끄기", keys: ["Win", "Shift", "H"] },
        { desc: "Mouse Jump — 큰 화면·다중 모니터에서 포인터 순간 이동", keys: ["설정 가능"] },
        { desc: "Mouse Pointer Crosshairs — 포인터 중심 십자선 표시", keys: ["설정 가능"] },
        { desc: "Gliding Cursor — 한 버튼으로 포인터 위치 제어", keys: ["Win", "Alt", "."] },
        { desc: "CursorWrap — 화면 가장자리에서 반대편으로 커서 이동", keys: ["설정 가능"] },
        { desc: "Mouse Without Borders — 최대 4대 PC에서 마우스·키보드·클립보드 공유", keys: ["보안 키로 연결"] },
        { desc: "Grab And Move — 마우스로 창을 잡아 이동하는 방식을 확장", keys: ["설정 가능"] }
    ]}
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById("shortcutGrid");
    grid.innerHTML = "";
    powerToysShortcuts.forEach((category) => {
        const items = category.items.filter((item) => matchesShortcut(item, category.category, filter));
        if (!items.length) return;
        const card = document.createElement("section");
        card.className = "card";
        card.style.setProperty("--accent-color", category.color);
        card.innerHTML = `<div class="card-header"><span class="icon">${category.icon}</span><h2>${category.category}</h2></div><ul class="shortcut-list">${items.map((item) => `<li class="shortcut-item"><span class="desc">${item.desc}</span><div class="keys">${item.keys.map((key) => `<kbd>${key}</kbd>`).join("")}</div></li>`).join("")}</ul>`;
        grid.appendChild(card);
    });
}

renderShortcuts();
document.getElementById("searchInput").addEventListener("input", (event) => renderShortcuts(event.target.value));
window.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
        event.preventDefault();
        document.getElementById("searchInput").focus();
    }
});
