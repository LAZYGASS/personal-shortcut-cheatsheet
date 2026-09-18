const symbolMethods = [
  {
    "category": "ㄹ + 한자",
    "label": "단위",
    "note": "한글 입력 상태에서 ㄹ을 입력한 뒤 한자 키. ㎾는 한 글자이고 kW는 두 글자입니다. SI 문서에는 일반 문자 조합을 사용하세요.",
    "items": [
      {
        "symbol": "℃",
        "desc": "섭씨 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "℉",
        "desc": "화씨 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎜",
        "desc": "밀리미터 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎝",
        "desc": "센티미터 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎞",
        "desc": "킬로미터 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎡",
        "desc": "제곱미터 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎥",
        "desc": "세제곱미터 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎖",
        "desc": "밀리리터 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "ℓ",
        "desc": "리터 문자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎎",
        "desc": "밀리그램 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎏",
        "desc": "킬로그램 한 글자",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎾",
        "desc": "킬로와트 한 글자 kW",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎿",
        "desc": "메가와트 한 글자 MW",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "㎫",
        "desc": "메가파스칼 한 글자 MPa",
        "aliases": "",
        "example": "",
        "inputHint": ""
      }
    ]
  },
  {
    "category": "ㅊ + 한자",
    "label": "분수 · 위첨자 · 아래첨자",
    "note": "한글 입력 상태에서 ㅊ을 입력한 뒤 한자 키. 분수 전체가 한 글자입니다.",
    "items": [
      {
        "symbol": "½",
        "desc": "2분의 1",
        "aliases": "1/2 0.5",
        "example": "1/2 0.5 · 분수 전체가 한 글자",
        "inputHint": "Windows Alt+0189 (서유럽 코드페이지 기준) · Word: U+00BD → Alt+X"
      },
      {
        "symbol": "¼",
        "desc": "4분의 1",
        "aliases": "1/4 0.25",
        "example": "1/4 0.25 · 분수 전체가 한 글자",
        "inputHint": "Windows Alt+0188 (서유럽 코드페이지 기준) · Word: U+00BC → Alt+X"
      },
      {
        "symbol": "¾",
        "desc": "4분의 3",
        "aliases": "3/4 0.75",
        "example": "3/4 0.75 · 분수 전체가 한 글자",
        "inputHint": "Windows Alt+0190 (서유럽 코드페이지 기준) · Word: U+00BE → Alt+X"
      },
      {
        "symbol": "⅓",
        "desc": "3분의 1",
        "aliases": "1/3",
        "example": "1/3 · 분수 전체가 한 글자",
        "inputHint": "Word: U+2153 → Alt+X"
      },
      {
        "symbol": "⅔",
        "desc": "3분의 2",
        "aliases": "2/3",
        "example": "2/3 · 분수 전체가 한 글자",
        "inputHint": "Word: U+2154 → Alt+X"
      },
      {
        "symbol": "⅛",
        "desc": "8분의 1",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "⅜",
        "desc": "8분의 3",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "⅝",
        "desc": "8분의 5",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "⅞",
        "desc": "8분의 7",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "¹",
        "desc": "위첨자 1",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "²",
        "desc": "위첨자 2",
        "aliases": "제곱 지수",
        "example": "x²",
        "inputHint": "Windows Alt+0178 (서유럽 코드페이지 기준) · Word: U+00B2 입력 → Alt+X"
      },
      {
        "symbol": "³",
        "desc": "위첨자 3",
        "aliases": "세제곱 지수",
        "example": "m³",
        "inputHint": "Windows Alt+0179 (서유럽 코드페이지 기준) · Word: U+00B3 입력 → Alt+X"
      },
      {
        "symbol": "⁴",
        "desc": "위첨자 4",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "ⁿ",
        "desc": "위첨자 n",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "₁",
        "desc": "아래첨자 1",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "₂",
        "desc": "아래첨자 2",
        "aliases": "화학식 이산화탄소",
        "example": "CO₂",
        "inputHint": "Word: U+2082 입력 → Alt+X"
      },
      {
        "symbol": "₃",
        "desc": "아래첨자 3",
        "aliases": "화학식 냉매 암모니아",
        "example": "NH₃",
        "inputHint": "Word: U+2083 입력 → Alt+X"
      },
      {
        "symbol": "₄",
        "desc": "아래첨자 4",
        "aliases": "",
        "example": "",
        "inputHint": ""
      }
    ]
  },
  {
    "category": "ㄲ + 한자",
    "label": "지름 대용 문자",
    "note": "ㄲ을 입력한 뒤 한자 키. Ø·ø는 라틴 문자이며 지름 전용 기호 ⌀와는 다릅니다.",
    "items": [
      {
        "symbol": "Ø",
        "desc": "빗금 O · 지름 대용 표기",
        "aliases": "파이 직경",
        "example": "Ø25 · 라틴 문자이므로 도면 지정 기호 확인",
        "inputHint": "Windows Alt+0216 (서유럽 코드페이지 기준) · Word: U+00D8 입력 → Alt+X"
      },
      {
        "symbol": "ø",
        "desc": "빗금 o · 소문자 지름 대용",
        "aliases": "파이 직경 Alt248 Alt 248",
        "example": "ø25 · 라틴 문자. 지름 전용 기호는 ⌀",
        "inputHint": "Windows Alt+0248 (서유럽 코드페이지 기준) · Word: U+00F8 → Alt+X · Alt+248은 앱·문자표 확인"
      }
    ]
  },
  {
    "category": "ㅎ + 한자",
    "label": "그리스 문자",
    "note": "ㅎ을 입력한 뒤 한자 키. Φ는 피(phi), π는 파이(pi), Ω는 오메가입니다.",
    "items": [
      {
        "symbol": "Φ",
        "desc": "대문자 그리스 피 (phi)",
        "aliases": "파이 phi",
        "example": "그리스 문자 · 지름 기호 ⌀와 구분",
        "inputHint": "Word: U+03A6 입력 → Alt+X"
      },
      {
        "symbol": "π",
        "desc": "원주율 파이",
        "aliases": "파이 pi",
        "example": "π ≈ 3.14159",
        "inputHint": "Word: U+03C0 입력 → Alt+X"
      },
      {
        "symbol": "Ω",
        "desc": "옴",
        "aliases": "저항 오메가 ohm",
        "example": "10 Ω",
        "inputHint": "Word: U+03A9 입력 → Alt+X"
      }
    ]
  },
  {
    "category": "ㄷ + 한자",
    "label": "계산 · 비교",
    "note": "ㄷ을 입력한 뒤 한자 키.",
    "items": [
      {
        "symbol": "±",
        "desc": "플러스마이너스 · 공차",
        "aliases": "공차 오차 plus minus",
        "example": "25 ± 0.1",
        "inputHint": "Windows Alt+0177 (서유럽 코드페이지 기준) · Word: U+00B1 입력 → Alt+X"
      },
      {
        "symbol": "×",
        "desc": "곱하기",
        "aliases": "곱셈 곱하기 x",
        "example": "가로 × 세로",
        "inputHint": "Windows Alt+0215 (서유럽 코드페이지 기준) · Word: U+00D7 입력 → Alt+X"
      },
      {
        "symbol": "÷",
        "desc": "나누기",
        "aliases": "나눗셈",
        "example": "10 ÷ 2",
        "inputHint": "Windows Alt+0247 (서유럽 코드페이지 기준) · Word: U+00F7 입력 → Alt+X"
      },
      {
        "symbol": "≠",
        "desc": "같지 않음",
        "aliases": "다름 not equal",
        "example": "a ≠ b",
        "inputHint": "Word: U+2260 입력 → Alt+X"
      },
      {
        "symbol": "≤",
        "desc": "작거나 같음",
        "aliases": "이하",
        "example": "x ≤ 10",
        "inputHint": "Word: U+2264 입력 → Alt+X"
      },
      {
        "symbol": "≥",
        "desc": "크거나 같음",
        "aliases": "이상",
        "example": "x ≥ 10",
        "inputHint": "Word: U+2265 입력 → Alt+X"
      }
    ]
  },
  {
    "category": "ㅁ + 한자",
    "label": "표시 · 화살표",
    "note": "ㅁ을 입력한 뒤 한자 키. 체크 ✓·☑는 아래 복사 항목을 이용하세요.",
    "items": [
      {
        "symbol": "※",
        "desc": "참고 표시",
        "aliases": "주의 참조 당구장",
        "example": "추가 설명 앞에",
        "inputHint": "Word: U+203B 입력 → Alt+X"
      },
      {
        "symbol": "○",
        "desc": "빈 원",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "●",
        "desc": "검은 원",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "□",
        "desc": "빈 네모",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "■",
        "desc": "검은 네모",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "☆",
        "desc": "빈 별",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "★",
        "desc": "검은 별",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "→",
        "desc": "오른쪽 화살표",
        "aliases": "방향 순서 우측",
        "example": "입력 → 출력",
        "inputHint": "Word: U+2192 입력 → Alt+X"
      },
      {
        "symbol": "←",
        "desc": "왼쪽 화살표",
        "aliases": "방향 좌측",
        "example": "되돌아가는 방향",
        "inputHint": "Word: U+2190 입력 → Alt+X"
      },
      {
        "symbol": "↑",
        "desc": "위쪽 화살표",
        "aliases": "증가 상승",
        "example": "온도 상승",
        "inputHint": "Word: U+2191 입력 → Alt+X"
      },
      {
        "symbol": "↓",
        "desc": "아래쪽 화살표",
        "aliases": "감소 하강",
        "example": "온도 하강",
        "inputHint": "Word: U+2193 입력 → Alt+X"
      },
      {
        "symbol": "↔",
        "desc": "양방향 화살표",
        "aliases": "",
        "example": "",
        "inputHint": ""
      }
    ]
  },
  {
    "category": "ㄱ + 한자",
    "label": "문장 부호",
    "note": "ㄱ을 입력한 뒤 한자 키. ／는 전각 슬래시로 일반 /와 다른 문자입니다. 입력칸 제한을 항상 해결하는 것은 아닙니다.",
    "items": [
      {
        "symbol": "·",
        "desc": "가운뎃점",
        "aliases": "구분 점 중점",
        "example": "설계·제작·설치",
        "inputHint": "Windows Alt+0183 (서유럽 코드페이지 기준) · Word: U+00B7 입력 → Alt+X"
      },
      {
        "symbol": "…",
        "desc": "말줄임표",
        "aliases": "",
        "example": "",
        "inputHint": ""
      },
      {
        "symbol": "／",
        "desc": "전각 슬래시",
        "aliases": "",
        "example": "",
        "inputHint": ""
      }
    ]
  },
  {
    "category": "직접 입력",
    "label": "일반 단위",
    "note": "기호를 누르면 복사됩니다. 자세한 Alt 코드와 예시는 설명을 펼쳐 확인하세요.",
    "items": [
      {
        "symbol": "°C",
        "desc": "섭씨",
        "aliases": "온도 도씨 섭씨 ℃",
        "example": "25 °C",
        "inputHint": "Alt+0176으로 ° 입력 후 C (Windows 지원 앱)"
      },
      {
        "symbol": "°F",
        "desc": "화씨",
        "aliases": "온도 화씨 ℉",
        "example": "77 °F",
        "inputHint": "Alt+0176으로 ° 입력 후 F (Windows 지원 앱)"
      },
      {
        "symbol": "m²",
        "desc": "제곱미터",
        "aliases": "면적 평방미터 제곱",
        "example": "10 m²",
        "inputHint": "단위 문자 입력 후 Alt+0178로 ² (서유럽 코드페이지 기준)"
      },
      {
        "symbol": "m³",
        "desc": "세제곱미터",
        "aliases": "부피 입방미터 세제곱",
        "example": "2 m³",
        "inputHint": "³: Alt+0179 (서유럽 코드페이지 기준) · 나머지는 일반 입력"
      },
      {
        "symbol": "mm²",
        "desc": "제곱밀리미터",
        "aliases": "전선 단면적",
        "example": "2.5 mm²",
        "inputHint": "단위 문자 입력 후 Alt+0178로 ² (서유럽 코드페이지 기준)"
      },
      {
        "symbol": "µm",
        "desc": "마이크로미터",
        "aliases": "미크론 마이크론 μm",
        "example": "10 µm",
        "inputHint": "µ: Alt+0181 (서유럽 코드페이지 기준) · m은 일반 입력"
      },
      {
        "symbol": "m³/h",
        "desc": "시간당 세제곱미터",
        "aliases": "유량 풍량 루베",
        "example": "100 m³/h",
        "inputHint": "³: Alt+0179 (서유럽 코드페이지 기준) · 나머지는 일반 입력"
      },
      {
        "symbol": "L/min",
        "desc": "분당 리터",
        "aliases": "유량 리터",
        "example": "20 L/min",
        "inputHint": "키보드로 그대로 입력 · 대소문자 구분"
      },
      {
        "symbol": "MPa",
        "desc": "메가파스칼",
        "aliases": "압력 mpa",
        "example": "1 MPa",
        "inputHint": "키보드로 그대로 입력 · 대소문자 구분"
      },
      {
        "symbol": "kW",
        "desc": "킬로와트",
        "aliases": "전력 용량 kw",
        "example": "5 kW",
        "inputHint": "키보드로 그대로 입력 · 대소문자 구분"
      },
      {
        "symbol": "V",
        "desc": "볼트",
        "aliases": "전압 volt",
        "example": "220 V",
        "inputHint": "키보드로 그대로 입력 · 대소문자 구분"
      }
    ]
  },
  {
    "category": "클릭해서 복사",
    "label": "체크 · 지름 · 기타",
    "note": "기호를 누르면 복사됩니다. 자세한 Alt 코드와 예시는 설명을 펼쳐 확인하세요.",
    "items": [
      {
        "symbol": "⌀",
        "desc": "지름 기호",
        "aliases": "파이 직경 diameter",
        "example": "⌀25 · 지름을 뜻하는 전용 기호",
        "inputHint": "Word: U+2300 입력 → Alt+X · AutoCAD 지름: %%c"
      },
      {
        "symbol": "°",
        "desc": "도 · 각도",
        "aliases": "각도 degree",
        "example": "90°",
        "inputHint": "Windows Alt+0176 (서유럽 코드페이지 기준) · Word: U+00B0 입력 → Alt+X"
      },
      {
        "symbol": "≈",
        "desc": "거의 같음",
        "aliases": "약 근사",
        "example": "π ≈ 3.14",
        "inputHint": "Word: U+2248 입력 → Alt+X"
      },
      {
        "symbol": "✓",
        "desc": "체크 표시",
        "aliases": "브이 V 완료 확인",
        "example": "완료한 항목",
        "inputHint": "Word: U+2713 입력 → Alt+X"
      },
      {
        "symbol": "☑",
        "desc": "체크된 네모",
        "aliases": "체크박스 선택 완료",
        "example": "선택한 항목",
        "inputHint": "Word: U+2611 입력 → Alt+X"
      },
      {
        "symbol": "☐",
        "desc": "빈 체크박스",
        "aliases": "네모 미완료",
        "example": "확인할 항목",
        "inputHint": "Word: U+2610 입력 → Alt+X"
      },
      {
        "symbol": "•",
        "desc": "글머리표",
        "aliases": "목록 점 불릿",
        "example": "목록 항목 앞에",
        "inputHint": "Windows Alt+0149 (서유럽 코드페이지 기준) · Word: U+2022 입력 → Alt+X"
      },
      {
        "symbol": "⁄",
        "desc": "분수용 빗금",
        "aliases": "분수 슬래시 slash /",
        "example": "1⁄2처럼 사용 · 일반 /와 다른 문자. 입력칸 허용 여부 확인",
        "inputHint": "Word: U+2044 → Alt+X"
      }
    ]
  }
];
(() => {
    const grid = document.getElementById('shortcutGrid');
    const search = document.getElementById('searchInput');
    const status = document.getElementById('copyStatus');
    const manual = document.getElementById('manualCopy');
    const copyText = document.getElementById('copyText');
    search.placeholder = '검색: ㄹ, 분수, 파이, 체크, Alt…';
    search.setAttribute('aria-label', '입력키·특수문자 검색');
    const fullDescription = item => item.desc + (item.example || '') + (item.inputHint || '');
    // Preserve previously saved favorites when moving symbols into input-method groups.
    try {
        const key = 'favorite-shortcuts:symbols.html';
        const saved = JSON.parse(localStorage.getItem(key) || '[]');
        if (Array.isArray(saved)) {
            const migrated = saved.map(value => {
                try {
                    const [, description] = JSON.parse(value);
                    for (const group of symbolMethods) {
                        const item = group.items.find(item => fullDescription(item) === description);
                        if (item) return JSON.stringify([group.category, description]);
                    }
                } catch (_) { /* Leave unrelated entries intact. */ }
                return value;
            });
            localStorage.setItem(key, JSON.stringify([...new Set(migrated)]));
        }
    } catch (_) { /* The shared favorites control reports storage failures. */ }
    const make = (tag, className, text) => {
        const element = document.createElement(tag);
        element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    };
    function render() {
        const query = search.value.trim().toLowerCase();
        const cards = [];
        for (const group of symbolMethods) {
            const items = group.items.filter(item => [group.category, group.label, item.symbol, item.desc, item.aliases, item.example, item.inputHint].join(' ').toLowerCase().includes(query));
            if (!items.length) continue;
            const card = make('section', 'card method-row');
            const heading = make('div', 'method-heading');
            heading.append(make('h2', '', group.category), make('p', '', group.label));
            const content = make('div', 'method-content');
            const list = make('ul', 'shortcut-list symbol-strip');
            for (const item of items) {
                const row = make('li', 'shortcut-item symbol-chip');
                row.append(make('span', 'desc symbol-sr-only', fullDescription(item)));
                const button = make('button', 'symbol-copy', item.symbol);
                button.type = 'button';
                button.dataset.symbol = item.symbol;
                button.setAttribute('aria-label', item.desc + ' 복사: ' + item.symbol);
                button.title = item.desc + (item.inputHint ? '\n' + item.inputHint : '');
                row.append(button);
                list.append(row);
            }
            const details = make('details', 'method-details');
            details.append(make('summary', '', '설명·입력 코드'), make('p', '', group.note));
            const notes = make('ul', 'method-notes');
            for (const item of items) {
                notes.append(make('li', '', item.symbol + ' — ' + item.desc + (item.inputHint ? ' · ' + item.inputHint : '')));
            }
            details.append(notes);
            content.append(list, details);
            card.append(heading, content);
            cards.push(card);
        }
        grid.replaceChildren(...cards);
    }
    document.addEventListener('click', async event => {
        const button = event.target.closest('.symbol-copy');
        if (!button || button.disabled) return;
        button.disabled = true;
        manual.hidden = true;
        const symbol = button.dataset.symbol;
        try {
            if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
            await navigator.clipboard.writeText(symbol);
            status.textContent = symbol + ' 복사했습니다.';
        } catch (_) {
            copyText.value = symbol;
            manual.hidden = false;
            copyText.focus();
            copyText.select();
            status.textContent = '선택된 문자를 직접 복사하세요.';
        } finally { button.disabled = false; }
    });
    copyText.addEventListener('click', () => copyText.select());
    search.addEventListener('input', render);
    window.addEventListener('keydown', event => {
        if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input, textarea, [contenteditable]')) {
            event.preventDefault();
            search.focus();
        }
    });
    render();
})();
