function generateReaction() {
    layers.reaction.value = layers.reaction.value + 50;
    resetLayer("impulse");
    updateUI();
}