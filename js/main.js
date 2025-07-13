const gameStages = [
    {name: "impulses", type: "impulses"},
    //To-Do: restliche stages
]

const layerColors = {
    impulses: "mediumpurple",
    reactions: "deepskyblue",
    patterns: "gold",
    links: "darkorange",
    foci: "limegreen",
    thoughts: "crimson"
} 

let currentStageIndex = gameStages[0].name;

window.addEventListener("load", () => {
    init();
    console.log("Game started.");
})

window.addEventListener("beforeunload", () => {
    saveGame();
})

function init() {
    loadGame();
    updateUI();
    setInterval(gameTick, 100);
}

function gameTick() {
    checkMilestones();
    updateUI();
}

function updateUI() {
    document.getElementById("impulseCount").textContent = "Impulses: " + impulses;
    //To-Do: restliche points
    updateProgressBar();
}

function getCurrentMilestone() {
    const allMilestoneGroups = [
        impulseMilestones,
        //To-Do: restliche milestones
    ];
    for (const group of allMilestoneGroups) {
        const next = group.find(m => !m.triggered);
        if (next) return next;
    }
    return null;
}

function updateProgressBar() {
    const milestone = getCurrentMilestone();
    if (!milestone) {
        setProgressBar(1, 1);
        return;
    }
    const resourceValue = getResourceForMilestone(milestone);
    setProgressBar(resourceValue, milestone.goal);
}

function checkMilestones() {
    const milestone = getCurrentMilestone();
    if (!milestone) return;
    
    const value = getResourceForMilestone(milestone);
    if (value >= milestone.goal) {
        milestone.triggered = true;
        //To-Do: Milestone reward einbauen
    }
}

function getResourceForMilestone(milestone) {
    switch (milestone.type) {
        case "impulses": return impulses;
        //To-Do: restliche points
        default: return 0;
    }
}

function setProgressBar(current, max) {
    const progressBar = document.getElementById("impulseProgress");
    let percent = Math.min((current / max) * 100, 100)
    progressBar.style.width = percent + "%";

    progressBar.style.backgroundColor = (percent >= 100) ? "#4b0082" : "limegreen";

    document.getElementById("impulseBarLabel").textContent = `${current} / ${max}`;
}

function saveGame() {
    const saveData = {
        impulses: impulses,
        //To-Do: restliche points
        impulseMilestones: impulseMilestones.map(m => m.triggered),
        currentStageIndex: currentStageIndex,
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
    const data = JSON.parse(saved);
    currentStageIndex = data.currentStageIndex ?? gameStages[0].name;
    impulses = data.impulses ?? 0;
    if (data.impulseMilestones) {
        data.impulseMilestones.forEach((status, i) => {
            if (impulseMilestones[i]) impulseMilestones[i].triggered = status;
        })
    }
    console.log("Save loaded.");
}
