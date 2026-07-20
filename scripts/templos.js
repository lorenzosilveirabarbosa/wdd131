const currentYear = new Date().getFullYear();
document.querySelector("#ano-atual").textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector("#ultima-modificacao").textContent = lastModified;


const mainNav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hambutton.classList.toggle('open');
});