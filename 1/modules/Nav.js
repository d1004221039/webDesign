class Nav{
  constructor(){
    //選到該選的元件 漢堡跟X按鈕 縮小選單
    this.toggleMenu = document.querySelectorAll("#toggleMenu");
    this.navMenu = document.querySelector("#responsive");
    this.events();
  } 
  events(){
      this.toggleMenu.forEach(toggleMenuElement =>{
        toggleMenuElement.addEventListener("click" , ()=>{  
          this.toggleMenuAction();
      })
    });
  } 
  toggleMenuAction(){
    this.navMenu.classList.toggle("hidden")
  }
}

export default Nav