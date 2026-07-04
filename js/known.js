/*
 * known.js — "내가 아는 단축키" 표시/숨기기 기능 (공용)
 *
 * - 각 단축키 줄에 토글 버튼을 주입해 '아는 것'으로 표시할 수 있게 함
 * - 아는 것은 흐리게 처리하고, 헤더 버튼으로 완전히 숨길 수도 있음
 * - 상태는 localStorage에 페이지별로 저장 (엑셀/캐드 등 각각 따로 기억)
 * - 각 페이지 스크립트가 검색 시 grid.innerHTML을 다시 그리므로,
 *   MutationObserver로 다시 그릴 때마다 상태를 재적용함
 */
(function () {
    const grid = document.getElementById('shortcutGrid');
    if (!grid) return;

    // 페이지별 저장 키 (예: index.html, cad.html)
    const page = (location.pathname.split('/').pop() || 'index').replace(/\?.*$/, '');
    const STORE_KEY = 'known-shortcuts:' + page;
    const HIDE_KEY = 'known-hide-mode';

    // ── 상태 로드 ──────────────────────────────────────────────
    let known = new Set();
    try {
        const saved = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
        if (Array.isArray(saved)) known = new Set(saved);
    } catch (e) { /* 손상된 데이터 무시 */ }

    let hideMode = localStorage.getItem(HIDE_KEY) === '1';

    function save() {
        try {
            localStorage.setItem(STORE_KEY, JSON.stringify([...known]));
        } catch (e) { /* 저장 실패 무시 */ }
    }

    // 단축키 고유 식별자 = 카테고리 + 설명 (같은 페이지 내에서 안정적)
    function itemKey(li) {
        const card = li.closest('.card');
        const cat = card ? (card.querySelector('.card-header h2')?.textContent || '').trim() : '';
        const desc = (li.querySelector('.desc')?.textContent || '').trim();
        return cat + '|' + desc;
    }

    // ── 각 줄에 토글 버튼 주입 + 상태 반영 ─────────────────────
    function decorate() {
        grid.querySelectorAll('.shortcut-item').forEach(li => {
            const key = itemKey(li);
            li.dataset.knownKey = key;
            const isKnown = known.has(key);
            li.classList.toggle('known', isKnown);

            let btn = li.querySelector('.known-toggle');
            if (!btn) {
                btn = document.createElement('button');
                btn.className = 'known-toggle';
                btn.type = 'button';
                li.insertBefore(btn, li.firstChild);
            }
            btn.setAttribute('aria-pressed', isKnown ? 'true' : 'false');
            btn.title = isKnown ? '아는 단축키 (클릭해서 해제)' : '아는 단축키로 표시';
            btn.textContent = isKnown ? '✓' : '';
        });
    }

    function applyHideMode() {
        document.body.classList.toggle('hide-known', hideMode);
        if (hideBtn) {
            hideBtn.textContent = hideMode ? '👁️ 아는 것 보이기' : '🙈 아는 것 숨기기';
        }
    }

    // ── 토글 클릭 (이벤트 위임: 다시 그려도 유지됨) ────────────
    grid.addEventListener('click', (e) => {
        const btn = e.target.closest('.known-toggle');
        if (!btn) return;
        const li = btn.closest('.shortcut-item');
        if (!li) return;
        const key = li.dataset.knownKey || itemKey(li);
        if (known.has(key)) known.delete(key);
        else known.add(key);
        save();
        li.classList.toggle('known', known.has(key));
        btn.setAttribute('aria-pressed', known.has(key) ? 'true' : 'false');
        btn.textContent = known.has(key) ? '✓' : '';
        btn.title = known.has(key) ? '아는 단축키 (클릭해서 해제)' : '아는 단축키로 표시';
    });

    // ── 헤더 버튼 주입 ─────────────────────────────────────────
    let hideBtn = null;
    const actions = document.querySelector('.actions');
    if (actions) {
        hideBtn = document.createElement('button');
        hideBtn.type = 'button';
        hideBtn.className = 'known-hide-btn';
        hideBtn.style.cssText = 'padding: 8px 16px; border-radius: 8px; border: 1px solid #e2e8f0; background: white; cursor: pointer; font-size: 0.875rem; font-weight: 500; margin-right: 8px;';
        hideBtn.addEventListener('click', () => {
            hideMode = !hideMode;
            localStorage.setItem(HIDE_KEY, hideMode ? '1' : '0');
            applyHideMode();
        });
        actions.insertBefore(hideBtn, actions.firstChild);
    }

    // ── 초기 적용 + 다시 그릴 때마다 재적용 ────────────────────
    decorate();
    applyHideMode();

    const observer = new MutationObserver(() => {
        observer.disconnect();
        decorate();
        observer.observe(grid, { childList: true, subtree: true });
    });
    observer.observe(grid, { childList: true, subtree: true });
})();
