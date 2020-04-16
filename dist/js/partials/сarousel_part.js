$(document).ready(function () {

  $('.carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,  //отключение стандартной навигации
    navText: [],
    items: 5,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },
      768:{
        items:3
      },          // с 980 до 768 3 элемента и тд
      980:{
        items:5
      }           //с максимума до 980 5 элементов в строке
    }
  })
});