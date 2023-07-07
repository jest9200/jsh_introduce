const header = document.querySelector("#header");
let scrollTop = 0;
let bar = document.getElementsByClassName("bar")[0];

const cont1 = document.querySelector(".cont1");
const cont2 = document.querySelector(".cont2");
const cont3 = document.querySelector(".cont3");
const cont4 = document.querySelector(".cont4");
const backToTop = document.querySelector(".backToTop");

const contDivs = document.querySelectorAll("#container > div");
console.log(contDivs);

// gnb메뉴들 누르면 각 구간으로 스크롤이동
const gnbMenus = document.querySelectorAll("#header .gnb li");
for(let i=0; i<gnbMenus.length; i++){
    gnbMenus[i].addEventListener("click",(e)=>{
        e.preventDefault();
        window.scrollTo({
            top:contDivs[i].offsetTop,
            behavior:"smooth"
        })
    })
}

// cont1 링크들 누르면 각 구간으로 스크롤이동
const aboutLink = document.querySelector(".cont1 .about");
const contactLink = document.querySelector(".cont1 .contact");

aboutLink.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top:cont2.offsetTop,
        behavior:"smooth"
    })
})

contactLink.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top:cont4.offsetTop,
        behavior:"smooth"
    })
})


window.addEventListener("scroll", () => {
    // 프로그래스 바 기능
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";

    // 헤더 on/off 기능
    let scTop = window.scrollY;
    if (scTop > 0) {
        header.classList.add("on");
    } else {
        header.classList.remove("on");
    }

    if(scTop >= cont1.offsetTop && scTop < cont2.offsetTop){
        for(let i=0; i<gnbMenus.length; i++){
            gnbMenus[i].classList.remove("on");
        }
        gnbMenus[0].classList.add("on");
    } else if(scTop >= cont2.offsetTop && scTop < cont3.offsetTop){
        for(let i=0; i<gnbMenus.length; i++){
            gnbMenus[i].classList.remove("on");
        }
        gnbMenus[1].classList.add("on");
    } else if(scTop >= cont3.offsetTop && scTop < cont4.offsetTop){
        for(let i=0; i<gnbMenus.length; i++){
            gnbMenus[i].classList.remove("on");
        }
        gnbMenus[2].classList.add("on");
    } else if(scTop >= cont4.offsetTop){
        for(let i=0; i<gnbMenus.length; i++){
            gnbMenus[i].classList.remove("on");
        }
        gnbMenus[3].classList.add("on");
    }

    if(scTop >= cont4.offsetTop){
        backToTop.classList.add("on");
    } else {
        backToTop.classList.remove("on");
    }
});

// 마우스아이콘 위아래 반복 이동 기능
const mouseWrap = document.querySelector(".mouseWrap");
setInterval(()=>{
    mouseWrap.classList.toggle("on");
},1000);

// 헤더 로고 클릭시 맨 위로
const headerLogo = document.querySelector("#header .logo");

headerLogo.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})

// backToTop 클릭시 맨 위로
backToTop.addEventListener("click",(e)=>{
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})