const url1=['./style/w1.jpg','./style/w2.jpg','./style/w3.jpg','./style/w.jpg'];
const thumb=document.querySelector(".th");
document.querySelector(".th").addEventListener("click",function(){
 const k=getComputedStyle(thumb);
 var back=k.getPropertyValue('--url');
back=back.substring(back.lastIndexOf('/')+1);

    const fthumb=document.querySelector(".fthumb");
    fthumb.style.background="url(./style/"+back;
    fthumb.style.backgroundPosition="center";
    fthumb.style.backgroundSize="cover";
    fthumb.style.animationName="appear";
   
    setTimeout(()=>{   
       const thumb2=document.querySelector(".thumb");
      thumb2.style.background="url(./style/"+back;
      thumb2.style.backgroundPosition="center";
      fthumb.style.animationName="none";
      thumb2.style.backgroundSize="cover";
   },900);

          document.querySelectorAll(".th").forEach((kk)=>{
            
            var no=kk.dataset.no;
            no=Number(no)+1;
            kk.dataset.no=no;
            console.log(no);
              if(no<=3){
                 kk.style.setProperty("--url","url("+url1[no]+")");
             kk.style.background="url("+url1[no]+")";
               }
               else{
                 kk.dataset.no=no-4;
                 kk.style.setProperty("--url","url("+url1[0]+")");
                 kk.style.background="url("+url1[0]+")";
               }
               console.log(kk);
             kk.style.backgroundPosition="center";
             kk.style.backgroundSize="cover";
            });
  
    });
    setInterval(function(){
      const k=getComputedStyle(thumb);
 var back=k.getPropertyValue('--url');
back=back.substring(back.lastIndexOf('/')+1);

    const fthumb=document.querySelector(".fthumb");
    fthumb.style.background="url(./style/"+back;
    fthumb.style.backgroundPosition="center";
    fthumb.style.backgroundSize="cover";
    fthumb.style.animationName="appear";
   
    setTimeout(()=>{   
       const thumb2=document.querySelector(".thumb");
      thumb2.style.background="url(./style/"+back;
      thumb2.style.backgroundPosition="center";
      thumb2.style.backgroundSize="cover";
   },850);
   setTimeout(()=>{
      fthumb.style.animationName="none";
     
   },850);

          document.querySelectorAll(".th").forEach((kk)=>{
            
          var no=kk.dataset.no;
          no=Number(no)+1;
          kk.dataset.no=no;
          console.log(no);
            if(no<=3){
               kk.style.setProperty("--url","url("+url1[no]+")");
           kk.style.background="url("+url1[no]+")";
             }
             else{
               kk.dataset.no=no-4;
               kk.style.setProperty("--url","url("+url1[0]+")");
               kk.style.background="url("+url1[0]+")";
             }
             console.log(kk);
           kk.style.backgroundPosition="center";
           kk.style.backgroundSize="cover";
          });

    },6000);