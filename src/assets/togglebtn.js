
export function togglebtn(){
    const toggleButton = document.getElementById("toggle");
    const sideBar = document.querySelector(".side_bar");
    const sideBarSpan = document.querySelectorAll(".side_bar_container  span");
    const sideBarHeader = document.querySelectorAll(".side_bar_container  h3");
    const content = document.querySelector(".content");
    let toggleFlag = true;
    
    toggleButton.addEventListener("click", function () {
      if (toggleFlag) {
        toggleButton.classList.remove(".fa-toggle-off");
        toggleButton.classList = "fa fa-toggle-on";
        sideBar.style.width ="5%";
        content.style.width='95%'
        // sideBarHeader.style.display ='none';
        sideBarSpan.hidden = "true"
        toggleFlag = false;
      } else {
        toggleButton.classList.remove(".fa-toggle-on");
        toggleButton.classList = "fa fa-toggle-off";
        sideBar.style.width ="20%";
        content.style.width='80%'
        sideBarSpan.hidden = "true"
        // sideBarHeader.style.display='block';
        // sideBarSpan.style.display='block';
        toggleFlag = true; 
      }
    });
}

