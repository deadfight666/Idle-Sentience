<<<<<<< Updated upstream
let impulses = 0;
let max_impulses = 50;

function generateImpulse() {
    impulses++;
    updateDisplay()
=======
const layers = {
    impulse: {color: "#4b0082", value: 0, milestones: [{goal: 50, triggered: false, id: 1}, {goal: 200, triggered: false, id: 2}]},
    reaction: {color: "#007fff", value: 0, milestones: [{goal: 50, triggered: false, id: 1}, {goal: 200, triggered: false, id: 2}]},
    pattern: {color: "#ffd300", value: 0, milestones: [{goal: 50, triggered: false, id: 1}, {goal: 200, triggered: false, id: 2}]},
    link: {color: "#ff0000", value: 0, milestones: [{goal: 50, triggered: false, id: 1}, {goal: 200, triggered: false, id: 2}]},
    focus: {color: "#ff7f00", value: 0, milestones: [{goal: 50, triggered: false, id: 1}, {goal: 200, triggered: false, id: 2}]},
    thought: {color: "#00ff00", value: 0, milestones: [{goal: 50, triggered: false, id: 1}, {goal: 200, triggered: false, id: 2}]},
}

const UIState = {
    impulseButtonVisible: true,
    impulseButtonEnabled: true,
    reactionButtonVisible: false,
    reactionButtonEnabled: false,
    patternButtonVisible: false,
    patternButtonEnabled: false,
    linkButtonVisible: false,
    linkButtonEnabled: false,
    focusButtonVisible: false,
    focusButtonEnabled: false,
    thoughtButtonVisible: false,
    thoughtButtonEnabled: false,

    impulseProgressBarVisible: true,
    reactionProgressBarVisible: false,
    patternProgressBarVisible: false,
    linkProgressBarVisible: false,
    focusProgressBarVisible: false,
    thoughtProgressBarVisible: false,

    impulseValueLabelVisible: true,
    reactionValueLabelVisible: false,
    patternValueLabelVisible: false,
    linkValueLabelVisible: false,
    focusValueLabelVisible: false,
    thoughtValueLabelVisible: false,

    impulseTabBarButtonVisible: true,
    reactionTabBarButtonVisible: false,
    patternTabBarButtonVisible: false,
    linkTabBarButtonVisible: false,
    focusTabBarButtonVisible: false,
    thoughtTabBarButtonVisible: false,
}

const defaultUIState = {
    impulseButtonVisible: true,
    impulseButtonEnabled: true,
    reactionButtonVisible: false,
    reactionButtonEnabled: false,
    patternButtonVisible: false,
    patternButtonEnabled: false,
    linkButtonVisible: false,
    linkButtonEnabled: false,
    focusButtonVisible: false,
    focusButtonEnabled: false,
    thoughtButtonVisible: false,
    thoughtButtonEnabled: false,

    impulseProgressBarVisible: true,
    reactionProgressBarVisible: false,
    patternProgressBarVisible: false,
    linkProgressBarVisible: false,
    focusProgressBarVisible: false,
    thoughtProgressBarVisible: false,

    impulseValueLabelVisible: true,
    reactionValueLabelVisible: false,
    patternValueLabelVisible: false,
    linkValueLabelVisible: false,
    focusValueLabelVisible: false,
    thoughtValueLabelVisible: false,

    impulseTabBarButtonVisible: true,
    reactionTabBarButtonVisible: false,
    patternTabBarButtonVisible: false,
    linkTabBarButtonVisible: false,
    focusTabBarButtonVisible: false,
    thoughtTabBarButtonVisible: false,
}
 
function init() {
    loadGame();
    updateUI();
    switchTab("impulse")
    setInterval(gameTick, 100);
>>>>>>> Stashed changes
}
 
function resetLayer(type) {
    layers[type].value = 0;
    layers[type].milestones.forEach(m => {
        m.triggered = false;
    })

    if (type === "impulse") {
        UIState.reactionButtonEnabled = false;
    }
    if (type === "reaction") {
        UIState.patternButtonEnabled = false;
    }
    if (type === "pattern") {
        UIState.linkButtonEnabled = false;
    }
    if (type === "link") {
        UIState.focusButtonEnabled = false;
    }
    if (type === "focus") {
        UIState.thoughtButtonEnabled = false;
    }
}

function switchTab(tabName) {
    document.querySelectorAll(".tab-content").forEach(el => {
        el.classList.remove("active");
    });
    document.getElementById(`tab${capitalize(tabName)}Content`).classList.add("active");
}


//-----------------------------------------------------------------------------------------------------------------------
//----TICK_EVENTS
//-----------------------------------------------------------------------------------------------------------------------

<<<<<<< Updated upstream
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
=======
function gameTick() {
    checkMilestones();
    updateUI();
}

function checkMilestones() {
    for (const type in layers) {
        const layer = layers[type];
        layer.milestones.forEach(m => {
            if (!m.triggered && layer.value >= m.goal) {
                m.triggered = true;
                handleMilestoneReward(type, m.id);
            }
        });
    }
}

function updateUI() {
    //Buttons
    const impulseButton = document.getElementById("impulseButton");
    impulseButton.style.display = UIState.impulseButtonVisible ? "inline-block" : "none";
    impulseButton.disabled = !UIState.impulseButtonEnabled;
    const reactionButton = document.getElementById("reactionButton");
    reactionButton.style.display = UIState.reactionButtonVisible ? "inline-block" : "none";
    reactionButton.disabled = !UIState.reactionButtonEnabled;
    const patternButton = document.getElementById("patternButton");
    patternButton.style.display = UIState.patternButtonVisible ? "inline-block" : "none";
    patternButton.disabled = !UIState.patternButtonEnabled;
    const linkButton = document.getElementById("linkButton");
    linkButton.style.display = UIState.linkButtonVisible ? "inline-block" : "none";
    linkButton.disabled = !UIState.linkButtonEnabled;
    const focusButton = document.getElementById("focusButton");
    focusButton.style.display = UIState.focusButtonVisible ? "inline-block" : "none";
    focusButton.disabled = !UIState.focusButtonEnabled;
    const thoughtButton = document.getElementById("thoughtButton");
    thoughtButton.style.display = UIState.thoughtButtonVisible ? "inline-block" : "none";
    thoughtButton.disabled = !UIState.thoughtButtonEnabled;

    //Progress-bars
    const impulseProgressBar = document.getElementById("impulseProgressContainer");
    impulseProgressBar.style.display = UIState.impulseProgressBarVisible ? "flex" : "none";
    const reactionProgressBar = document.getElementById("reactionProgressContainer");
    reactionProgressBar.style.display = UIState.reactionProgressBarVisible ? "flex" : "none";
    const patternProgressBar = document.getElementById("patternProgressContainer");
    patternProgressBar.style.display = UIState.patternProgressBarVisible ? "flex" : "none";
    const linkProgressBar = document.getElementById("linkProgressContainer");
    linkProgressBar.style.display = UIState.linkProgressBarVisible ? "flex" : "none";
    const focusProgressBar = document.getElementById("focusProgressContainer");
    focusProgressBar.style.display = UIState.focusProgressBarVisible ? "flex" : "none";
    const thoughtProgressBar = document.getElementById("thoughtProgressContainer");
    thoughtProgressBar.style.display = UIState.thoughtProgressBarVisible ? "flex" : "none";

    //Values-labels
    const impulseValueLabel = document.getElementById("impulseValueLabel");
    impulseValueLabel.style.display = UIState.impulseValueLabelVisible ? "inline-block" : "none";
    const reactionValueLabel = document.getElementById("reactionValueLabel");
    reactionValueLabel.style.display = UIState.reactionValueLabelVisible ? "inline-block" : "none";
    const patternValueLabel = document.getElementById("patternValueLabel");
    patternValueLabel.style.display = UIState.patternValueLabelVisible ? "inline-block" : "none";
    const linkValueLabel = document.getElementById("linkValueLabel");
    linkValueLabel.style.display = UIState.linkValueLabelVisible ? "inline-block" : "none";
    const focusValueLabel = document.getElementById("focusValueLabel");
    focusValueLabel.style.display = UIState.focusValueLabelVisible ? "inline-block" : "none";
    const thoughtValueLabel = document.getElementById("thoughtValueLabel");
    thoughtValueLabel.style.display = UIState.thoughtValueLabelVisible ? "inline-block" : "none";

    //Tab-bar-buttons
    const impulseTabBarButton = document.getElementById("impulseTabBarButton");
    impulseTabBarButton.style.display = UIState.impulseTabBarButtonVisible ? "inline-block" : "none";
    const reactionTabBarButton = document.getElementById("reactionTabBarButton");
    reactionTabBarButton.style.display = UIState.reactionTabBarButtonVisible ? "inline-block" : "none";
    const patternTabBarButton = document.getElementById("patternTabBarButton");
    patternTabBarButton.style.display = UIState.patternTabBarButtonVisible ? "inline-block" : "none";
    const linkTabBarButton = document.getElementById("linkTabBarButton");
    linkTabBarButton.style.display = UIState.linkTabBarButtonVisible ? "inline-block" : "none";
    const focusTabBarButton = document.getElementById("focusTabBarButton");
    focusTabBarButton.style.display = UIState.focusTabBarButtonVisible ? "inline-block" : "none";
    const thoughtTabBarButton = document.getElementById("thoughtTabBarButton");
    thoughtTabBarButton.style.display = UIState.thoughtTabBarButtonVisible ? "inline-block" : "none";
 
    Object.keys(layers).forEach(type => {
        updateValueText(type)
    })
    updateProgressBar();
}

function updateProgressBar() {
    Object.keys(layers).forEach(setProgressBar);
}

function updateValueText(type) {
    const element = document.getElementById(`${type}ValueLabel`);
    if (element) element.textContent = `${capitalize(type)}: ${layers[type].value}`;
}

function setProgressBar(type) {
    const layer = layers[type];
    const current = layer.value;
    const milestone = layer.milestones.find(m => !m.triggered);
    const goal = milestone ? milestone.goal: current;

    const percent = clamp((current / goal) * 100, 0, 100);

    const barID = `${type}Progress`;
    const labelID = `${type}BarLabel`;
    const progressBar = document.getElementById(barID);
    const label = document.getElementById(labelID);
    if (!progressBar || !label) return;

    progressBar.style.width = percent + "%";
    progressBar.style.backgroundColor = (percent >= 100) ? "white" : layer.color;
    label.textContent = `${current} / ${goal}`;
}

function handleMilestoneReward(type, id) {
    console.log(`Milestone reached: ${type} ${id}`);

    if (type === "impulse" && id === 1) {
        UIState.reactionTabBarButtonVisible = true;
        UIState.reactionButtonVisible = true;
        UIState.reactionButtonEnabled = true;
        UIState.reactionProgressBarVisible = true;
        UIState.reactionValueLabelVisible = true;
    }
    if (type === "reaction" && id === 1) {
        UIState.patternTabBarButtonVisible = true;
        UIState.patternButtonVisible = true;
        UIState.patternButtonEnabled = true;
        UIState.patternProgressBarVisible = true;
        UIState.patternValueLabelVisible = true;
    }
    if (type === "pattern" && id === 1) {
        UIState.linkTabBarButtonVisible = true;
        UIState.linkButtonVisible = true;
        UIState.linkButtonEnabled = true;
        UIState.linkProgressBarVisible = true;
        UIState.linkValueLabelVisible = true;
    }
    if (type === "link" && id === 1) {
        UIState.focusTabBarButtonVisible = true;
        UIState.focusButtonVisible = true;
        UIState.focusButtonEnabled = true;
        UIState.focusProgressBarVisible = true;
        UIState.focusValueLabelVisible = true;
    }
    if (type === "focus" && id === 1) {
        UIState.thoughtTabBarButtonVisible = true;
        UIState.thoughtButtonVisible = true;
        UIState.thoughtButtonEnabled = true;
        UIState.thoughtProgressBarVisible = true;
        UIState.thoughtValueLabelVisible = true;
    }
}


//-----------------------------------------------------------------------------------------------------------------------
//----SAVE_AND_LOAD
//-----------------------------------------------------------------------------------------------------------------------

function saveGame() {
    const saveData = {
        layers,
        UIState,
    }
    localStorage.setItem("idleSentienceSave", JSON.stringify(saveData));
    console.log("Game saved.");
}

function loadGame() {
    const saved = localStorage.getItem("idleSentienceSave");
    if (!saved) {
        console.log("No save found.");
        return;
    }

    const saveData = JSON.parse(saved);

    for (const type in saveData.layers) {
        if (!layers[type]) continue;
        layers[type].value = saveData.layers[type].value ?? 0;
        const savedMilestones = saveData.layers[type].milestones ?? [];
        layers[type].milestones.forEach((m, i) => {
            m.triggered = savedMilestones[i]?.triggered ?? false;
        });
    }

    for (const key in saveData.UIState) {
        if (UIState.hasOwnProperty(key)) {
            UIState[key] = saveData.UIState[key];
        }
    }
    console.log("Save loaded.");
>>>>>>> Stashed changes
}


//-----------------------------------------------------------------------------------------------------------------------
//----EVENT_LISTENER
//-----------------------------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {
    init();
    console.log("Game started.");
})

window.addEventListener("beforeunload", () => {
    saveGame();
})


//-----------------------------------------------------------------------------------------------------------------------
//----DEV_FUNCTIONS
//-----------------------------------------------------------------------------------------------------------------------

function devWipeSave() {
    for (const type in layers) {
        resetLayer(type);
    }
    for (const key in UIState) {
        if (defaultUIState.hasOwnProperty(key)) {
            UIState[key] = defaultUIState[key];
        }
    }
    localStorage.removeItem("idleSentienceSave"); 
}