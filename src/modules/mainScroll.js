const mainScroll = ()=>{
    const topMenu = document.querySelector(".top-menu");
    const topMenuList = topMenu.querySelector("ul");
    const topMenuListLi = topMenuList.querySelectorAll("li");
    const up = document.querySelector(".up");
    
    let count = false;
    let count1 = false;
    let count2 = false;
    let count3 = false;
    topMenuListLi[0].addEventListener("click", ()=>{
        if(count1 || count2 || count3){
            return;
        }
        let scroll = ()=> {
            count = true;
            let timiout;
            if( Math.floor(window.pageYOffset) <= 625){
                window.scrollBy(0,13);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  >= 645){
                window.scrollBy(0,-13);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) > 625 && Math.floor(window.pageYOffset) < 645){
                clearTimeout(timiout);
                count = false;
            }
        };
        scroll();
    });
    topMenuListLi[1].addEventListener("click", ()=>{
        if(count || count2 || count3){
            return;
        }
        
        let scroll = ()=> {
            count1 = true;
            let timiout;
            let offset = 3160;
            if( Math.floor(window.pageYOffset) <= offset-10){
                window.scrollBy(0,13);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  >= offset+10){
                window.scrollBy(0,-13);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) > offset-10 && Math.floor(window.pageYOffset) < offset+10){
                clearTimeout(timiout);
                count1 = false;
            }
        };
        scroll();
    });
    topMenuListLi[2].addEventListener("click", ()=>{
        if(count1 || count || count3){
            return;
        }
        let scroll = ()=> {
            count2= true;
            let timiout;
            let offset = 3870;
            if( Math.floor(window.pageYOffset) <= offset-10){
                window.scrollBy(0,13);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  >= offset+10){
                window.scrollBy(0,-13);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) > offset-10 && Math.floor(window.pageYOffset) < offset+10){
                clearTimeout(timiout);
                count2 = false;
            }

        };
        scroll();
    });
    up.addEventListener("click", ()=>{
        if(count1 || count2 || count){
            return;
        }
        let scroll = ()=> {
            count3 = true;
            let timiout;
            let offset = 0;
            if( Math.floor(window.pageYOffset) <= offset-5){
                window.scrollBy(0,15);
                timiout = setTimeout(scroll, 1);
            }else if (Math.floor(window.pageYOffset)  > offset){
                window.scrollBy(0,-30);
                timiout = setTimeout(scroll, 1 );
            }else if (Math.floor(window.pageYOffset) <= offset){
                clearTimeout(timiout);
                count3 = false;
                console.log(count1);
            }
        };
        scroll();
    });
};
export default mainScroll;