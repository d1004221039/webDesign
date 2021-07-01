class Model{
    constructor(){
        this.myBtnArray =[...document.querySelectorAll("#myBtn")]
        this.closeArray =[...document.querySelectorAll(".close")]
        this.event()        
    }
    //回頭看一下，為什麼要用display
    event(){
        this.myBtnArray.forEach(myBtn => {
            myBtn.addEventListener("click" ,e => {
                this.openModel(e);
        })

        })

        this.closeArray.forEach(closeBtn =>{
            closeBtn.addEventListener("click" ,(e)=>{
               this.closeModel(e);
            })  
        })
        //windown的概念要複習
        window.addEventListener('click',(e)=>{
            this.windowClose(e);
        })
    }
    openModel(e){
        // e.target.nextElementSibling.classList.toggle("hidden");
        e.target.nextElementSibling.style.display="block"
    }
    closeModel(e){
        // e.target.parentElement.parentElement.classList.toggle("hidden");
        e.target.parentElement.parentElement.style.display =""
    }
    windowClose(e){
        // if (e.target.id ==="myModal"){
        //     e.target.classList.toggle("hidden");
        // }
        if(e.target.id === "myModal" && e.target.style.display === "block"){
            e.target.style.display=""
        }
    }
    
}
export default Model