let closeMenuBtn = document.querySelector('.ri-close-line');
let openMenuBtn = document.querySelector('.ri-menu-line');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');

// display and hide menu
openMenuBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('opened-menu');
    openMenuBtn.classList.add('hidden');
    closeMenuBtn.classList.remove('hidden');
})
closeMenuBtn.addEventListener('click', ()=> {
    overlay.classList.add('hidden');
    menu.classList.remove('opened-menu');
    menu.classList.add('closed-menu');
    closeMenuBtn.classList.add('hidden');
    openMenuBtn.classList.remove('hidden');
})

// change header color with scroll
