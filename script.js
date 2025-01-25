const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.lightdark')

function colorScheme() {
    mode.forEach(element => {
        if (element.style.colorScheme === 'dark') {
            element.style.colorScheme = 'light';
        } else {
            element.style.colorScheme = 'dark';
        }
    });
}
//const elements = document.getElementsByTagName("*");