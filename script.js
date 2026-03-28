const css = document.getElementById('css');
const glowCursor = document.querySelector('.cursor-glow');
const projectCard = document.querySelector('.project');

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

const project1 = {
    title: 'PTC by B',
    description: 'A web app featuring a Pomodoro timer and task list and calendar view. In the future I could add a login feature.',
    image: 'images/todo.png',
    link: 'https://bendev2010.github.io/meine-To-Do-Liste/'
}

const project2 = {
    title: 'This Website',
    description: 'A portfolio website I originally made when I was too young for LinkedIn.',
    image: 'images/Old Portfolio.png',
    link: 'index.html'
}

const project3 = {
    title: 'Blackjack',
    description: 'A simple blackjack game made in C++. A user can play against the computer in the console.',
    image: 'images/blackjack.jpg',
    link: 'https://github.com/bendev2010/Blackjack'
}

var projectCards = [project1, project2, project3];

var i = 0;

function nextProject() {
    if (i < projectCards.length - 1) {
    i += 1;
    } else {
        i = 0
    }

    projectCard.innerHTML = `
        <h4><a href="${projectCards[i].link}">${projectCards[i].title}</a></h4>
        <img src="${projectCards[i].image}" alt="project image">
        <p>${projectCards[i].description}</p>
    `;
}

function prevProject() {
    if (i > 0) {
    i -= 1;
    } else {
        i = projectCards.length - 1
    }

    projectCard.innerHTML = `
        <h4><a href="${projectCards[i].link}">${projectCards[i].title}</a></h4>
        <img src="${projectCards[i].image}" alt="project image">
        <p>${projectCards[i].description}</p>
    `;
}

nextProject();