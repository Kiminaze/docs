
const contentBoxes = document.querySelectorAll('.content-box');

contentBoxes.forEach(box => {
    const tabs = box.querySelectorAll('.tab');
    const contents = box.querySelectorAll('.tab-content');

    if (tabs.length > 0 && contents.length > 0) {
        tabs[0].classList.add('active');
        contents[0].classList.add('active');
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            if (contents[i]) contents[i].classList.add('active');
        });
    });
});
