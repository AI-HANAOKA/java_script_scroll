// const scrollEvent = function() {
//   window.addEventListener("scroll", function() {
//     // 画面のスクロール量を取得
//     const scrollValue = window.pageXOffset;
//     // セレクタの取得
//     const scrollEle = document.querySelector(".scroll");
//     // 取得したセレクタのtop値にスクロール量を足す。
//     const scrollTop = scrollEle.getBoundingClientRect().top + scrollValue;
//     // 画面の高さを取得
//     const windowHeight = window.innerHeight;
//     // 表示するタイミング
//     const value = 100;
//     // 表示条件
//     if (scrollValue > scrollTop - windowHeight + value) {
//       scrollEle.classList.add("js-fade");
//     }
//   });
// };
// scrollEvent();
// 同じ要素が複数ある場合
const scrollEvent = function() {
  window.addEventListener("scroll", function() {
    const scrollValue = window.pageYOffset;
    const scrollEle = document.querySelectorAll(".scroll");
    const windowHeight = window.innerHeight;
    const value = 200;

    for (let a = 0; a < scrollEle.length; a++) {
      // 取得した要素のtop値の取得 + スクロール量
      let scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;
      if (scrollValue > scrollTop - windowHeight + value) {
          scrollEle[a].classList.add("js-fade");
      }
    }
  });
}
scrollEvent();