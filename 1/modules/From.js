class FromSubmit{
    constructor(){
        //取位置
        this.nameContainer = document.getElementById("name")
        this.emailContainer = document.getElementById("email")
        this.messageContainer = document.getElementById("message")
        this.nameInput = document.getElementById("name-input")
        this.emailInput = document.getElementById("email-input")
        this.messageInput = document.getElementById("message-input")
        this.fromSubmit = document.getElementById("fromSubmit")       

        this.event()
    }
    event(){

        
        this.fromSubmit.addEventListener("submit", (e)=>{
            e.preventDefault()
            this.checkName()
            this.checkEmail()
            this.checkmessage()
           
            
         
        })
    }

    checkName(){
        if(this.nameInput.value ===""&& this.nameContainer.lastElementChild.tagName ==="INPUT"  ){
            this.nameContainer.appendChild(this.createErrorMessage("請輸入姓名"))
         }
         else
         {if(this.nameInput.value != "" && this.nameContainer.lastElementChild.tagName ==="P"){
            this.nameContainer.lastElementChild.remove(this.nameContainer.lastElementChild)
         }

         }
    }
    checkEmail(){
        if(this.emailInput.value ==="" && this.emailContainer.lastElementChild.tagName ==="INPUT"  ){
            this.emailContainer.appendChild(this.createErrorMessage("請輸入信箱"))
         }       else
         {if(this.emailInput.value != "" && this.emailContainer.lastElementChild.tagName ==="P"){
            this.emailContainer.lastElementChild.remove(this.emailContainer.lastElementChild)
        }
        }
    }
    checkmessage(){
        if(this.messageInput.value ==="" && this.messageContainer.lastElementChild.tagName ==="TEXTAREA"){
            this.messageContainer.appendChild(this.createErrorMessage("請輸入內容"))
        }   else
        {if(this.messageInput.value != "" && this.messageContainer.lastElementChild.tagName ==="P"){
           this.messageContainer.lastElementChild.remove(this.messageContainer.lastElementChild)
        }
        }
    }
    createErrorMessage(msg){
        var createError = document.createElement("p");
        createError.innerText =msg
        createError.classList.add('text-red-500', 'text-xs', 'italic');
        return createError 
    }
}

export default FromSubmit


// function createErrorMessage(msg) {
//     var createError = document.createElement("p");
//     createError.innerText = msg;
//     createError.classList.add('text-red-500', 'text-xs', 'italic');
//     return createError
//   }