const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.light')

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
        btn.innerHTML = '&#9788; Light';
    } else {
        btn.innerHTML = '&#9790; Dark';
    }
}

btn.addEventListener('click', () => {
    colorScheme();
    btnChange();
});

//const elements = document.getElementsByClassName("light");
//const elements = document.getElementsByTagName("*");