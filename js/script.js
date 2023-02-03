let closeMenuBtn = document.querySelector('.ri-close-line');
let openMenuBtn = document.querySelector('.ri-menu-line');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.overlay');
let downArrows = document.querySelectorAll('.ri-arrow-down-s-fill');
let upArrows = document.querySelectorAll('.ri-arrow-up-s-fill');
let header = document.querySelector('header');
let anchor = document.querySelector('.anchor-top');


// display and hide menu
if(openMenuBtn) {
    displayMenu();
}

function displayMenu() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        let isOpenedMenu = false;

        openMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            overlay.classList.remove('hidden');
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
}


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
function changeHeaderColor() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset === 0) {
            header.style.backgroundColor = 'transparent';
            anchor.classList.add('hidden');
        } else {
            header.style.backgroundColor = '#0E3E40';
            anchor.classList.remove('hidden');
        }
    })
}
changeHeaderColor();


// check that the inputs are correct
function checkInputValue() {
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let message = document.querySelector('#message');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    nameInput.addEventListener('change', (e)=> {
        if(/[^A-Za-zéêèÉÊÈ\s]/.test(e.target.value)){
            document.querySelector('#name__error').classList.remove('hidden');
            nameInput.classList.add('error');
        } else {
            document.querySelector('#name__error').classList.add('hidden');
            nameInput.classList.remove('error');
        }
    });

    emailInput.addEventListener('change', (e)=> {
        if(emailRegex.test(e.target.value)){
            document.querySelector('#email__error').classList.add('hidden');
            emailInput.classList.remove('error');
        } else {
            document.querySelector('#email__error').classList.remove('hidden');
            emailInput.classList.add('error');
        }
    });
}
checkInputValue()
