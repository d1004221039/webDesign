/*!
 * Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// ------

var companyIntroduce1 = document.getElementById("companyIntroduce1");
var companyIntroduce2 = document.getElementById("companyIntroduce2");
var Close1 = document.getElementById("closeIntroduce1");
var Close2 = document.getElementById("closeIntroduce2");
Close1.addEventListener("click", (e) => {
  companyIntroduce1.style.display = "none";
});
Close2.addEventListener("click", (e) => {
  companyIntroduce2.style.display = "none";
});

var BTN7PK = document.getElementById("BTN7PK");
BTN7PK.addEventListener("click", () => {
  companyIntroduce1.style.display = "block";
});

var BTNHuga = document.getElementById("BTNHuga");
BTNHuga.addEventListener("click", () => {
  companyIntroduce2.style.display = "block";
});

var introduceItemBTN1 = document.getElementById("introduceItemBTN1");
var introduceItemImg1 = document.getElementById("introduceItemImg1");
var introduceItemBTN2 = document.getElementById("introduceItemBTN2");
var introduceItemImg2 = document.getElementById("introduceItemImg2");
introduceItemBTN1.addEventListener("click", (e) => {
  console.log();
  if (e.target.localName != "div") {
    console.log(e.target.innerText);
    introduceItemImg1.src =
      "./assets/img/company/7PK/" + e.target.innerText + ".gif";
  }
});

introduceItemBTN2.addEventListener("click", (e) => {
  if (e.target.localName != "div") {
    console.log(e.target.innerText);
    introduceItemImg2.src =
      "./assets/img/company/huga/" + e.target.innerText + ".gif";
  }
});
