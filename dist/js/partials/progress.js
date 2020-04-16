$(document).ready(function () {
  function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
    const progressElement = $(node);
    progressElement.each(function (value, item) {
      $(item).find(nodeLine).animate({
        width: item.dataset.progressPercent+'%'
      }, animationLength);
      $(item).find(tooltip).show(animationLength);
    });
  }
//});
  let animate = true;


  $(window).scroll(function () {

    if($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if(animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }
  });
});