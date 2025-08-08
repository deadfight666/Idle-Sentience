function generatePattern() {
    layers.pattern.value = layers.pattern.value + 50;
    resetLayer("reaction");
    updateUI();
}