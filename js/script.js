let closeMenuBtn = document.querySelector('.ri-close-line');
let openMenuBtn = document.querySelector('.ri-menu-line');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');
let downArrows = document.querySelectorAll('.ri-arrow-down-s-fill');
let upArrows = document.querySelectorAll('.ri-arrow-up-s-fill');

// display and hide menu
function displayMenu() {
    let isOpenedMenu = false;

    openMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        overlay.classList.remove('hidden');
        menu.classList.remove('hidden');
        menu.classList.add('opened-menu');
        openMenuBtn.classList.add('hidden');
        closeMenuBtn.classList.remove('hidden');
        isOpenedMenu = true;
    })

    // close menu with button or click off the menu
    closeMenuBtn.addEventListener('click', ()=> {
        overlay.classList.add('hidden');
        menu.classList.remove('opened-menu');
        menu.classList.add('closed-menu');
        closeMenuBtn.classList.add('hidden');
        openMenuBtn.classList.remove('hidden');
    })
    document.body.addEventListener('click', ()=> {
        if(isOpenedMenu) {
            overlay.classList.add('hidden');
            menu.classList.remove('opened-menu');
            menu.classList.add('closed-menu');
            closeMenuBtn.classList.add('hidden');
            openMenuBtn.classList.remove('hidden');

            isOpenedMenu = false;
        }
    })
}
displayMenu();


// display career parts
function displayCareerParts() {
    for(let i=0; i<downArrows.length; i++) {
        downArrows[i].addEventListener('click', ()=> {
            let upArrow = downArrows[i].previousSibling;
            let section = downArrows[i].closest('section');
            let column = section.querySelector('.column');
            let linePicture = section.querySelector('img');
    
            downArrows[i].classList.add('hidden');
            upArrow.classList.remove('hidden');
            linePicture.classList.add('disappear');
            column.classList.remove('hidden');
    
            setTimeout(()=>{
                linePicture.classList.add('hidden'); 
            },550);
        })

        // hide career parts
        for(let i=0; i<upArrows.length; i++) {
            upArrows[i].addEventListener('click', ()=> {
                let downArrow = upArrows[i].nextSibling;
                let section = downArrows[i].closest('section');
                let column = section.querySelector('.column');
                let linePicture = section.querySelector('img');
        
                upArrows[i].classList.add('hidden');
                downArrow.classList.remove('hidden');
        
                column.classList.add('hidden');
                linePicture.classList.remove('disappear');
                linePicture.classList.add('appear');
                linePicture.classList.remove('hidden');
        
                setTimeout(()=>{
                    linePicture.classList.remove('appear');
                },405);
            })
        }
    }
}
displayCareerParts();


// change header color with scroll
