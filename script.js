const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.scheme');
const css = document.getElementById('css');
const mobileNav = document.getElementById('mobileNav');

let color = 'light';

function colorScheme() {
    if (color === 'light') {
        document.documentElement.style.setProperty('--bg-color', 'black');
        document.documentElement.style.setProperty('--body-bg-color', '#00002e');
        document.documentElement.style.setProperty('--text-color', '#FFF');
        btn.style.color = 'white';
        color = 'dark';
    } else {
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--body-bg-color', 'aliceblue');
        document.documentElement.style.setProperty('--text-color', '#000');
        btn.style.color = 'black';
        color = 'light';
    }
}

function btnChange() {
    if (color === 'dark') {
        btn.innerHTML = '&#9788;';
    } else {
        btn.innerHTML = '&#9790;';
    }
}

btn.addEventListener('click', () => {
    colorScheme();
    btnChange();
});

function changeGlass() {
    css.href = 'css/glass.css';
}

function changeNeu() {
    css.href = 'css/neu.css';
}