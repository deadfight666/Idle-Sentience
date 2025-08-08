function generateFocus() {
    layers.focus.value = layers.focus.value + 50;
    resetLayer("link");
    updateUI();
}