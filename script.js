const btn = document.getElementById('modeswitch');
const mode = document.querySelectorAll('.lightdark')

function colorScheme() {
    if (mode.style.colorScheme === 'dark') {
        mode.style.colorScheme = 'light';
    } else if (mode.style.colorScheme === 'light') {
        mode.style.colorScheme = 'dark';
    } else {
        window.alert('Error');
    }
}

btn.addEventListener('click', colorScheme)