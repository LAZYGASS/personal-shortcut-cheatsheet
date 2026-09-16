// Favorites complement the existing search, known-item and category controls.
(function () {
    const grid = document.getElementById('shortcutGrid');
    const actions = document.querySelector('.actions');
    if (!grid || !actions) return;
    const page = location.pathname.split('/').pop() || 'index.html';
    const store = 'favorite-shortcuts:' + page;
    let favorites = new Set();
    let onlyFavorites = false;
    try {
        const saved = JSON.parse(localStorage.getItem(store) || '[]');
        if (Array.isArray(saved)) favorites = new Set(saved.filter(value => typeof value === 'string'));
        onlyFavorites = localStorage.getItem(store + ':only') === '1';
    } catch (_) { /* A blocked or damaged store must not prevent using the page. */ }

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'favorites-toggle utility-button';
    actions.append(toggle);
    const message = document.createElement('p');
    message.className = 'shortcut-empty';
    message.setAttribute('role', 'status');
    message.hidden = true;
    grid.after(message);
    const storageNotice = document.createElement('p');
    storageNotice.className = 'storage-notice';
    storageNotice.setAttribute('role', 'status');
    storageNotice.hidden = true;
    message.after(storageNotice);

    function save() {
        try {
            localStorage.setItem(store, JSON.stringify([...favorites]));
            localStorage.setItem(store + ':only', onlyFavorites ? '1' : '0');
        } catch (_) {
            storageNotice.textContent = '브라우저 저장이 제한되어 즐겨찾기는 이 페이지를 닫기 전까지만 유지됩니다.';
            storageNotice.hidden = false;
        }
    }

    function refresh() {
        const hideKnown = document.body.classList.contains('hide-known');
        let visible = 0;
        grid.querySelectorAll('.card').forEach(card => {
            let inCard = 0;
            const category = card.querySelector('h2')?.textContent.trim() || '';
            card.querySelectorAll('.shortcut-item').forEach(item => {
                const description = item.querySelector('.desc')?.textContent.trim() || '';
                const key = JSON.stringify([category, description]);
                item.dataset.favoriteKey = key;
                let star = item.querySelector('.favorite-star');
                if (!star) {
                    star = document.createElement('button');
                    star.type = 'button';
                    star.className = 'favorite-star';
                    item.prepend(star);
                }
                const selected = favorites.has(key);
                star.textContent = selected ? '★' : '☆';
                star.setAttribute('aria-pressed', String(selected));
                star.setAttribute('aria-label', description + (selected ? ' 즐겨찾기 해제' : ' 즐겨찾기 추가'));
                star.title = selected ? '즐겨찾기 해제' : '즐겨찾기 추가';
                item.classList.toggle('favorited', selected);
                item.hidden = onlyFavorites && !selected;
                if (!item.hidden && !(hideKnown && item.classList.contains('known'))) inCard++;
            });
            card.hidden = inCard === 0;
            visible += inCard;
        });
        toggle.textContent = onlyFavorites ? '★ 전체 항목 보기' : '☆ 즐겨찾기만 보기';
        toggle.setAttribute('aria-pressed', String(onlyFavorites));
        message.hidden = visible !== 0;
        message.textContent = onlyFavorites
            ? '표시할 즐겨찾기가 없습니다. 전체 항목 보기에서 별표를 선택하거나 검색·아는 것 숨기기를 해제하세요.'
            : '표시할 항목이 없습니다. 검색어를 바꾸거나 아는 것 숨기기를 해제하세요.';
    }

    grid.addEventListener('click', event => {
        const star = event.target.closest('.favorite-star');
        if (star) {
            const item = star.closest('.shortcut-item');
            const key = item.dataset.favoriteKey;
            if (favorites.has(key)) favorites.delete(key); else favorites.add(key);
            save();
            refresh();
            if (item.hidden) toggle.focus();
        } else if (event.target.closest('.known-toggle')) refresh();
    });
    toggle.addEventListener('click', () => {
        onlyFavorites = !onlyFavorites;
        save();
        refresh();
    });
    actions.addEventListener('click', event => {
        if (event.target.closest('.known-hide-btn')) refresh();
    });
    // Renderers replace grid children on search; row decorations do not trigger this observer.
    new MutationObserver(refresh).observe(grid, { childList: true });
    const search = document.getElementById('searchInput');
    if (search) {
        search.placeholder = '설명 또는 단축키 검색 (예: Ctrl+Shift)';
        search.setAttribute('aria-label', '설명 또는 단축키 검색');
    }
    refresh();
})();
