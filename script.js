function changeText() {
    document.getElementById("intro-text").textContent = "Text has been changed using JavaScript!";
}

function changeStyle() {
    const heading = document.getElementById("main-heading");
    heading.classList.toggle("styled");
}

function toggleBox() {
    const container = document.getElementById("content-area");
    const existingBox = document.getElementById("dynamic-box");

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const box = document.createElement("div");
        box.id = "dynamic-box";
        box.textContent = "I am a dynamically added box!";
        box.style.marginTop = "20px";
        box.style.padding = "20px";
        box.style.border = "2px dashed #333";
        container.appendChild(box);
    }
}
