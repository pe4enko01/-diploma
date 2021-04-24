const upButton = ()=>{
    const up = document.querySelector(".up"); 
    if(window.pageYOffset > 635){
        up.style.display = "block";
    }else{
        up.style.display = "none";
    }
    
    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 635){
            up.style.display = "block";
        }else{
            up.style.display = "none";
        }
        
      });

};
export default upButton;