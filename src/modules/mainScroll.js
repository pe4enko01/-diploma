const mainScroll = ()=>{
    const topMenu = document.querySelector(".top-menu");
    const topMenuList = topMenu.querySelector("ul");
    const topMenuListLi = topMenuList.querySelectorAll("li");
    const up = document.querySelector(".up");
    
    topMenuListLi[0].addEventListener("click", ()=>{
        let scroll = ()=> {
            let timiout;
            if( Math.floor(window.pageYOffset) <= 625){
                window.scrollBy(0,11);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  >= 645){
                window.scrollBy(0,-11);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) > 625 && Math.floor(window.pageYOffset) < 645){
                clearTimeout(timiout);
            }
        };
        scroll();
    });
    topMenuListLi[1].addEventListener("click", ()=>{
        let scroll = ()=> {
            let timiout;
            let offset = 3600;
            if( Math.floor(window.pageYOffset) <= offset-10){
                window.scrollBy(0,11);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  >= offset+10){
                window.scrollBy(0,-11);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) > offset-10 && Math.floor(window.pageYOffset) < offset+10){
                clearTimeout(timiout);
            }
        };
        scroll();
    });
    topMenuListLi[2].addEventListener("click", ()=>{
        let scroll = ()=> {
            let timiout;
            let offset = 4300;
            if( Math.floor(window.pageYOffset) <= offset-10){
                window.scrollBy(0,11);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  >= offset+10){
                window.scrollBy(0,-11);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) > offset-10 && Math.floor(window.pageYOffset) < offset+10){
                clearTimeout(timiout);
            }
        };
        scroll();
    });
    up.addEventListener("click", ()=>{
        let scroll = ()=> {
            let timiout;
            let offset = 0;
            if( Math.floor(window.pageYOffset) <= offset-5){
                window.scrollBy(0,15);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  >= offset+5){
                window.scrollBy(0,-30);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) < offset){
                clearTimeout(timiout);
            }
        };
        scroll();
    });
};
export default mainScroll;