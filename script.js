const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.light')
const css = document.getElementById('css');

let color = '';

function colorScheme() {
    mode.forEach(element => {
        if (element.classList.contains('dark')) {
            element.classList.remove('dark');
            element.classList.add('light');
            color = 'light';
        } else {
            element.classList.remove('light');
            element.classList.add('dark');
            color = 'dark';
        }
    });
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
    css.href = 'css/glass.css'
}

function changeAnime() {
    css.href = 'css/animated.css'
}

function changeborder() {
    css.href = 'css/borderless.css'
}
//const elements = document.getElementsByClassName("light");
//const elements = document.getElementsByTagName("*");