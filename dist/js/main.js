$(document).ready(function () {
  $('.works__btns button, .works__btns a').on('focus', function (e) {
    $(this).parents('.works__element').addClass('works__element--active');
  });
  $('.works__btns button, .works__btns a').on('blur', function (e) {
    $(this).parents('.works__element').removeClass('works__element--active');
  });
}); //<script type="text/javascript">

if (window.jQuery) {
  alert('jQuery   подключен');
} else {
  alert('jQuery не   подключен');
}

; //</script>

$(document).ready(function () {
  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent + '%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  } //});


  let animate = true;
  $(window).scroll(function () {
    if ($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if (animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }

      animate = false;
    }
  });
});
$(document).ready(function () {
  $('.carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    //отключение стандартной навигации
    navText: [],
    items: 5,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      // с 980 до 768 3 элемента и тд
      980: {
        items: 5
      } //с максимума до 980 5 элементов в строке

    }
  });
});
//# sourceMappingURL=../maps/main.js.map
