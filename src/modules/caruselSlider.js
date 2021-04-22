const caruselSlider = ()=>{
    const sliderTrack = document.querySelector(".slider-track");
    const sliderItem = document.querySelectorAll(".slid");

    const prevButton = document.querySelector(".arrow-left");
    const nextButton = document.querySelector(".arrow-right");

    let counter = 2;
    const size = sliderItem[0].clientWidth + 10 ;

    sliderTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextButton.addEventListener("click", ()=>{
        if(counter >= sliderItem.length -3) return;
        sliderTrack.style.transition = 'transfotm 0.5s , ease-in-out 0.5s';
        counter++;
        sliderTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';


    });

    prevButton.addEventListener("click", ()=>{
        if(counter <= 1) return;
        sliderTrack.style.transition = "transfotm 0.5s , ease-in-out 0.5s";
        counter--;
        sliderTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';

    });
    
    sliderTrack.addEventListener("transitionend",()=>{
        if(sliderItem[counter].id === "firstClone"){
            sliderTrack.style.transition = "none";
            counter = 2;
            sliderTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';
            
        };

        if(sliderItem[counter].id === "lastClone"){
            sliderTrack.style.transition = "none";
            counter = 7 ;
            sliderTrack.style.transform = 'translateX(' + (-size * counter) + 'px)';     
        }
    })
};
export default caruselSlider;