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

let autoTab01 = setInterval(()=>{
    nextChange01();
},5000);


// 마우스엔터리브 기능
for(let i=0; i<texts01.length-1; i++){
    texts01[i].addEventListener("mouseenter",()=>{
        clearInterval(autoTab01);
    });
}

for(let i=0; i<texts01.length-1; i++){
    texts01[i].addEventListener("mouseleave",()=>{
        autoTab01 = setInterval(()=>{
            nextChange01();
        },5000)
    });
}


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

let autoTab02 = setInterval(()=>{
    nextChange02();
},5000);


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

let autoTab03 = setInterval(()=>{
    nextChange03();
},5000);