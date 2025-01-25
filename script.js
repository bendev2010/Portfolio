const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.lightdark')
const elements = document.getElementsByTagName("*");

function colorScheme() {
    elements.forEach(element => {
        if (element.style.colorScheme === 'dark') {
            element.style.colorScheme = 'light';
        } else {
            element.style.colorScheme = 'dark';
        }
    });
}
