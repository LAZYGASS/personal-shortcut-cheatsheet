(function () {
    const store = 'cheatsheet-display-scale';
    let scale = 100;
    try {
        const saved = Number(localStorage.getItem(store));
        if (Number.isFinite(saved) && saved >= 60 && saved <= 200) scale = saved;
    } catch (_) { /* Use the default if storage is unavailable. */ }
    const surface = document.createElement('div');
    surface.className = 'app-surface';
    [...document.body.children].filter(el => el.tagName !== 'SCRIPT').forEach(el => surface.append(el));
    document.body.prepend(surface);
    const toolbar = document.createElement('div');
    toolbar.className = 'scale-toolbar';
    toolbar.setAttribute('role', 'group');
    toolbar.setAttribute('aria-label', '화면 배율');
    toolbar.innerHTML = '<span>화면</span><button type="button" data-scale="down" aria-label="화면 축소">−</button><output aria-live="polite"></output><button type="button" data-scale="up" aria-label="화면 확대">+</button><button type="button" data-scale="reset" aria-label="화면 배율 100% 복원">100%</button>';
    document.body.append(toolbar);
    const output = toolbar.querySelector('output');
    const notice = document.createElement('span');
    notice.className = 'scale-notice';
    notice.setAttribute('role', 'status');
    toolbar.append(notice);
    const supported = CSS.supports('zoom', '1');
    if (!supported) {
        toolbar.replaceChildren(document.createTextNode('화면 배율은 브라우저 메뉴의 확대/축소를 이용하세요.'));
        return;
    }

    function apply(persist = false) {
        surface.style.setProperty('--display-scale', scale / 100);
        surface.classList.toggle('compact-scale', innerWidth / (scale / 100) < 500);
        output.textContent = scale + '%';
        toolbar.querySelector('[data-scale="down"]').disabled = scale <= 60;
        toolbar.querySelector('[data-scale="up"]').disabled = scale >= 200;
        if (persist) {
            try { localStorage.setItem(store, String(scale)); }
            catch (_) { notice.textContent = '배율 저장 불가'; }
        }
    }
    function change(action) {
        scale = action === 'reset' ? 100 : Math.max(60, Math.min(200, scale + (action === 'up' ? 10 : -10)));
        apply(true);
    }
    toolbar.addEventListener('click', event => {
        const button = event.target.closest('[data-scale]');
        if (button) change(button.dataset.scale);
    });
    window.addEventListener('keydown', event => {
        if (!(event.ctrlKey || event.metaKey) || event.altKey) return;
        const action = ['+', '='].includes(event.key) ? 'up' : event.key === '-' ? 'down' : event.key === '0' ? 'reset' : null;
        if (!action) return;
        event.preventDefault(); // Apply one scale change instead of also triggering browser zoom.
        change(action);
    }, { capture: true });
    window.addEventListener('resize', () => apply());
    apply();
})();
