
var model={
    data:[{"專案名":"表單驗證",
            "codepan":"VwpEwmr",
            "Html":"自己寫",
            "CSS":"自己寫",
            "JS":"自己寫",
            "參考文件":"https://vanillawebprojects.com",
            "使用者故事":`<p> &emsp;沒輸入內容分別為:</p>
                <div> &emsp; &emsp; #Username must be at least 3 characters</div>
                <div> &emsp; &emsp; #Email is not valid</div>
                <div> &emsp; &emsp; #Password must be at least 6 characters</div>
                <div> &emsp; &emsp; #Password2 is required 跟 Passwords do not match</div>`,
            "遇到困難及解決方式":`這次的專案，我學到input的使用，原來型態可以直接設定為密碼跟email，並且可以進一步驗證，mail是否有輸入錯誤，只是沒辦法驗證沒輸入的狀態

            練習了幾個不熟的點，停止表單預設動作，以及對html刪除元件稍微更了解一點`

        },{"專案名":"電影劃位",
            "codepan":"mdWQdpx",
            "Html":"自己寫",
            "CSS":"自己寫",
            "JS":"自己寫",
            "參考文件":"https://vanillawebprojects.com",
            "使用者故事":`
                <div> &emsp; &emsp; #滑鼠移到座位會放大</div>
                <div> &emsp; &emsp; #點擊後會變色且增加人數</div>
                <div> &emsp; &emsp; #且增加人數會增加總票價</div>
                <div> &emsp; &emsp; #白色區域為被選擇區域，不可重複選取</div>`,
            "遇到困難及解決方式":`這個練習我開始練習事先規劃，並寫出偽碼流程，整理開發的流程，也學到了幾個新事件，像是滑鼠滑過mouseenter，滑鼠離開mouseleave、還有html元件改變時的反應change。CSS的部分則是放大元件的tarnsform:scale(1.1)，取消select的預設箭頭appearance : none，`
        },{"專案名":"OOXX",
            "codepan":"RwpzrRP",
            "Html":"老師檔案",
            "CSS":"老師檔案",
            "JS":"自己寫",
            "參考文件":"課程作業",
            "使用者故事":`
                <div> &emsp; &emsp; #I can play a game of Tic Tac Toe with the computer.</div>
                <div> &emsp; &emsp; #My game will reset as soon as it's over so I can play again.</div>
                <div> &emsp; &emsp; #I can choose whether I want to play as X or O.</div>`,
            "遇到困難及解決方式":`這個作業是我回頭練習的時候做的，當時我認為比較困難的地方在於HTML跟CSS不是我自己寫的，所以會不知道從何下手，但仔細將要用到的部分閱讀過後發現看懂不是太難，在這個專案我也嘗試使用MCV的寫法，雖然一開始會有點混亂，但也是為了方便維護專案。最後在這當中，我加入了原本作業沒有的電腦先手部分，多了一些遊戲變化`
        },{"專案名":"計算機",
            "codepan":"GRWavoq",
            "Html":"老師檔案",
            "CSS":"老師檔案",
            "JS":"自己寫",
            "參考文件":"課程作業",
            "使用者故事":`
            <div> &emsp; &emsp; #I can add, subtract, multiply and divide two numbers.</div>
            <div> &emsp; &emsp; #I can clear the input field with a clear button.</div>
            <div> &emsp; &emsp; #I can keep chaining mathematical operations together until I hit the equal button</div>
            <div> &emsp; &emsp; &emsp;, and the calculator will tell me the correct output.</div>
            <div> &emsp; &emsp; #User can't duplicate operators</div>
            <div> &emsp; &emsp; #User can't start with operators</div>
            <div> &emsp; &emsp; #User can't start with double period ".."</div>
            <div> &emsp; &emsp; #User can't enter more than 12 digits</div>
            `,
            "遇到困難及解決方式":`這個作業也是同一時間回去做的，開始練習讀懂其他人的程式碼，在用自己的想法加入進去，在這個專案學到eval()的用法，可以讓字串直接做運算，以及更多innerHTML的用法`
            }]
        }

var control = {
    jsIntContainer: document.querySelector("#jsIntContainer"),
    jsInt : document.querySelector("#jsInt"),
    js : document.querySelectorAll("#js"),
    jsIntData:function(index){
        this.jsInt.innerHTML = `  
    <nav class="js-introduction-nav">
        <i id="jsIntX" class="fas fa-times-circle"></i>
    </nav>
    <div class="js-introduction-left">
        <p>${model.data[index]["專案名"]}</p>
        <figure class="js-gif"><img
                src="https://d1004221039.github.io/JavaScript-challenge/img/JS%E6%8C%91%E6%88%B0-${index}.gif" alt="">
        </figure>
        <div class="js-introduction-log">
            <a class="www-logo" target=_blank href="https://d1004221039.github.io/JavaScript-challenge/${index+1}/index.html">
                <img src="https://image.shutterstock.com/image-vector/internet-globe-icon-vector-design-260nw-1388689748.jpg"
                    alt=""></a>
            <a class="codepan-logo" target=_blank href="https://codepen.io/d1004221039/pen/${model.data[index]["codepan"]}">
                <img src="https://vicchoutw.com/images/common/1x/follow/codepen-icon.png" alt=""></a>
            <a class="github-logo" target=_blank href="https://github.com/d1004221039/JavaScript-challenge/tree/main/${index+1}">
                <img src="https://vicchoutw.com/images/common/1x/follow/github-icon.png" alt=""></a>
        </div>
    </div>
    <div class="js-introduction-right">
        <p>HTML: ${model.data[index]["Html"]}</p>
        <p>CSS: ${model.data[index]["CSS"]}</p>
        <p>JavaScript: ${model.data[index]["JS"]}</p>
        <p>參考文件:  ${model.data[index]["參考文件"]}</p>
        <p>使用者故事：${model.data[index]["使用者故事"]}</p>

        <p>遇到困難及解決方式：${model.data[index]["遇到困難及解決方式"]}
        </p>
    </div> `
    }

}

var view={
    closejsInt:function(){
        control.jsIntContainer.classList.add("hide")
    },
    openjsInt : function(){
        control.jsIntContainer.classList.remove("hide")
    }
    
}

control.jsInt.addEventListener('click',(e)=>{
    if(e.target.id =="jsIntX")view.closejsInt()
})

window.addEventListener('click',(e)=>{
    if (e.target.id === "jsIntContainer")view.closejsInt()
})

control.js.forEach(( currentValue, index, array)=> {
    currentValue.addEventListener('click',()=>{
        view.openjsInt()
        control.jsIntData(index)
    })
});