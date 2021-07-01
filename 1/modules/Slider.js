class Slider {
  constructor() {
      console.log("text1")
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
  }
}

export default Slider;