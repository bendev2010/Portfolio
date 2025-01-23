const btn = document.getElementById('dark/light');
const header = document.querySelectorAll('header');
const secton = document.querySelectorAll('section');

function darkLight() {
    if (section.style.color == white) {
        section.style.color = white
        section.style.background = black
        header.style.color = white
        header.style.background = black
    } else {
        section.style.color = black
        section.style.background = white
        header.style.color = black
        header.style.background = white
    }
}

btn.addEventListener('click', darkLight)