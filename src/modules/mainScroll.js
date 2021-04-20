const mainScroll = ()=>{
    const topMenu = document.querySelector(".top-menu");
    const topMenuList = topMenu.querySelector("ul");
    const topMenuListLi = topMenuList.querySelectorAll("li");
    
    let position;
    topMenuListLi[0].addEventListener("click", ()=>{
        //alert("LOL")
        function sayHi() {
            window.scrollBy(0,10);
            setTimeout(sayHi, 10);
        };
    
        sayHi();
        
    })

  
};
export default mainScroll;