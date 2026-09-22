const symbolInputMethods = [
  {
    "symbol": "⌀",
    "name": "지름",
    "word": "U+2300 → Alt+X",
    "sheets": "기호 복사 → 셀에 붙여넣기",
    "cad": "%%c (지름 표시)",
    "aliases": "파이 직경"
  },
  {
    "symbol": "Ø",
    "name": "빗금 O",
    "word": "U+00D8 → Alt+X",
    "sheets": "ㄲ → 한자 → Ø",
    "cad": "\\U+00D8",
    "aliases": "파이 직경"
  },
  {
    "symbol": "ø",
    "name": "빗금 o",
    "word": "U+00F8 → Alt+X",
    "sheets": "ㄲ → 한자 → ø",
    "cad": "\\U+00F8",
    "aliases": "파이 직경"
  },
  {
    "symbol": "Φ",
    "name": "피(phi)",
    "word": "U+03A6 → Alt+X",
    "sheets": "ㅎ → 한자 → Φ",
    "cad": "\\U+03A6",
    "aliases": "파이 직경"
  },
  {
    "symbol": "π",
    "name": "파이(pi)",
    "word": "U+03C0 → Alt+X",
    "sheets": "ㅎ → 한자 → π",
    "cad": "\\U+03C0",
    "aliases": "파이 직경"
  },
  {
    "symbol": "Ω",
    "name": "오메가",
    "word": "U+03A9 → Alt+X",
    "sheets": "ㅎ → 한자 → Ω",
    "cad": "\\U+03A9",
    "aliases": ""
  },
  {
    "symbol": "²",
    "name": "위첨자 2",
    "word": "U+00B2 → Alt+X",
    "sheets": "ㅊ → 한자 → ²",
    "cad": "\\U+00B2",
    "aliases": ""
  },
  {
    "symbol": "³",
    "name": "위첨자 3",
    "word": "U+00B3 → Alt+X",
    "sheets": "ㅊ → 한자 → ³",
    "cad": "\\U+00B3",
    "aliases": ""
  },
  {
    "symbol": "₂",
    "name": "아래첨자 2",
    "word": "U+2082 → Alt+X",
    "sheets": "ㅊ → 한자 → ₂",
    "cad": "\\U+2082",
    "aliases": ""
  },
  {
    "symbol": "₃",
    "name": "아래첨자 3",
    "word": "U+2083 → Alt+X",
    "sheets": "ㅊ → 한자 → ₃",
    "cad": "\\U+2083",
    "aliases": ""
  },
  {
    "symbol": "½",
    "name": "2분의 1",
    "word": "U+00BD → Alt+X",
    "sheets": "ㅊ → 한자 → ½",
    "cad": "\\U+00BD",
    "aliases": "분수"
  },
  {
    "symbol": "¼",
    "name": "4분의 1",
    "word": "U+00BC → Alt+X",
    "sheets": "ㅊ → 한자 → ¼",
    "cad": "\\U+00BC",
    "aliases": "분수"
  },
  {
    "symbol": "¾",
    "name": "4분의 3",
    "word": "U+00BE → Alt+X",
    "sheets": "ㅊ → 한자 → ¾",
    "cad": "\\U+00BE",
    "aliases": "분수"
  },
  {
    "symbol": "⅓",
    "name": "3분의 1",
    "word": "U+2153 → Alt+X",
    "sheets": "ㅊ → 한자 → ⅓",
    "cad": "\\U+2153",
    "aliases": "분수"
  },
  {
    "symbol": "⅔",
    "name": "3분의 2",
    "word": "U+2154 → Alt+X",
    "sheets": "ㅊ → 한자 → ⅔",
    "cad": "\\U+2154",
    "aliases": "분수"
  },
  {
    "symbol": "°",
    "name": "도 기호",
    "word": "U+00B0 → Alt+X",
    "sheets": "기호 복사 또는 Windows Alt+0176",
    "cad": "%%d",
    "aliases": ""
  },
  {
    "symbol": "°C",
    "name": "섭씨 표기",
    "word": "U+00B0 → Alt+X → C",
    "sheets": "° 복사 후 C 입력",
    "cad": "%%dC",
    "aliases": ""
  },
  {
    "symbol": "±",
    "name": "플러스마이너스",
    "word": "U+00B1 → Alt+X",
    "sheets": "ㄷ → 한자 → ±",
    "cad": "%%p",
    "aliases": ""
  },
  {
    "symbol": "m²",
    "name": "제곱미터",
    "word": "m 입력 → U+00B2 → Alt+X",
    "sheets": "m 입력 → ㅊ → 한자 → ²",
    "cad": "m\\U+00B2",
    "aliases": ""
  },
  {
    "symbol": "m³",
    "name": "세제곱미터",
    "word": "m 입력 → U+00B3 → Alt+X",
    "sheets": "m 입력 → ㅊ → 한자 → ³",
    "cad": "m\\U+00B3",
    "aliases": ""
  },
  {
    "symbol": "kW",
    "name": "킬로와트",
    "word": "kW 그대로 입력",
    "sheets": "kW 그대로 입력",
    "cad": "kW 그대로 입력",
    "aliases": ""
  },
  {
    "symbol": "✓",
    "name": "체크",
    "word": "U+2713 → Alt+X",
    "sheets": "기호 복사 → 셀에 붙여넣기",
    "cad": "\\U+2713 (지원 글꼴 필요)",
    "aliases": ""
  }
];
(() => {
    const grid = document.getElementById('shortcutGrid');
    const panel = document.getElementById('inputMethodsPanel');
    const rows = document.getElementById('inputMethodsRows');
    const search = document.getElementById('searchInput');
    const empty = document.getElementById('inputMethodsEmpty');
    const tabs = [...document.querySelectorAll('[data-symbol-view]')];
    function render() {
        const query = search.value.trim().toLowerCase();
        const filtered = symbolInputMethods.filter(item => Object.values(item).join(' ').toLowerCase().includes(query));
        rows.replaceChildren(...filtered.map(item => {
            const row = document.createElement('tr');
            const name = document.createElement('th');
            name.scope = 'row';
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'symbol-copy';
            button.dataset.symbol = item.symbol;
            button.textContent = item.symbol;
            button.setAttribute('aria-label', item.name + ' 복사: ' + item.symbol);
            const label = document.createElement('span');
            label.textContent = item.name;
            name.append(button, label);
            row.append(name);
            for (const [key, title] of [['word', 'Word'], ['sheets', 'Excel · Google Sheets'], ['cad', 'AutoCAD']]) {
                const cell = document.createElement('td');
                cell.dataset.label = title;
                cell.textContent = item[key];
                row.append(cell);
            }
            return row;
        }));
        empty.hidden = filtered.length !== 0;
    }
    function select(tab) {
        const methods = tab.dataset.symbolView === 'methods';
        grid.hidden = methods;
        panel.hidden = !methods;
        document.body.classList.toggle('input-methods-view', methods);
        tabs.forEach(item => {
            item.setAttribute('aria-selected', String(item === tab));
            item.tabIndex = item === tab ? 0 : -1;
        });
        search.placeholder = methods ? '입력법 검색: 분수, Word, CAD, ㅊ…' : '검색: ㄹ, 분수, 파이, 체크, Alt…';
        render();
    }
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => select(tab));
        tab.addEventListener('keydown', event => {
            if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
            event.preventDefault();
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
            select(tabs[next]);
            tabs[next].focus();
        });
    });
    search.addEventListener('input', render);
    render();
})();
