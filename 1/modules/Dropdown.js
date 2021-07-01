class Dropdown{
    constructor(){
        this.dropdownArray = [...document.getElementsByClassName("dropdown")]
        this.event();
    }
    //target的部分回去在學
    event(){
        this.dropdownArray.forEach(dropdownElemant =>{
            dropdownElemant.addEventListener("click", e => {
            this.toggleDropdown(e);
            })
        })
    }

    toggleDropdown(e){
        e.target.nextElementSibling.classList.toggle("hidden")
        e.target.children[0].classList.toggle("rot-90")
    }

    

}

export default Dropdown