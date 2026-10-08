const challenges = document.querySelectorAll(".challenge");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const completedCount = document.getElementById("completedCount");

const totalXPElement = document.getElementById("totalXP");
const leaderXP = document.getElementById("leaderXP");

const toast = document.getElementById("toast");

const logBtn = document.getElementById("logBtn");
const screenHours = document.getElementById("screenHours");
const screenResult = document.getElementById("screenResult");

const completeBtn = document.getElementById("completeBtn");


/* =========================
   UPDATE CHALLENGE PROGRESS
========================= */

function updateProgress() {

    let completed = 0;

    challenges.forEach(challenge => {

        const checkbox = challenge.querySelector("input");

        if (checkbox.checked) {
            completed++;
            challenge.classList.add("completed");
        } else {
            challenge.classList.remove("completed");
        }

    });

    const percentage = (completed / challenges.length) * 100;

    progressFill.style.width = `${percentage}%`;

    progressText.textContent =
        `${completed} / ${challenges.length}`;

    completedCount.textContent =
        `${completed}/${challenges.length}`;

}


/* =========================
   CHECKBOX EVENTS
========================= */

challenges.forEach(challenge => {

    const checkbox = challenge.querySelector("input");

    checkbox.addEventListener("change", () => {

        updateProgress();

        if (checkbox.checked) {

            showToast("🌱 Challenge completed! +XP");

        }

    });

});


/* =========================
   SCREEN TIME LOG
========================= */

logBtn.addEventListener("click", () => {

    const hours = parseFloat(screenHours.value);

    if (isNaN(hours) || hours < 0 || hours > 24) {

        showToast("Enter a valid number of hours.");

        return;

    }

    screenResult.innerHTML = `
        <span>TODAY'S LOG</span>
        <strong>${hours} HOURS</strong>
    `;

    if (hours <= 3) {

        showToast("🌱 Great! You kept your screen time low.");

    } else if (hours <= 6) {

        showToast("Good job. Tomorrow, touch a little more grass.");

    } else {

        showToast("📱 High screen time. Tomorrow's a new chance.");

    }

});


/* =========================
   COMPLETE DAY
========================= */

completeBtn.addEventListener("click", () => {

    let completed = 0;

    challenges.forEach(challenge => {

        const checkbox = challenge.querySelector("input");

        if (checkbox.checked) {
            completed++;
        }

    });

    if (completed < challenges.length) {

        showToast(
            `Complete all 7 challenges first! ${completed}/7 done.`
        );

        return;
    }


    /* Add XP */

    let currentXP =
        parseInt(totalXPElement.textContent);

    currentXP += 450;

    totalXPElement.textContent = currentXP;

    leaderXP.textContent =
        `${currentXP} XP`;


    /* Streak */

    const streak =
        document.getElementById("streak");

    let currentStreak =
        parseInt(streak.textContent);

    currentStreak++;

    streak.textContent = currentStreak;


    showToast(
        "🏆 Perfect day! +450 XP · Streak increased!"
    );

});


/* =========================
   TOAST
========================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* INITIAL STATE */

updateProgress();