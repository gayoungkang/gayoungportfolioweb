// 로드시 실행할 이벤트
document.addEventListener('DOMContentLoaded', function () {
  mainBackColormotion();
  scrollMotion();
});
// 메인 아티클 한번만 실행할 이벤트
function mainBackColormotion() {
  const mainBackAnimation = document.querySelector(".main-article");
  setTimeout(function(){
    !mainBackAnimation.classList.contains("active");
    mainBackAnimation.classList.add("active");
  }, 0.4);
}
// 타이머 이벤트 
function startTimer() {
  const countNumbers = document.querySelectorAll('.about-acticle .wrap_about .col-2 ul li .bold');
  for(let i=0; i<countNumbers.length; i++) {
    const finalNumbers = countNumbers[i].getAttribute('data-done');
    let start = 0;
    let timer = setInterval(function() {
      start = +(start + 0.1).toFixed(1);
      countNumbers[i].textContent = start;
      if(start >= finalNumbers) {
        clearInterval(timer);  
      }
    }, 30);
  }
}                   
// 스크롤 이벤트
function scrollMotion() {
	const windowH = window.innerHeight;
	const marginT = windowH / 2;
  // aboutacticle 변수 선언
  const aboutActicleTop = document.querySelector('.about-acticle').offsetTop;
	const aboutLists = document.querySelectorAll('.about-acticle .wrap_about .col-2 ul li');
  const aboutTitle = document.querySelector('.about-acticle h2.main-title');
  const aboutSubTitle = document.querySelector('.about-acticle p.sub-text');
  const aboutBtn = document.querySelector('.about-acticle a.more-btn');
  let flag = false;
  // servicesacticle 변수선언  
  const servicesActicleTop = document.querySelector('.services-acticle').offsetTop;
  const servicesTitle = document.querySelector('.services-acticle h2.main-title');
  const servicesSubTitle = document.querySelector('.services-acticle p.sub-text');
  const servicesBtn = document.querySelector('.services-acticle a.more-btn');
  const servicesLists = document.querySelectorAll('.services-acticle .wrap_services .col-1 li'); 
  // touchacticle 변수선언
  const touchActicleTop = document.querySelector('.touch-acticle').offsetTop;
  const touchTitle = document.querySelector('.touch-acticle h2.main-title');
  const touchSubTitle = document.querySelector('.touch-acticle p.sub-text');
  const touchBtn = document.querySelectorAll('.touch-acticle ul li');
  // workSpacearticle 변수 선언
  const workSpaceArticleTop = document.querySelector('.workSpace-article').offsetTop;
  const workSpaceTitle = document.querySelector('.workSpace-article h2.main-title');  
  const workSpaceIframe = document.querySelector('.workSpace-article .col-2');
  const workSpaceTabBtn = document.querySelector('.workSpace-article .col-1 .tab-wrap');
  const workSpaceTabContent = document.querySelector('.workSpace-article .col-1 .tab-contents');
  // aboutacticle 이벤트
	document.addEventListener('scroll', function (){
    for(let index=0; index < aboutLists.length; index++) {
      if(window.pageYOffset >= aboutActicleTop - marginT) {
				!aboutLists[index].classList.contains('active');
        !aboutTitle.classList.contains('active');
        !aboutSubTitle.classList.contains('active');
        !aboutBtn.classList.contains('active');
				aboutLists[index].classList.add('active');
        aboutTitle.classList.add('active');
        aboutSubTitle.classList.add('active');
        aboutBtn.classList.add('active');
        if(!flag) {
          startTimer();
          flag = true;
        }
			}else {
				aboutLists[index].classList.remove('active');
        aboutTitle.classList.remove('active');
        aboutSubTitle.classList.remove('active');
        aboutBtn.classList.remove('active');
        flag = false;
			}
    }
    //servicesacticle 이벤트
    for(let i=0; i < servicesLists.length; i++) {
      if(window.pageYOffset >= servicesActicleTop - marginT) {
        !servicesLists[i].classList.contains('active')
        !servicesTitle.classList.contains('active');
        !servicesSubTitle.classList.contains('active');
        !servicesBtn.classList.contains('active');
        servicesLists[i].classList.add('active')
        servicesTitle.classList.add('active');
        servicesSubTitle.classList.add('active');
        servicesBtn.classList.add('active');
      }else {
        servicesLists[i].classList.remove('active')
        servicesTitle.classList.remove('active');
        servicesSubTitle.classList.remove('active');
        servicesBtn.classList.remove('active');
      }
    }
    // workSpacearticle 이벤트 
    if(window.pageYOffset >= workSpaceArticleTop - marginT) {
      !workSpaceTitle.classList.contains('acitve');
      workSpaceTitle.classList.add('active');
      workSpaceIframe.classList.add('active');
      workSpaceTabBtn.classList.add('active');
      workSpaceTabContent.classList.add('active');
    }else {
      workSpaceTitle.classList.remove('active');
      workSpaceIframe.classList.remove('active');
      workSpaceTabBtn.classList.remove('active');
      workSpaceTabContent.classList.remove('active');
    }
    // touchacticle 이벤트
    for(let i=0; i< touchBtn.length; i++) {
      if(window.pageYOffset >= touchActicleTop - marginT) {
        !touchBtn[i].classList.contains('active');
        !touchTitle.classList.contains('active');
        !touchSubTitle.classList.contains('active');
        touchBtn[i].classList.add('active');
        touchTitle.classList.add('active');
        touchSubTitle.classList.add('active');
      }else {
        touchBtn[i].classList.remove('active');
        touchTitle.classList.remove('active');
        touchSubTitle.classList.remove('active');
      }
    }
	});
}
// workSpace-article tab & slide event
const tabBtns = document.querySelectorAll('.workSpace-article .col-1 .tab-btn li');
const tabContents = document.querySelectorAll('.workSpace-article .col-1 .tab-contents li');
const tabSlides = document.querySelectorAll('.workSpace-article .col-2 .slide-img li');

tabEvent();
function tabEvent() {
  for(let i=0; i<tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", function(e) {
      let clickEl = e.currentTarget;
      remove();
      clickEl.classList.add('active');
      let clickElValue = clickEl.getAttribute('data-tab');
      if(clickElValue === tabContents[i].getAttribute('data-tab') && clickElValue ===   tabSlides[i].getAttribute('data-tab') ) {
        tabContents[i].classList.add('active');
        tabSlides[i].classList.add('active');
      }
    });
  }
}

function remove() {
	for(let i=0; i<tabBtns.length; i++) {
		tabBtns[i].classList.remove("active")
    tabContents[i].classList.remove("active")
    tabSlides[i].classList.remove("active")
	}
}
