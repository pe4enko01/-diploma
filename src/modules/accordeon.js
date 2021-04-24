const accordeon = ()=>{
    const accordeon = document.querySelector(".accordeon");
    const element = document.querySelectorAll(".element");
    const elementContent = accordeon.querySelectorAll(".element-content");

    accordeon.addEventListener("click",(event)=>{
        if(event.target.parentElement.classList.contains('active') && event.target.closest(".title")){
            event.target.parentElement.childNodes[3].style.display = "none";
            event.target.parentElement.classList.remove("active");
        }else{
            element.forEach((item)=>{
                item.classList.remove("active");
            });
            elementContent.forEach((item)=>{
                item.style.display = "none";
            });
            event.target.parentElement.classList.add("active");
            event.target.parentElement.childNodes[3].style.display = "block";
        }
    });  
};
export default accordeon;