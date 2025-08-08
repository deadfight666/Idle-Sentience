function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}
