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
    if (window.matchMedia("(max-width: 600px)").matches) {
        displayMenu();
    };
};

function displayMenu() {
    let isOpenedMenu = false;

    openMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        overlay.classList.remove('hidden');
        menu.classList.add('opened-menu');
        openMenuBtn.classList.add('hidden');
        closeMenuBtn.classList.remove('hidden');

        isOpenedMenu = true;
    });

    // close menu with button or click off the menu
    closeMenuBtn.addEventListener('click', ()=> {
        overlay.classList.add('hidden');
        menu.classList.remove('opened-menu');
        menu.classList.add('closed-menu');
        closeMenuBtn.classList.add('hidden');
        openMenuBtn.classList.remove('hidden');
    });
    document.body.addEventListener('click', ()=> {
        if(isOpenedMenu) {
            overlay.classList.add('hidden');
            menu.classList.remove('opened-menu');
            menu.classList.add('closed-menu');
            closeMenuBtn.classList.add('hidden');
            openMenuBtn.classList.remove('hidden');

            isOpenedMenu = false;
        };
    });
};


// display career parts
if (window.matchMedia("(max-width: 900px)").matches) {
    let careerParts = document.querySelectorAll('.column');

    for (let i=0; i<careerParts.length; i++) {
        careerParts[i].classList.add('hidden');
    };

    displayCareerParts();
};

function displayCareerParts() {
    for(let i=0; i<downArrows.length; i++) {
        downArrows[i].addEventListener('click', ()=> {
            let upArrow = downArrows[i].previousSibling;
            let section = downArrows[i].closest('section');
            let column = section.querySelector('.column');
            let linePicture = section.querySelector('img');
    
            downArrows[i].classList.add('hidden');
            upArrow.classList.remove('hidden');
            linePicture.classList.add('hide-line');
            column.classList.remove('hidden');
    
            // gap between animations
            setTimeout(()=>{
                linePicture.classList.add('hidden')
            },550);
        });

        hideCareerParts();
    };
};

function hideCareerParts() {
    for(let i=0; i<upArrows.length; i++) {

        upArrows[i].addEventListener('click', ()=> {
            let downArrow = upArrows[i].nextSibling;
            let section = downArrows[i].closest('section');
            let column = section.querySelector('.column');
            let linePicture = section.querySelector('img');
    
            upArrows[i].classList.add('hidden');
            downArrow.classList.remove('hidden');
    
            column.classList.add('hidden');
            linePicture.classList.remove('hide-line');
            linePicture.classList.add('display-line');
            linePicture.classList.remove('hidden');
    
            // gap between animations
            setTimeout(()=>{
                linePicture.classList.remove('display-line');
            },405);
        });
    };
};


// change header color with scroll 
changeHeaderColor();

function changeHeaderColor() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset === 0) {
            header.style.backgroundColor = 'transparent';
            anchor.classList.add('hidden');
        } else {
            header.style.backgroundColor = '#0E3E40';
            anchor.classList.remove('hidden');
        };
    });
};


// check inputs value
if(document.querySelector('form')) {
    checkInputValue();
};

function checkInputValue() {
    let nameInput = document.querySelector('#name');
    let emailInput = document.querySelector('#email');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    nameInput.addEventListener('change', (e)=> {
        if(/[^A-Za-z????????????\s]/.test(e.target.value)){
            document.querySelector('#name__error').classList.remove('hidden');
            nameInput.classList.add('error');
        } else {
            document.querySelector('#name__error').classList.add('hidden');
            nameInput.classList.remove('error');
        };
    });

    emailInput.addEventListener('change', (e)=> {
        if(emailRegex.test(e.target.value)){
            document.querySelector('#email__error').classList.add('hidden');
            emailInput.classList.remove('error');
        } else {
            document.querySelector('#email__error').classList.remove('hidden');
            emailInput.classList.add('error');
        };
    });
};


// display overlay with figcaption
let figures = document.querySelectorAll('figure');

if(figures && window.matchMedia("(min-width: 900px)").matches) {
    displayFigcaption();
}

function displayFigcaption() {
    for( let i=0; i<figures.length; i++) {
        let figcaption = figures[i].querySelector('figcaption');

        figures[i].addEventListener('mouseover', ()=> {
            figcaption.classList.remove('stop-hover');
            figcaption.classList.add('hover');
        });

        figures[i].addEventListener('mouseout', ()=> {
            figcaption.classList.remove('hover');
            figcaption.classList.add('stop-hover');
        });
    };
};


// get id of clicked job span and display assigned div
let jobDetails = document.querySelectorAll('.job');

for(let i=0; i<jobDetails.length; i++) {
    let isDisplayedDiv = false;

    jobDetails[i].onclick = function(e) {
        e.stopPropagation();

        let elementId = this.getAttribute('id');
        let div = document.querySelector('.'+ elementId);
        let closeModalBtn = div.querySelector('.ri-close-line');

        displayJobDivDetails(isDisplayedDiv, div, closeModalBtn);
    };
};

function displayJobDivDetails(isDisplayedDiv, div, closeModalBtn) {
    overlay.classList.remove('hidden');
    div.classList.remove('hidden');
    closeModalBtn.focus();
    isDisplayedDiv = true;

    hideJobDivDetails(isDisplayedDiv, div, closeModalBtn);
};

function hideJobDivDetails(isDisplayedDiv, div, closeModalBtn) {
    if(isDisplayedDiv) {
        closeModalBtn.onblur = () => {
            closeModalBtn.focus();
        }

        document.onkeydown = function(e) {
            if (e.key == 'Escape') {
                overlay.classList.add('hidden');
                div.classList.add('hidden');
                isDisplayedDiv = false;
            }
        };
        document.body.addEventListener('click', ()=> {
            overlay.classList.add('hidden');
            div.classList.add('hidden');
            isDisplayedDiv = false;
        });
        closeModalBtn.addEventListener('click', ()=> {
            overlay.classList.add('hidden');
            div.classList.add('hidden');
            isDisplayedDiv = false;
        })
    };
};

document.onkeydown = function(e) {
    console.log(e)
};