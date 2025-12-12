// Select the container where notifications will appear
const notifyContainer = document.getElementById("notification-container");

// Select all "Completed" buttons
const buttons = document.querySelectorAll(".card-button");
// Select the counters

buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
        
        // 1. Find the task title inside the same card
        const card = btn.closest(".card");
        const taskTitle = card.querySelector("p.text-xl").textContent.trim();

        // 2. Generate date & time
        const now = new Date();
        const dateString = now.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });

        const timeString = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });

        // 3. Create a new <p> element
        const p = document.createElement("p");
        p.className = "bg-[var(--base)] p-4 rounded-xl shadow";
        p.textContent = ` ${taskTitle} — Completed on ${dateString} at ${timeString}`;

        // 4. Insert into log
        notifyContainer.appendChild(p);
    });
});
const clearBtn = document.getElementById("clear-history-btn");
clearBtn.addEventListener("click", () => {
    // 1. Clear all notifications
    notifyContainer.innerHTML = "";
    const count = document.querySelectorAll('.card-button').length;
    document.getElementById('counter-decrease').textContent = count;


    // 2. Re-enable all completed buttons
    buttons.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("btn-disabled");
        btn.classList.add("btn-primary");
    });

});
