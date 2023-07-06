const header = document.querySelector("#header");
let scrollTop = 0;
let bar = document.getElementsByClassName("bar")[0];

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
    })
})