const chromeShortcuts = [
    {
        "category": "레딧 추천 · 먼저 익힐 4가지",
        "icon": "💡",
        "color": "#e65100",
        "items": [
            {
                "desc": "닫은 탭 복원 (여러 번 누르면 차례로 복원)",
                "keys": [
                    "Ctrl",
                    "Shift",
                    "T"
                ]
            },
            {
                "desc": "주소창 선택",
                "keys": [
                    "Ctrl",
                    "L"
                ]
            },
            {
                "desc": "현재 탭 닫기",
                "keys": [
                    "Ctrl",
                    "W"
                ]
            },
            {
                "desc": "탭이 너무 많을 때: 열린 탭 검색",
                "keys": [
                    "Ctrl",
                    "Shift",
                    "A"
                ]
            }
        ]
    },
    {
        "category": "레딧 추천 · 입력칸 편집 (Windows 공통)",
        "icon": "⌨️",
        "color": "#188038",
        "items": [
            {
                "desc": "입력 중 앞 단어 삭제 (오타를 통째로 지울 때)",
                "keys": [
                    "Ctrl",
                    "Backspace"
                ]
            },
            {
                "desc": "입력칸에서 단어 단위로 커서 이동",
                "keys": [
                    "Ctrl",
                    "← / →"
                ]
            },
            {
                "desc": "입력칸에서 단어 단위로 선택 범위 늘리기",
                "keys": [
                    "Ctrl",
                    "Shift",
                    "← / →"
                ]
            },
            {
                "desc": "입력칸에서 현재 줄의 처음·끝까지 선택",
                "keys": [
                    "Shift",
                    "Home / End"
                ]
            }
        ]
    },
    {
        "category": "탭과 창 (Tabs & Windows)",
        "icon": "📑",
        "color": "#1a73e8",
        "items": [
            {
                "desc": "새 탭",
                "keys": [
                    "Ctrl",
                    "T"
                ]
            },
            {
                "desc": "다음 탭",
                "keys": [
                    "Ctrl",
                    "Tab"
                ]
            },
            {
                "desc": "이전 탭",
                "keys": [
                    "Ctrl",
                    "Shift",
                    "Tab"
                ]
            },
            {
                "desc": "왼쪽에서 1~8번째 탭",
                "keys": [
                    "Ctrl",
                    "1~8"
                ]
            },
            {
                "desc": "맨 오른쪽 탭",
                "keys": [
                    "Ctrl",
                    "9"
                ]
            },
            {
                "desc": "새 시크릿 창",
                "keys": [
                    "Ctrl",
                    "Shift",
                    "N"
                ]
            }
        ]
    },
    {
        "category": "주소창과 탐색 (Navigation)",
        "icon": "🔎",
        "color": "#188038",
        "items": [
            {
                "desc": "현재 페이지에서 찾기",
                "keys": [
                    "Ctrl",
                    "F"
                ]
            },
            {
                "desc": "이전 페이지",
                "keys": [
                    "Alt",
                    "←"
                ]
            },
            {
                "desc": "다음 페이지",
                "keys": [
                    "Alt",
                    "→"
                ]
            }
        ]
    },
    {
        "category": "북마크와 다운로드 (Bookmarks)",
        "icon": "⭐",
        "color": "#b06000",
        "items": [
            {
                "desc": "현재 페이지 북마크 추가",
                "keys": [
                    "Ctrl",
                    "D"
                ]
            },
            {
                "desc": "북마크 바 표시·숨기기",
                "keys": [
                    "Ctrl",
                    "Shift",
                    "B"
                ]
            },
            {
                "desc": "다운로드 목록",
                "keys": [
                    "Ctrl",
                    "J"
                ]
            }
        ]
    },
    {
        "category": "새로고침과 화면 (Display)",
        "icon": "🖥️",
        "color": "#a142f4",
        "items": [
            {
                "desc": "캐시를 무시하고 새로고침",
                "keys": [
                    "Ctrl",
                    "Shift",
                    "R"
                ]
            },
            {
                "desc": "전체 화면 켜기·끄기",
                "keys": [
                    "F11"
                ]
            },
            {
                "desc": "화면 확대",
                "keys": [
                    "Ctrl",
                    "+"
                ]
            },
            {
                "desc": "화면 축소",
                "keys": [
                    "Ctrl",
                    "-"
                ]
            },
            {
                "desc": "기본 배율 100%",
                "keys": [
                    "Ctrl",
                    "0"
                ]
            }
        ]
    },
    {
        "category": "마우스 조합 (Mouse)",
        "icon": "🖱️",
        "color": "#c5221f",
        "items": [
            {
                "desc": "링크를 새 배경 탭으로 열기",
                "keys": [
                    "Ctrl",
                    "링크 클릭"
                ]
            },
            {
                "desc": "휠 버튼으로 링크를 새 탭에 열기",
                "keys": [
                    "링크 휠 클릭"
                ]
            },
            {
                "desc": "휠 버튼으로 탭 닫기",
                "keys": [
                    "탭 휠 클릭"
                ]
            }
        ]
    },
    {
        "category": "레딧 추천 · 함께 쓰면 편한 Windows 기능",
        "icon": "🪟",
        "color": "#0078d4",
        "items": [
            {
                "desc": "복사해 둔 내용 다시 꺼내기 (클립보드 기록 활성화 필요)",
                "keys": [
                    "Win",
                    "V"
                ]
            },
            {
                "desc": "화면 일부 캡처 (이후 입력칸에서 Ctrl+V로 붙여넣기)",
                "keys": [
                    "Win",
                    "Shift",
                    "S"
                ]
            },
            {
                "desc": "Chrome 창을 다른 모니터로 옮기기",
                "keys": [
                    "Win",
                    "Shift",
                    "← / →"
                ]
            }
        ]
    }
];

function renderShortcuts(filter = "") {
    const grid = document.getElementById('shortcutGrid');
    grid.innerHTML = "";

    chromeShortcuts.forEach(cat => {
        const filteredItems = cat.items.filter(item => matchesShortcut(item, cat.category, filter));

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
