export function setCacheValue(key, value, expire=60) {
    localStorage.setItem(key, JSON.stringify({
        value: value,
        expireAt: Date.now() + (expire * 60 * 1000),
    }));
}

export function getCacheValue(key) {
    const rawData = localStorage.getItem(key);
    if (!rawData) return null;

    const data = JSON.parse(rawData);
    if (data.expireAt < Date.now()) {
        localStorage.removeItem(key);
        return null;
    }

    return data.value;
}