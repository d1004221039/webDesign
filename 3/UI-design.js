//輪播圖片
var slideIndex = 3;
var uiDesignNextBtn = document.getElementsByClassName("uiDesignNext")
var uiDesignPrevBtn = document.getElementsByClassName("uiDesignPrev")
showSlides(slideIndex);

uiDesignNextBtn[0].addEventListener('click',() =>{
    slideIndex =slideIndex+1
    showSlides(slideIndex )
})
uiDesignPrevBtn[0].addEventListener('click',() =>{
    slideIndex =slideIndex-1
    showSlides(slideIndex )
 })


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");

    if (n == slides.length) {
        uiDesignNextBtn[0].style.display = "none";
    } else {
        uiDesignNextBtn[0].style.display = "inline-block";
    }

    if (n == 3) {
        uiDesignPrevBtn[0].style.display = "none";
    } else {
        uiDesignPrevBtn[0].style.display = "inline-block";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = slideIndex-1; i >slideIndex-4; i--) {
        slides[i].style.display = "inline-block";
    }
}

//滑鼠效果
// mouseenter mouseleave

var item = document.querySelectorAll(".item");
var codepanindex=["VwpKrRb","qBrqXpm","ZEeBaRw","KKWadyQ","JjWEEEz","dyvNgOm","vYxgvOy","KKWWgzB","LYWWbQQ","BaWWeMg","XWMRzgz","oNZdwMr","BaWXmYe","bGqXOBp"]

item.forEach((currentValue, index) =>{  //forEach的搭配用法currentValue, index
    var newData
    currentValue.addEventListener('mouseleave' , () =>{
        newData= removeNewData(index + 1)
        currentValue.innerHTML = newData
    })
    currentValue.addEventListener('click' , () =>{
        newData = addNewData(index)
        currentValue.innerHTML = newData
    })

});

function addNewData(index) {
    var newData = `<img class="design-img design-img-border  " 
                    src="https://d1004221039.github.io/UI-Design-Challenge/img/UI%E6%8C%91%E6%88%B0-${index}.PNG" alt="">
                    <div class="design-data">
                    <a class="www-logo"  target=_blank href=" https://d1004221039.github.io/UI-Design-Challenge/${index}/UI挑戰-${index}.html">
                    <img src="https://image.shutterstock.com/image-vector/internet-globe-icon-vector-design-260nw-1388689748.jpg"
                    alt=""></a>
                     <a class="codepan-logo"  target=_blank href="https://codepen.io/d1004221039/pen/${codepanindex[index]}">
                     <img src="https://vicchoutw.com/images/common/1x/follow/codepen-icon.png" alt=""></a>
                    <a class="github-logo"  target=_blank href="https://github.com/d1004221039/UI-Design-Challenge/tree/main/1">
                    <img src="https://vicchoutw.com/images/common/1x/follow/github-icon.png" alt=""></a>
                    </div>  
                    `
    return newData
}

function removeNewData(index){
    var newData = `<img class="design-img design-img-bottom " 
        src="https://d1004221039.github.io/UI-Design-Challenge/img/UI%E6%8C%91%E6%88%B0-${index-1}.PNG" alt="">
        <div class="blank"></div>`
    return newData
}

