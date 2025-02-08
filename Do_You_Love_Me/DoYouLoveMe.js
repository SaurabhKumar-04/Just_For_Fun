let flag=false;
let nocount=0;
let yescount=0;
document.querySelector("#no").addEventListener("mouseenter",function(){
    if(window.innerWidth>400){
    let leftp=Math.floor(Math.random()*90);
    let rightp=Math.floor(Math.random()*90);
 
    this.style.position="absolute";
    this.style.left=leftp+"%";
    this.style.top=rightp+"%";
    this.style.transition="1s";
    }
});


document.querySelector("#no").addEventListener("mouseenter",function(){
    if(!flag){
    let imageb = document.querySelector(".imagebox"); 
    imageb.style.backgroundImage = "url('bubu_sad.jfif')";
    }
});

document.querySelector("#no").addEventListener("click",function(){
   
    let imageb = document.querySelector(".imagebox"); 
    nocount++;
    yescount=0;
    flag=true;
    if(nocount==1){
        imageb.style.backgroundImage = "url('Bubu Angry Bubu Fierce Sticker – Bubu angry Bubu fierce Bubu – discover and share GIFs.gif')";
        let  qbox=document.querySelector(".questionbox");
        qbox.innerHTML="OH REALLY???";
        }
    if(nocount>=2){
    imageb.style.backgroundImage = "url('bubu_beating_dudu.gif')";
    let  qbox=document.querySelector(".questionbox");
    qbox.innerHTML="I HATE YOU!";
    let btn1=document.querySelector("#no");
    let btn2=document.querySelector("#yes");
    btn1.style.display="none";
    btn2.style.visibility="hidden";
    }
});

document.querySelector("#yes").addEventListener("click", function () {
    yescount++;
    flag=true;
    nocount=0;
    if(yescount==1){
    let imageb = document.querySelector(".imagebox"); 
    imageb.style.backgroundImage = "url('Bubu Bubu Dudu Sticker – Bubu Bubu dudu Motki – discover and share GIFs.gif')";
    let  qbox=document.querySelector(".questionbox");
    qbox.innerHTML="I LOVE YOU TOO! <br> LET'S GO ON A DATE?";
}
  
    document.querySelector("#no").style.position="static";
    
    if(yescount==2){
        let imageb = document.querySelector(".imagebox"); 
        imageb.style.backgroundImage = "url('Tkthao219 Bubududu Sticker - Tkthao219 Bubududu Panda - Discover & Share GIFs.gif')";
        let  qbox=document.querySelector(".questionbox");
        qbox.innerHTML="YEAHH!!!";
        let btn1=document.querySelector("#no");
        let btn2=document.querySelector("#yes");
        btn1.style.display="none";
        btn2.style.visibility="hidden";
    }
});
document.querySelector("#yes").addEventListener("mouseover", function () {
    if(!flag){
        let imageb = document.querySelector(".imagebox"); 
    imageb.style.backgroundImage = "url('download.jfif')";
    }

});
document.querySelector("#yes").addEventListener("mouseout", function () {
   if(!flag){

    let imageb = document.querySelector(".imagebox"); 
    imageb.style.backgroundImage = "url('dudu_eye_close.gif')";
   } 

});

