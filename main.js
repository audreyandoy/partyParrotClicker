// 1. A click on the Party Parrot increases the counter by 1

const state = {
    clickCount: 0,
    clicked: false
  };
  
  const updateClickCount = () => {
    const parrotCountContainer = document.getElementById("parrotCount");
    state.clickCount += 1;
    parrotCountContainer.textContent = state.clickCount;
  
    const parrot = document.querySelector("#parrot");
    if (state.clickCount > 10) {
      parrot.style.width = "300px";
      parrot.style.height = "300px";
    }
  };
  
  const resetClickCount = () => {
    state.clickCount = 0;
    const parrotCountContainer = document.getElementById("parrotCount");
    parrotCountContainer.textContent = state.clickCount;
  
    const parrot = document.querySelector("#parrot");
    parrot.style.width = "100px";
    parrot.style.height = "100px";
  };
  
  
  
  //Extra:
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
  
  // Register all events
  const registerEventHandlers = () => {
    const parrot = document.getElementById("parrot");
    parrot.addEventListener("click", updateClickCount);
     const reset = document.getElementById("resetButton");
    reset.addEventListener("click", resetClickCount);
    
    //Extra
    const mouseoverBox = document.querySelector('#box-one');
      const clickBox = document.querySelector('#box-three');
      const dblClickBox = document.querySelector('#box-four');
      clickBox.addEventListener("click", clickEffect);
      dblClickBox.addEventListener("dblclick", dblClickEffect);
  
      mouseoverBox.addEventListener("mouseenter", mouseoverEffect);
      mouseoverBox.addEventListener("mouseleave", mouseleaveEffect);
  };
  
  //Extra handlers
  document.addEventListener("keydown", spacebarEffect); 
  document.addEventListener("keyup", keyUpEffect); 
  
  // DOM listener
  document.addEventListener("DOMContentLoaded", registerEventHandlers);