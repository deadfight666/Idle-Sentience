let reactions = 0;

const reactioneMilestones = [
    {index: 1, goal: 50, type: "reactions", triggered: false},
    {index: 2, goal: 200, type: "reactions", triggered: false},
]

function generateReaction() {
    reactions++;
    updateUI();
}