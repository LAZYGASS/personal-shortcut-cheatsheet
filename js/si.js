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
    search.placeholder = 'SI 규칙 검색: kW, 띄어쓰기, 온도…';
    search.setAttribute('aria-label', 'SI 표기 규칙 검색');
    // Bring existing SI favorites across from the former combined symbols page.
    try {
        const old = JSON.parse(localStorage.getItem('favorite-shortcuts:symbols.html') || '[]');
        const current = JSON.parse(localStorage.getItem('favorite-shortcuts:si.html') || '[]');
        if (Array.isArray(old) && Array.isArray(current) && !localStorage.getItem('si-favorites-migrated')) {
            const si = old.filter(value => { try { return JSON.parse(value)[0].startsWith('SI ·'); } catch (_) { return false; } });
            localStorage.setItem('favorite-shortcuts:si.html', JSON.stringify([...new Set([...current, ...si])]));
            localStorage.setItem('si-favorites-migrated', '1');
        }
    } catch (_) { /* Continue without persistent favorites. */ }
    function render() {
        const query = search.value.trim().toLowerCase();
        const cards = [];
        for (const group of siRuleGroups) {
            const items = group.items.filter(item => [group.category, item.desc, item.aliases, item.example].join(' ').toLowerCase().includes(query));
            if (!items.length) continue;
            const card = document.createElement('section');
            card.className = 'card';
            const heading = document.createElement('div');
            heading.className = 'card-header';
            const title = document.createElement('h2');
            title.textContent = group.category;
            heading.append(title);
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
                row.append(description);
                list.append(row);
            });
            card.append(heading, list);
            cards.push(card);
        }
        grid.replaceChildren(...cards);
    }
    search.addEventListener('input', render);
    window.addEventListener('keydown', event => {
        if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input, textarea, [contenteditable]')) {
            event.preventDefault(); search.focus();
        }
    });
    render();
})();
