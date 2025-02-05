const header = document.getElementById('header');
const arrowUp = document.getElementById('arrowUp');

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        header.style.margin = '0';
        header.style.borderRadius = '0';
        header.style.top = '0';
        header.style.width = '100%'
        arrowUp.style.left = '95%'
    } else {
        header.style.margin = '10px';
        header.style.borderRadius = '100px';
        header.style.top = '10px';
        header.style.width = '99%'
        arrowUp.style.left = '120%'
    }
})