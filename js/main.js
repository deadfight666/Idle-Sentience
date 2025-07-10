let impulses = 0;
let max_impulses = 50;

function generateImpulse() {
    impulses++;
    updateDisplay()
}

function updateDisplay() {
    document.getElementById("impulseCount").textContent = "Impulses: " + impulses;
    setProgressBar(impulses, max_impulses)
}


function setProgressBar(current, max) {
    const progressBar = document.getElementById("mainProgress");
    let percent = Math.min((current / max) * 100, 100)
    progressBar.style.width = percent + "%";

    progressBar.style.backgroundColor = (percent >= 100) ? "#4b0082" : "limegreen";

    document.getElementById("progressBarLabel").textContent = `${current} / ${max}`;
}
