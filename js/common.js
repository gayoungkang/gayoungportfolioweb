// 헤더 스크롤 이벤트
headerScrollEvent();
function headerScrollEvent() {
    const header = document.querySelector('header');
    document.addEventListener('scroll', function() {
        if(window.pageYOffset >= 100 ) {
            !header.classList.contains('active');
            header.classList.add('active');
        }else {
            header.classList.remove('active');
        }
    });
}
// 헤더 모바일 스크립트
const menu = document.querySelector('header .m-header .menu');
const nav = document.querySelector('header .m-header nav');
const close = document.querySelector('header .m-header .close');

menu.addEventListener('click', function() {
    nav.classList.add('active')
});
close.addEventListener('click', function () {
    nav.classList.remove('active')
});
// 모바일 화면단 강제로 가로모드로 변환하기
const filter = "win16|win32|win64|mac|macintel"; 
const html = document.querySelector('html');
  if ( navigator.platform ) { 
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
      //mobile 
      alert('mobile 접속!!!!!!!'); 
      window.addEventListener("orientationchange", function() {
        console.log(window.orientation)
        if(window.orientation != undefined) {
            if(window.orientation == -90) {
                html.style.transform = "rotate(90deg)";
                html.style.overflow = "hidden";
                html.style.position = "absolute";
                html.style.top = "0";
                html.style.left = "0";
                html.style.width = "100%";
                html.style.height = "100%"
            }
        }
    });
    } else { 
      //pc 
      alert('pc 접속'); 
  } 
}
