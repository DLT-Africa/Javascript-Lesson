const anyThing = document.querySelectorAll('.menuItem');
const oneEl = document.querySelector(".active")
const heading = document.createElement("h2");
const body1 = document.querySelector('body')

const menuClicked = (curEl) => {

    for(let i = 0; i < anyThing.length; i++) {
        anyThing[i].classList.remove('active')
    }
    curEl.classList.add('active')

}


body1.appendChild(heading);
heading.innerHTML ="Hello all"