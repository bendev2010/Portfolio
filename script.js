const css = document.getElementById('css');
const glowCursor = document.querySelector('.cursor-glow');

function changeGlass() {
    css.href = 'css/glass.css';
}

function toggleTheme() {
    if (css.href.includes('glass')) {
        css.href = 'css/styles.css';
    } else {
        css.href = 'css/glasses.css';
    }
}

window.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  glowCursor.style.left = x + 'px';
  glowCursor.style.top = y + 'px';
});