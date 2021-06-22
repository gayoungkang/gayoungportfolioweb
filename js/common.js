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
// 모바일 세로모드 권장
const filter = "win16|win32|win64|mac|macintel"; 
  if ( navigator.platform ) { 
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
      //mobile 
        window.addEventListener("orientationchange", function() {
            if(window.orientation === 90) {
                alert("세로모드로 보시면 좀 더 편하게 보실 수 있습니다.")   
            }
        });
    } else { 
      //pc
  } 
}
