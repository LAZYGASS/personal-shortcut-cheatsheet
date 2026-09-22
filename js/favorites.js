// 자주 쓰는 항목 즐겨찾기 (별표 클릭 → 강조 + 브라우저에 저장)
// 모든 페이지 공통. 페이지별 렌더 코드를 건드리지 않고 동작합니다.
(function () {
    const pageKey = (location.pathname.split('/').pop() || 'index').replace('.html', '');
    const storeKey = 'favShortcuts::' + pageKey;

    function load() {
        try {
            return new Set(JSON.parse(localStorage.getItem(storeKey)) || []);
        } catch (e) {
            return new Set();
        }
    }

    function save(set) {
        localStorage.setItem(storeKey, JSON.stringify([...set]));
    }

    const favs = load();

    function decorate(li) {
        if (li.dataset.favReady) return;
        li.dataset.favReady = '1';

        const descEl = li.querySelector('.desc');
        if (!descEl) return;
        const id = descEl.textContent.trim();

        const wrap = document.createElement('div');
        wrap.className = 'desc-wrap';

        const star = document.createElement('button');
        star.className = 'fav-star';
        star.type = 'button';
        star.title = '자주 쓰는 항목으로 표시';
        star.setAttribute('aria-label', '자주 쓰는 항목으로 표시');
        star.textContent = '★';

        li.insertBefore(wrap, li.firstChild);
        wrap.appendChild(star);
        wrap.appendChild(descEl);

        if (favs.has(id)) li.classList.add('favorited');

        star.addEventListener('click', function () {
            if (favs.has(id)) {
                favs.delete(id);
                li.classList.remove('favorited');
            } else {
                favs.add(id);
                li.classList.add('favorited');
            }
            save(favs);
        });
    }

    function scan() {
        document.querySelectorAll('.shortcut-item').forEach(decorate);
    }

    const grid = document.getElementById('shortcutGrid');
    if (grid) {
        // 검색 시 재렌더링되면 새 항목에도 별표를 다시 붙임
        new MutationObserver(scan).observe(grid, { childList: true, subtree: true });
    }

    scan();
})();
