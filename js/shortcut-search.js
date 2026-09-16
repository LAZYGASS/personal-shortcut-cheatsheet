// Keep descriptions and literal symbols searchable; normalize only key combinations.
function matchesShortcut(item, category, filter) {
    const query = filter.trim().toLowerCase();
    if (!query) return true;
    const keys = item.keys.join(' ').toLowerCase();
    if ([item.desc, category, keys].some(text => text.toLowerCase().includes(query))) return true;
    // A plus between key names is a separator. A trailing + remains a literal key.
    const normalize = text => text.replace(/\s*\+\s*(?=[\p{L}\p{N}+])/gu, ' ').replace(/\s+/g, ' ').trim();
    return normalize(keys).includes(normalize(query));
}
