const headerPopup = ()=>{
    const callBack = document.getElementById("callback");
    const callbackBtn = document.querySelector(".callback-btn");
    const modalOverlay  = document.querySelector(".modal-overlay");
    const modalClose = document.querySelector(".modal-close");
    const header = document.querySelector(".header");

    header.addEventListener("click",(e)=>{
        if(e.target.classList.contains("callback-btn")){
            callBack.style.display = "block";
            modalOverlay.style.display = "block";
        }
    });
    modalClose.addEventListener("click",()=>{
            callBack.style.display = "none";
            modalOverlay.style.display = "none";    
    });
    modalOverlay.addEventListener("click",()=>{
        callBack.style.display = "none";
        modalOverlay.style.display = "none";    
    });
};
export default headerPopup;