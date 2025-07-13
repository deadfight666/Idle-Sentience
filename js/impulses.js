let impulses = 0;

const impulseMilestones = [
    {index: 1, goal: 50, type: "impulses", triggered: false},
    {index: 2, goal: 200, type: "impulses", triggered: false},
]

function generateImpulse() {
    impulses++;
    updateUI();
}