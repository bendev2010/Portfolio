const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.light')

function colorScheme() {
    mode.forEach(element => {
        if (element.classList.contains('dark')) {
            element.classList.remove('dark');
            element.classList.add('light');
        } else {
            element.classList.remove('light');
            element.classList.add('dark');
        }
    });
}
//const elements = document.getElementsByTagName("*");