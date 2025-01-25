const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.lightdark')

function colorScheme() {
    mode.forEach(element => {
        if (element.style.colorScheme === 'dark') {
            element.style.colorScheme = 'light';
        } else if (element.style.colorScheme === 'light') {
            element.style.colorScheme = 'dark';
        } else {
            window.alert('Error');
        }
    });
}
//const elements = document.getElementsByTagName("*");