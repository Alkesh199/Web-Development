const slides = document.getElementsByClassName("slideItem");
console.log(slides);

let flag = 0;

function slideController(btnFlag){
    if(btnFlag==-1){
        flag-=1;
    
    }
    else{
        flag+=1;
    }
     
    if(flag>=slides.length){
        flag =0;

    }

    if(flag<=-1){
        flag=slides.length-1;
    }
    for(let ele of slides){
        ele.style.display="none";
    }
    
    slides[flag].style.display="block";

}

//click on next 