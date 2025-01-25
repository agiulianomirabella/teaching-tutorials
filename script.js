function switchCode(language) {
    let tabs = document.querySelectorAll('.code-tab');
    let blocks = document.querySelectorAll('.code-block');

    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.innerText.toLowerCase().includes(language.split('-')[0])) {
            tab.classList.add('active');
        }
    });

    blocks.forEach(block => {
        block.classList.remove('active');
    });

    document.getElementById(language).classList.add('active');
}
