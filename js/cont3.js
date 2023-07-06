// cont3 portfolio01~03 탭메뉴 기능
const tabMenus01 = document.querySelectorAll(".portfolio01 ul li");
const texts01 = document.querySelectorAll(".portfolio01 .textWrap .text");
const portviews01 = document.querySelectorAll(".portfolio01 .view");

const tabMenus02 = document.querySelectorAll(".portfolio02 ul li");
const texts02 = document.querySelectorAll(".portfolio02 .textWrap .text");
const portviews02 = document.querySelectorAll(".portfolio02 .view");

const tabMenus03 = document.querySelectorAll(".portfolio03 ul li");
const texts03 = document.querySelectorAll(".portfolio03 .textWrap .text");
const portviews03 = document.querySelectorAll(".portfolio03 .view");

let index01 = 0;
let index02 = 0;
let index03 = 0;

// portfoilo01 자동 탭메뉴 변화
function tabChange01(){
    for (let i = 0; i < tabMenus01.length; i++) {
        tabMenus01[i].classList.remove("on");
        texts01[i].classList.remove("on");
        portviews01[i].classList.remove("on");
    }
    tabMenus01[index01].classList.add("on");
    texts01[index01].classList.add("on");
    portviews01[index01].classList.add("on");
}

function nextChange01(){
    if(index01 === tabMenus01.length - 1){
        index01 = 0;
    } else {
        index01++;
    }
    tabChange01();
}

// 탭메뉴 index01 번호까지 바꾸면서
for(let i=0; i<tabMenus01.length; i++){
    tabMenus01[i].addEventListener("click",(e)=>{
        e.preventDefault();
        index01 = i;
        for(let j=0; j<tabMenus01.length; j++){
            tabMenus01[j].classList.remove("on");
            texts01[j].classList.remove("on");
            portviews01[j].classList.remove("on");
        }
        tabMenus01[index01].classList.add("on");
        texts01[index01].classList.add("on");
        portviews01[index01].classList.add("on");
    })
}

// let autoTab01 = setInterval(()=>{
//     nextChange01();
// },5000);


// 마우스엔터리브 기능
// const viewWrap01 = document.querySelector(".portfolio01 .viewWrap");
// viewWrap01.addEventListener("mouseenter",()=>{
//     clearInterval(autoTab01);
// });
// viewWrap01.addEventListener("mouseleave",()=>{
//     autoTab01 = setInterval(()=>{
//         nextChange01();
//     },5000)
// });

// prev,next버튼
const prevBtn01 = document.querySelector(".portfolio01 .prev");
const nextBtn01 = document.querySelector(".portfolio01 .next");

prevBtn01.addEventListener("click",(e)=>{
    e.preventDefault();
    if(index01 === 0){
        index01 = tabMenus01.length - 1;
    } else {
        index01--;
    }
    tabChange01();
})

nextBtn01.addEventListener("click",(e)=>{
    e.preventDefault();
    nextChange01();
})


// portfoilo02 자동 탭메뉴 변화
function tabChange02(){
    for (let i = 0; i < tabMenus02.length; i++) {
        tabMenus02[i].classList.remove("on");
        texts02[i].classList.remove("on");
        portviews02[i].classList.remove("on");
    }
    tabMenus02[index02].classList.add("on");
    texts02[index02].classList.add("on");
    portviews02[index02].classList.add("on");
}

function nextChange02(){
    if(index02 === tabMenus02.length - 1){
        index02 = 0;
    } else {
        index02++;
    }
    tabChange02();
}

// 탭메뉴 index02 번호까지 바꾸면서
for(let i=0; i<tabMenus02.length; i++){
    tabMenus02[i].addEventListener("click",(e)=>{
        e.preventDefault();
        index02 = i;
        for(let j=0; j<tabMenus02.length; j++){
            tabMenus02[j].classList.remove("on");
            texts02[j].classList.remove("on");
            portviews02[j].classList.remove("on");
        }
        tabMenus02[index02].classList.add("on");
        texts02[index02].classList.add("on");
        portviews02[index02].classList.add("on");
    })
}

// let autoTab02 = setInterval(()=>{
//     nextChange02();
// },5000);

// 마우스엔터리브 기능
// const viewWrap02 = document.querySelector(".portfolio02 .viewWrap");
// viewWrap02.addEventListener("mouseenter",()=>{
//     clearInterval(autoTab02);
// });
// viewWrap02.addEventListener("mouseleave",()=>{
//     autoTab02 = setInterval(()=>{
//         nextChange02();
//     },5000)
// });

// prev,next버튼
const prevBtn02 = document.querySelector(".portfolio02 .prev");
const nextBtn02 = document.querySelector(".portfolio02 .next");

prevBtn02.addEventListener("click",(e)=>{
    e.preventDefault();
    if(index02 === 0){
        index02 = tabMenus02.length - 1;
    } else {
        index02--;
    }
    tabChange02();
})
nextBtn02.addEventListener("click",(e)=>{
    e.preventDefault();
    nextChange02();
})



// portfoilo03 자동 탭메뉴 변화
function tabChange03(){
    for (let i = 0; i < tabMenus03.length; i++) {
        tabMenus03[i].classList.remove("on");
        texts03[i].classList.remove("on");
        portviews03[i].classList.remove("on");
    }
    tabMenus03[index03].classList.add("on");
    texts03[index03].classList.add("on");
    portviews03[index03].classList.add("on");
}

function nextChange03(){
    if(index03 === tabMenus03.length - 1){
        index03 = 0;
    } else {
        index03++;
    }
    tabChange03();
}

// 탭메뉴 index03 번호까지 바꾸면서
for(let i=0; i<tabMenus03.length; i++){
    tabMenus03[i].addEventListener("click",(e)=>{
        e.preventDefault();
        index03 = i;
        for(let j=0; j<tabMenus03.length; j++){
            tabMenus03[j].classList.remove("on");
            texts03[j].classList.remove("on");
            portviews03[j].classList.remove("on");
        }
        tabMenus03[index03].classList.add("on");
        texts03[index03].classList.add("on");
        portviews03[index03].classList.add("on");
    })
}

// let autoTab03 = setInterval(()=>{
//     nextChange03();
// },5000);

// 마우스엔터리브 기능
// const viewWrap03 = document.querySelector(".portfolio03 .viewWrap");
// viewWrap03.addEventListener("mouseenter",()=>{
//     clearInterval(autoTab03);
// });
// viewWrap03.addEventListener("mouseleave",()=>{
//     autoTab03 = setInterval(()=>{
//         nextChange03();
//     },5000)
// });

// prev,next버튼
const prevBtn03 = document.querySelector(".portfolio03 .prev");
const nextBtn03 = document.querySelector(".portfolio03 .next");

prevBtn03.addEventListener("click",(e)=>{
    e.preventDefault();
    if(index03 === 0){
        index03 = tabMenus03.length - 1;
    } else {
        index03--;
    }
    tabChange03();
})
nextBtn03.addEventListener("click",(e)=>{
    e.preventDefault();
    nextChange03();
})
