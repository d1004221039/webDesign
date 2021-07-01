var slideIndex = 10;
var sortnextBtn = document.getElementsByClassName("sortnext")
var sortprevBtn = document.getElementsByClassName("sortprev")
showSlides(slideIndex);

sortnextBtn[0].addEventListener('click',() =>{
    slideIndex =slideIndex+1
    showSlides(slideIndex )
})
sortprevBtn[0].addEventListener('click',() =>{
    slideIndex =slideIndex-1
    showSlides(slideIndex )
 })


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("items");

    if (n == slides.length) {
        sortnextBtn[0].style.display = "none";
    } else {
        sortnextBtn[0].style.display = "inline-block";
    }

    if (n == 10) {
        sortprevBtn[0].style.display = "none";
    } else {
        sortprevBtn[0].style.display = "inline-block";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = slideIndex-1; i >slideIndex-11; i--) {
        slides[i].style.display = "inline-block";
    }
}


// sale-owl


var saleOwlslideIndex = 6;
var saleOwlNextBtn = document.getElementsByClassName("sale-owl-next")
var saleOwlPrevBtn = document.getElementsByClassName("sale-owl-prev")
saleOwlShowSlides(saleOwlslideIndex);

saleOwlNextBtn [0].addEventListener('click',() =>{
    saleOwlslideIndex =saleOwlslideIndex+5
    saleOwlShowSlides(saleOwlslideIndex )
})
saleOwlPrevBtn[0].addEventListener('click',() =>{
    saleOwlslideIndex =saleOwlslideIndex-5
    saleOwlShowSlides(saleOwlslideIndex )
 })


function saleOwlShowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sale-items");

    if (n >slides.length){n=slides.length}
    if(n<6){n=6}
    if (n == slides.length) {
        saleOwlNextBtn[0].style.display = "none";
    } else {
        saleOwlNextBtn[0].style.display = "inline-block";
    }

    if (n == 6) {
        saleOwlPrevBtn[0].style.display = "none";
    } else {
        saleOwlPrevBtn[0].style.display = "inline-block";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = n-1; i >n-7    ; i--) {
        slides[i].style.display = "inline-block";
    }
}


// shopee-Mall

var shopeeMallslideIndex = 1;
var shopeeMallNextBtn = document.getElementsByClassName("shopee-Mall-next")
var shopeeMallPrevBtn = document.getElementsByClassName("shopee-Mall-prev")
shopeeMallshowSlides(shopeeMallslideIndex);

shopeeMallNextBtn[0].addEventListener('click',() =>{
    shopeeMallslideIndex =shopeeMallslideIndex+1
    shopeeMallshowSlides(shopeeMallslideIndex )
})
shopeeMallPrevBtn[0].addEventListener('click',() =>{
    shopeeMallslideIndex =shopeeMallslideIndex-1
    shopeeMallshowSlides(shopeeMallslideIndex )
 })


function shopeeMallshowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("shopee-Mall-items");

    if (n == slides.length) {
        shopeeMallNextBtn[0].style.display = "none";
    } else {
        shopeeMallNextBtn[0].style.display = "inline-block";
    }

    if (n == 1) {
        shopeeMallPrevBtn[0].style.display = "none";
    } else {
        shopeeMallPrevBtn[0].style.display = "inline-block";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = shopeeMallslideIndex-1; i >shopeeMallslideIndex-2; i--) {
        slides[i].style.display = "block";
    }
}


// hotSaleItem

var hotSaleItemslideIndex = 3;
var hotSaleItemNextBtn = document.getElementsByClassName("hotSaleItem-next")
var hotSaleItemPrevBtn = document.getElementsByClassName("hotSaleItem-prev")
hotSaleItemshowSlides(hotSaleItemslideIndex);

hotSaleItemNextBtn[0].addEventListener('click',() =>{
    hotSaleItemslideIndex =hotSaleItemslideIndex+3
    hotSaleItemshowSlides(hotSaleItemslideIndex )
})
hotSaleItemPrevBtn[0].addEventListener('click',() =>{
    hotSaleItemslideIndex =hotSaleItemslideIndex-3
    hotSaleItemshowSlides(hotSaleItemslideIndex )
 })


function hotSaleItemshowSlides(n) {
    var i;
    var slides = document.getElementsByClassName("hotSaleItems");
    console.log(slides)
    console.log(n)
    console.log(slides.length)
    if (n == slides.length) {
        hotSaleItemNextBtn[0].style.display = "none";
        console.log('text1')
    } else {
        hotSaleItemNextBtn[0].style.display = "inline-block";
    }

    if (n == 3) {
        hotSaleItemPrevBtn[0].style.display = "none";
    } else {
        hotSaleItemPrevBtn[0].style.display = "inline-block";
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = hotSaleItemslideIndex-1; i >hotSaleItemslideIndex-4; i--) {
        slides[i].style.display = "block";
    }
}
