var scrollAnimationElm = document.querySelectorAll('.scroll');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset.scroll_margin != null) {
      triggerMargin = parseInt(elm.dataset.scroll_margin);
    }
    if(elm.dataset.scroll_trigger) {
      showPos = document.querySelector(elm.dataset.scroll_trigger).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      var delay = (elm.dataset.scroll_delay)? elm.dataset.scroll_delay : 0;
      setTimeout(function(index) {
        scrollAnimationElm[index].classList.add('show');
      }.bind(null, i), delay);
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);


// const scrollEvent = function() {
//   window.addEventListener("scroll", function() {
//     const scrollValue = window.pageYOffset;
//     const scrollEle = document.querySelectorAll(".scroll");
//     const windowHeight = window.innerHeight;
//     const value = 00;

//     for (let a = 0; a < scrollEle.length; a++) {
//       // 取得した要素のtop値の取得 + スクロール量
//       let scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;
//       if (scrollValue > scrollTop - windowHeight + value) {
//           scrollEle[a].classList.add("fade--lr", "fade--up");
//       }
//     }
//   });
// }
// scrollEvent();