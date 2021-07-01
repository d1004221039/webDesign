var webModel = {
    deta:[{"標題":"練習網站一","codepan":"yLbyVgz","HTML":"跟課程實作","CSS":"跟課程實作","JavaScript":" 跟課程實作","參考文件": "課程","心得":`這是我第一個完成的切版網站，跟著線上課程老師一步一步的切出來，雖然是跟著老師做，但在學習的過程中，我是將老師的步驟寫出來後，在自己將程式碼編寫出來，而在步驟記錄過程中，也將所有提到的HTML跟CSS語法全部都記下來，也是我建立切版觀念的基礎`},
    {"標題":"練習網站二","codepan":"JjNobJw","HTML":"老師寫的","CSS":"老師寫的","JavaScript":"跟課程實作","參考文件": "課程","心得":`這個網站HTML跟CSS都是老師先切好的，主要是透過這個網站練習JavaScript動畫的部分，分別有導覽列的漢堡表單，下拉選單，彈窗功能，輪播圖片，表單驗證，分別用es5跟es6的方式去寫，透過這個網站，了解DOM的使用方法、ES6的一些寫法、class模組化的方式`},
    {"標題":"練習蝦皮切版","codepan":"KKWYGZw","HTML":"自己寫","CSS":"自己寫","JavaScript":"自己寫","參考文件": "蝦皮官網","心得":`這是我依照蝦皮購物網的首頁練習切的板，主要練習我學習的結果，在這當中不只應用之前所學的技巧外，額外還學到如何自製輪播圖片(之前專案是用套件)，以及發現更多HTML跟CSS搭配用法，例如消除input外框outline: none;顏色漸層linear-gradient。這些主要不是將這些功能學會而已，而是練習如何找到自己需要的資料，應用在自己程式當中`},
    {"標題":"履歷網頁製作","codepan":"eYWmBer","HTML":"自己寫","CSS":"自己寫","JavaScript":"自己寫","參考文件": "各網站到處看","心得":`這個網頁是將我目前學到的作品，集結再一起的作品集，並且將我所學的功能都用上，嘗試編制自己做的網頁，最大的困難點是從無到有的過程，一開始完全沒有任何想法，只能把知道的要擺的東西都放上去，然後依照需求慢慢改編嘗試，並且複習不少以前學過的功能，像是RWD也是在這次好好地複習，一樣為了呈現不同畫面而搜尋了新的功能，算是對我一個很大的突破`}

    ],
    webDesignData:document.createElement ('div'),  //複習這個.createElement
    webDesignDataBuild:function(list ,e ,index){
        var webContainer =e.parentElement.parentElement
        this.webDesignData.classList.add("web-design-data")  //學到這個.classList.add可以用在createElement新增的原件上
    
        this.webDesignData.innerHTML = `    
        <nav>
            <p class="web-data-title">${this.deta[index]["標題"]}</p>
        </nav>
        <div class="web-data-img">
            <img class="web-design-img" src="https://d1004221039.github.io/webDesign/3/img/${index}.PNG" alt="">
        </div>

        <div class="web-data-link">
            <a class="www-logo" target=_blank href="https://d1004221039.github.io/webDesign/${index}/index.html">
                <img src="https://image.shutterstock.com/image-vector/internet-globe-icon-vector-design-260nw-1388689748.jpg"
                alt=""></a>
            <a class="codepan-logo" target=_blank href="https://codepen.io/d1004221039/pen/${this.deta[index]["codepan"]}">
                <img src="https://vicchoutw.com/images/common/1x/follow/codepen-icon.png" alt=""></a>
            <a class="github-logo" target=_blank href="https://github.com/d1004221039/webDesign/tree/main/${index}">
                <img src="https://vicchoutw.com/images/common/1x/follow/github-icon.png" alt=""></a>
        </div>

        <div class="web-data-content">
            <p> HTML: ${this.deta[index]["HTML"]}</p>
            <p> CSS: ${this.deta[index]["CSS"]}</p>
            <p> JavaScript: ${this.deta[index]["JavaScript"]}</p>
            <p> 參考文件: ${this.deta[index]["參考文件"]}</p>
            <p> 心得: ${this.deta[index]["心得"]} </p>
        </div>`
        
        webContainer.insertBefore(this.webDesignData , list[0])  //學到一個新的方法，父節點中的子節點前新增一個新元件 https://developer.mozilla.org/zh-TW/docs/Web/API/Document/createElement
    }
}

var webControl={
    webDesignItems :document.querySelectorAll("#webDesignItems")
}

webControl.webDesignItems.forEach((currentValue, index ,array)=>{

    currentValue.addEventListener('click',(e)=>{
        webModel. webDesignDataBuild(array,e.target , index) //建立元件
        //控制全部的位置跟大小
        array.forEach(webItem =>{
            webItem.classList.add("items-WH-after") 
            webItem.classList.remove("items-WH-before") 
        })
        
    })
})