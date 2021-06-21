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