const buttonServices = ()=>{
    const buttonSev = document.querySelector(".button-services");
    const callBack = document.getElementById("callback");
    const modalOverlay  = document.querySelector(".modal-overlay");

    buttonSev.addEventListener("click",(e)=>{
            callBack.style.display = "block";
            modalOverlay.style.display = "block";
    });  
};
export default buttonServices;