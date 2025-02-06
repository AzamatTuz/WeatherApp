const header = document.getElementById('header');
const arrowUp = document.getElementById('arrowUp');

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        header.style.margin = '0';
        header.style.borderRadius = '0';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.boxShadow = '0 0 10px #baddff'
        arrowUp.style.left = '95%'
    } else {
        header.style.margin = '10px';
        header.style.borderRadius = '100px';
        header.style.top = '10px';
        header.style.width = '99%'
        arrowUp.style.left = '120%'
        header.style.boxShadow = '0 0 0'
    }
})

let clock = document.getElementById('clock');
const div = document.createElement('div');

function startTime() {
    
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    div.innerHTML = `${h} : ${m}`;
    setTimeout(startTime, 1000);

    
}

clock.appendChild(div);

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

startTime()

const btn = document.getElementById('btn');
const rotateArrow = document.getElementById('rotateArrow');

btn.addEventListener('click', () => {
    clock.classList.toggle('left');
    rotateArrow.classList.toggle('rotateArrow')
})