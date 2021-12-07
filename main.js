const state = {
    clicked: false
}

// Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up 

// Box 1
const mouseoverEffect = (event) => {
    const mouseoverEffect = document.querySelector('#box-one');
    mouseoverEffect.style.backgroundColor = "pink";
    console.log("mouseover?")
}

const mouseleaveEffect = (event) => {
    const mouseoverEffect = document.querySelector('#box-one');
    mouseoverEffect.style.backgroundColor = "transparent";
    console.log("mouseleave?")
}

// Box 2
const spacebarEffect = (event) => {
    console.log("space");
    const spacebarBox = document.querySelector('#box-two p');

    if (event.keyCode == 32) {
        spacebarBox.innerHTML = "<h1>🍮</h1> ";        
    }
}

const keyUpEffect = (event) => {
    const spacebarBox = document.querySelector('#box-two p');

    if (event.keyCode == 32) {
        spacebarBox.textContent = "press space";     
    } 
}

// Box 3

const clickEffect = event => {
    const clickBox = document.querySelector('#box-three');
    if (state.clicked == false) {
        clickBox.style.backgroundImage = "url(https://cultofthepartyparrot.com/parrots/hd/parrot.gif)"
        state.clicked = true;
    }
    else {
        clickBox.style.backgroundImage = ""
        state.clicked = false;
    }
}

// Box 4
const dblClickEffect = (event) => {
    alert("It's time to party! ")
}

const registerEventHandlers = (event) => {
    const mouseoverBox = document.querySelector('#box-one');
    const clickBox = document.querySelector('#box-three');
    const dblClickBox = document.querySelector('#box-four');
    clickBox.addEventListener("click", clickEffect);
    dblClickBox.addEventListener("dblclick", dblClickEffect);

    mouseoverBox.addEventListener("mouseenter", mouseoverEffect);
    mouseoverBox.addEventListener("mouseleave", mouseleaveEffect);
}

document.addEventListener("keydown", spacebarEffect); 
document.addEventListener("keyup", keyUpEffect);   
document.addEventListener("DOMContentLoaded", registerEventHandlers);