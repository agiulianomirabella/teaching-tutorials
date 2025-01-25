function switchCode(clickedId) {
    // Get "python" or "matlab" from something like "python-edge"
    const baseLanguage = clickedId.split('-')[0]; // e.g., "python" or "matlab"

    // 1) Activate the correct tabs globally
    let tabs = document.querySelectorAll('.code-tab');
    tabs.forEach(tab => {
        const tabLanguage = tab.innerText.toLowerCase(); // "python" or "matlab"
        // If this tab's language matches the one clicked, highlight it; otherwise un-highlight
        if (tabLanguage === baseLanguage) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // 2) Show/hide the proper code blocks
    let blocks = document.querySelectorAll('.code-block');
    blocks.forEach(block => {
        // If the block ID starts with the chosen language, display it. Otherwise hide it.
        if (block.id.startsWith(baseLanguage)) {
            block.classList.add('active');
        } else {
            block.classList.remove('active');
        }
    });
}
function toggleDemo(demoId) {
    const elem = document.getElementById(demoId);
    elem.style.display = (elem.style.display === "block") ? "none" : "block";
}
