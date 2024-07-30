document.body.addEventListener("mousemove",function(e){
    const cursor=document.querySelector("#cursor");
    cursor.style.position="fixed";
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
    cursor.style.transform="translate(-50%,-50%)";
});
const thumb=document.querySelector(".th");
const url=['./w1.jpg','./w2.jpg','./w3.jpg','./w.jpg'];
thumb.addEventListener("click",function(){
    var k=getComputedStyle(thumb);
    var back=k.getPropertyValue('--url');
    back="url(./style"+back.substring(back.indexOf('/'));
   const fthumb=document.querySelector(".fthumb");
   fthumb.style.background=back;
   fthumb.style.backgroundSize="cover";
   fthumb.style.backgroundPosition="center";
   fthumb.style.animationName="appear";
   const cover=document.querySelector(".thumb");
   setTimeout(()=>{
   cover.style.background=back;
   cover.style.backgroundSize="cover";
   cover.style.backgroundPosition="center";
   fthumb.style.animationName="none";
   },800);
   document.querySelectorAll(".th").forEach((kk)=>{
        var no=kk.dataset.no;
        console.log(no);
        no=Number(no)+1;
        kk.dataset.no=no;
        if(no<=3){
            kk.style.setProperty('--url',"url("+url[no]+")");
            kk.style.background="url(./style/"+url[no]+")";
            kk.style.backgroundSize="cover";
            kk.style.backgroundPosition="center";
        }
        else{
            kk.dataset.no=no-4;
            kk.style.setProperty('--url',"url("+url[0]+")");
            kk.style.background="url(./style/"+url[0]+")";
            kk.style.backgroundSize="cover";
            kk.style.backgroundPosition="center"; 
        }
    });
});
setInterval(()=>{
    var k=getComputedStyle(thumb);
    var back=k.getPropertyValue('--url');
    back="url(./style"+back.substring(back.indexOf('/'));
   const fthumb=document.querySelector(".fthumb");
   fthumb.style.background=back;
   fthumb.style.backgroundSize="cover";
   fthumb.style.backgroundPosition="center";
   fthumb.style.animationName="appear";
   const cover=document.querySelector(".thumb");
   setTimeout(()=>{
   cover.style.background=back;
   cover.style.backgroundSize="cover";
   cover.style.backgroundPosition="center";
   fthumb.style.animationName="none";
   },800);
   document.querySelectorAll(".th").forEach((kk)=>{
        var no=kk.dataset.no;
        console.log(no);
        no=Number(no)+1;
        kk.dataset.no=no;
        if(no<=3){
            kk.style.setProperty('--url',"url("+url[no]+")");
            kk.style.background="url(./style/"+url[no]+")";
            kk.style.backgroundSize="cover";
            kk.style.backgroundPosition="center";
        }
        else{
            kk.dataset.no=no-4;
            kk.style.setProperty('--url',"url("+url[0]+")");
            kk.style.background="url(./style/"+url[0]+")";
            kk.style.backgroundSize="cover";
            kk.style.backgroundPosition="center"; 
        }
    });
},6000);