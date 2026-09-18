const symbolGroups = [
  {
    "category": "지름 · 파이 · 도면",
    "icon": "📐",
    "color": "#6d28d9",
    "items": [
      {
        "symbol": "⌀",
        "desc": "지름 기호",
        "aliases": "파이 직경 diameter",
        "example": "⌀25 · 지름을 뜻하는 전용 기호",
        "inputHint": "Word: U+2300 입력 → Alt+X · AutoCAD 지름: %%c"
      },
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
      },
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
        "symbol": "°",
        "desc": "도 · 각도",
        "aliases": "각도 degree",
        "example": "90°",
        "inputHint": "Windows Alt+0176 (서유럽 코드페이지 기준) · Word: U+00B0 입력 → Alt+X"
      },
      {
        "symbol": "±",
        "desc": "플러스마이너스 · 공차",
        "aliases": "공차 오차 plus minus",
        "example": "25 ± 0.1",
        "inputHint": "Windows Alt+0177 (서유럽 코드페이지 기준) · Word: U+00B1 입력 → Alt+X"
      }
    ]
  },
  {
    "category": "온도 · 면적 · 부피",
    "icon": "🌡️",
    "color": "#6d28d9",
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
      }
    ]
  },
  {
    "category": "설비 · 전기 단위",
    "icon": "⚡",
    "color": "#6d28d9",
    "items": [
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
    "category": "계산 · 비교",
    "icon": "➗",
    "color": "#6d28d9",
    "items": [
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
      },
      {
        "symbol": "≠",
        "desc": "같지 않음",
        "aliases": "다름 not equal",
        "example": "a ≠ b",
        "inputHint": "Word: U+2260 입력 → Alt+X"
      },
      {
        "symbol": "≈",
        "desc": "거의 같음",
        "aliases": "약 근사",
        "example": "π ≈ 3.14",
        "inputHint": "Word: U+2248 입력 → Alt+X"
      }
    ]
  },
  {
    "category": "체크 · 문서 표시",
    "icon": "✓",
    "color": "#6d28d9",
    "items": [
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
        "symbol": "※",
        "desc": "참고 표시",
        "aliases": "주의 참조 당구장",
        "example": "추가 설명 앞에",
        "inputHint": "Word: U+203B 입력 → Alt+X"
      },
      {
        "symbol": "•",
        "desc": "글머리표",
        "aliases": "목록 점 불릿",
        "example": "목록 항목 앞에",
        "inputHint": "Windows Alt+0149 (서유럽 코드페이지 기준) · Word: U+2022 입력 → Alt+X"
      },
      {
        "symbol": "·",
        "desc": "가운뎃점",
        "aliases": "구분 점 중점",
        "example": "설계·제작·설치",
        "inputHint": "Windows Alt+0183 (서유럽 코드페이지 기준) · Word: U+00B7 입력 → Alt+X"
      }
    ]
  },
  {
    "category": "방향 · 위아래 첨자",
    "icon": "↔",
    "color": "#6d28d9",
    "items": [
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
        "symbol": "²",
        "desc": "위첨자 2",
        "aliases": "제곱 지수",
        "example": "x²",
        "inputHint": "Windows Alt+0178 (서유럽 코드페이지 기준) · Word: U+00B2 입력 → Alt+X"
      },
      {
        "symbol": "₃",
        "desc": "아래첨자 3",
        "aliases": "화학식 냉매 암모니아",
        "example": "NH₃",
        "inputHint": "Word: U+2083 입력 → Alt+X"
      },
      {
        "symbol": "³",
        "desc": "위첨자 3",
        "aliases": "세제곱 지수",
        "example": "m³",
        "inputHint": "Windows Alt+0179 (서유럽 코드페이지 기준) · Word: U+00B3 입력 → Alt+X"
      },
      {
        "symbol": "₂",
        "desc": "아래첨자 2",
        "aliases": "화학식 이산화탄소",
        "example": "CO₂",
        "inputHint": "Word: U+2082 입력 → Alt+X"
      }
    ]
  },
  {
    "category": "분수 · 슬래시 대용",
    "icon": "½",
    "color": "#0f766e",
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
        "symbol": "⁄",
        "desc": "분수용 빗금",
        "aliases": "분수 슬래시 slash /",
        "example": "1⁄2처럼 사용 · 일반 /와 다른 문자. 입력칸 허용 여부 확인",
        "inputHint": "Word: U+2044 → Alt+X"
      }
    ]
  }
];
const siRuleGroups = [
  {
    "category": "SI · 대소문자와 접두어",
    "icon": "🔤",
    "color": "#0369a1",
    "items": [
      {
        "desc": "킬로와트는 kW",
        "aliases": "KW kw 킬로 와트 전력",
        "example": "k는 kilo(10³), W는 watt. 5 kW로 씁니다. KW·kw·Kw는 피하세요."
      },
      {
        "desc": "접두어는 단위에 붙이기",
        "aliases": "접두사 접두어 띄어쓰기 공백",
        "example": "kW, mm, MPa처럼 붙입니다. k W, m m처럼 나누지 않습니다."
      },
      {
        "desc": "m과 M은 다릅니다",
        "aliases": "밀리 메가 마이크로 킬로 대소문자",
        "example": "m = 10⁻³, µ = 10⁻⁶, k = 10³, M = 10⁶, G = 10⁹. mW와 MW는 10⁹배 차이입니다."
      },
      {
        "desc": "단위 기호의 대소문자 유지",
        "aliases": "파스칼 볼트 암페어 헤르츠",
        "example": "m, s, kg는 소문자. W, V, A, Pa, Hz는 정해진 대소문자를 그대로 씁니다."
      }
    ]
  },
  {
    "category": "SI · 띄어쓰기와 온도",
    "icon": "🌡️",
    "color": "#0369a1",
    "items": [
      {
        "desc": "숫자와 단위 사이 한 칸",
        "aliases": "공백 띄어쓰기 퍼센트 %",
        "example": "5 kW, 220 V, 25 °C, 50 %처럼 숫자와 기호 사이를 띕니다."
      },
      {
        "desc": "각도의 °는 예외",
        "aliases": "각도 도 섭씨 온도",
        "example": "각도는 90°처럼 붙입니다. 섭씨는 25 °C처럼 숫자 뒤를 띄우되 °와 C는 붙입니다."
      },
      {
        "desc": "켈빈은 K, °K가 아닙니다",
        "aliases": "절대온도 켈빈 kelvin",
        "example": "300 K로 씁니다. 온도 차이 1 K는 1 °C와 크기가 같지만, 0 °C = 273.15 K입니다."
      }
    ]
  },
  {
    "category": "SI · 제곱과 복합 단위",
    "icon": "📐",
    "color": "#0369a1",
    "items": [
      {
        "desc": "제곱·세제곱은 접두어까지 적용",
        "aliases": "위첨자 제곱 세제곱 면적 부피",
        "example": "1 cm² = 10⁻⁴ m², 1 cm³ = 10⁻⁶ m³. cm²는 (cm)²입니다."
      },
      {
        "desc": "단위의 곱은 공백 또는 가운데 점",
        "aliases": "곱셈 토크 뉴턴미터 Nm",
        "example": "N m 또는 N·m로 씁니다. ms는 밀리초이고, m s는 미터와 초의 곱입니다."
      },
      {
        "desc": "나눗셈의 분모는 분명하게",
        "aliases": "슬래시 나누기 유량 속도",
        "example": "m/s, m³/h처럼 씁니다. W/m/K 대신 W/(m·K) 또는 W m⁻¹ K⁻¹로 씁니다."
      },
      {
        "desc": "기호에 복수형·약어 마침표를 붙이지 않기",
        "aliases": "복수 s sec cc 초",
        "example": "5 kg, 10 s, 2 cm³로 씁니다. 5 kgs, 10 sec, 2 cc는 피합니다. 문장 끝 마침표는 별개입니다."
      },
      {
        "desc": "리터·분·시간은 SI와 함께 사용 가능",
        "aliases": "리터 L l min h 비SI",
        "example": "L(또는 l), min, h는 SI 자체의 단위는 아니지만 SI와 함께 쓰도록 허용됩니다. 20 L/min처럼 표기합니다."
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
    search.placeholder = '검색: SI, kW, 띄어쓰기, 파이, 체크…';
    search.setAttribute('aria-label', '특수문자·SI 규칙 검색');

    function render() {
        const query = search.value.trim().toLowerCase();
        const cards = [];
        [...siRuleGroups, ...symbolGroups].forEach(group => {
            const items = group.items.filter(item => [group.category, item.symbol, item.desc, item.aliases, item.example, item.inputHint].join(' ').toLowerCase().includes(query));
            if (!items.length) return;
            const card = document.createElement('section');
            card.className = 'card';
            card.style.setProperty('--accent-color', group.color);
            const heading = document.createElement('div');
            heading.className = 'card-header';
            const icon = document.createElement('span');
            icon.className = 'icon';
            icon.textContent = group.icon;
            const title = document.createElement('h2');
            title.textContent = group.category;
            heading.append(icon, title);
            const list = document.createElement('ul');
            list.className = 'shortcut-list';
            items.forEach(item => {
                const row = document.createElement('li');
                row.className = 'shortcut-item';
                const description = document.createElement('span');
                description.className = 'desc';
                const name = document.createElement('strong');
                name.textContent = item.desc;
                const example = document.createElement('small');
                example.textContent = item.example;
                description.append(name, example);
                if (item.inputHint) {
                    const hint = document.createElement("small");
                    hint.className = "input-hint";
                    hint.textContent = item.inputHint;
                    description.append(hint);
                }
                row.append(description);
                if (item.symbol) {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'symbol-copy';
                button.textContent = item.symbol;
                button.dataset.symbol = item.symbol;
                button.setAttribute('aria-label', item.desc + ' 복사: ' + item.symbol);
                button.title = item.symbol + ' 복사';
                row.append(button);
                }
                list.append(row);
            });
            card.append(heading, list);
            cards.push(card);
        });
        grid.replaceChildren(...cards);
    }

    grid.addEventListener('click', async event => {
        const button = event.target.closest('.symbol-copy');
        if (!button || button.disabled) return;
        const symbol = button.dataset.symbol;
        button.disabled = true;
        manual.hidden = true;
        try {
            if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
            await navigator.clipboard.writeText(symbol);
            status.textContent = symbol + ' 복사했습니다. 원하는 곳에 붙여넣으세요.';
        } catch (_) {
            copyText.value = symbol;
            manual.hidden = false;
            copyText.focus();
            copyText.select();
            status.textContent = '자동 복사를 사용할 수 없습니다. 아래 선택된 문자를 직접 복사하세요.';
        } finally {
            button.disabled = false;
        }
    });
    copyText.addEventListener('click', () => copyText.select());
    search.addEventListener('input', render);
    document.querySelectorAll('[data-symbol-filter]').forEach(button => {
        button.addEventListener('click', () => {
            search.value = button.dataset.symbolFilter;
            render();
            search.focus();
        });
    });
    window.addEventListener('keydown', event => {
        if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input, textarea, [contenteditable]')) {
            event.preventDefault();
            search.focus();
        }
    });
    render();
})();
