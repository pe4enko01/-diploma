const topSlider = ()=>{
    const topSlider = document.querySelector('.top-slider');
    const slideDiv = topSlider.querySelectorAll(".head-slider");

    slideDiv[0].style.display = "block";
    slideDiv[1].style.display = "none";
    slideDiv[2].style.display = "none";

    let count = 1;
    setInterval(()=>{    
        slideDiv[0].style.display = "none";
        slideDiv[1].style.display = "none";
        slideDiv[2].style.display = "none";
        slideDiv.forEach((item,i)=>{
            if(i === count){
                item.style.display = "block";
            }
        });
        count++;
        if(count >= 3){
            count = 0;
        }
    },3000);
};
export default topSlider;