document.addEventListener("DOMContentLoaded", () => {
  const count = document.querySelectorAll(".card-button").length;
  document.getElementById("counter-decrease").textContent = count;
});

document.querySelectorAll(".card-button").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.remove("btn-primary");
    this.classList.add("btn-disabled");
    const counterIncrease = document.getElementById("counter-increase");
    const counterDecrease = document.getElementById("counter-decrease");

    let increaseValue = parseInt(counterIncrease.textContent);
    let decreaseValue = parseInt(counterDecrease.textContent);
    increaseValue += 1;
    decreaseValue -= 1;
    counterIncrease.textContent = increaseValue.toString().padStart(2, "0");
    counterDecrease.textContent = decreaseValue.toString().padStart(2, "0");
    if (decreaseValue <= 0) {
      const p = document.createElement("p");
      p.className = "bg-[var(--base)] p-4 rounded-xl shadow";
      p.textContent = ` All tasks are completed`;

      // 4. Insert into log
      notifyContainer.appendChild(p);
    }
  });
});
