const themeBtn = document.getElementById("color-theme");

const colorOptions = [
    "#c9d3ff",
    "#ffd8cc",
    "#c9ffe4",
    "#ffc9ef",
    "#dbc9ff",
    "#c9fffb",
    "#FFB8CF",
    "#B8FFE5",
    "#D1B8FF",
    "#FFDB9C",
    "#A8FFE0",
    "#C2CAFF",
    "#FFB8C1",
    "#B7DCFF",
    "#B3FFB8",
    "#FFCEB8"

];

themeBtn.addEventListener("click", () => {
    const random = colorOptions[Math.floor(Math.random() * colorOptions.length)];

    document.documentElement.style.setProperty("--base", random);
});