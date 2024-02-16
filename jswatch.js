var startbtn=document.getElementById("startbtn");
var  lapbtn=document.getElementById("lapbtn");
var  timecount = document.getElementById("timelabel");
var hr=0,min=0,sec=0,counter=0;
var lapCounter=1;

var id;

startbtn.addEventListener("click",function(){
   
    if(startbtn.innerHTML=="start")
    {
        startbtn.innerHTML = "Stop"; 
        startbtn.style.color="red";
        startbtn.style.backgroundColor="rgb(236, 130, 130)";
        lapbtn.innerHTML="lap";
         
        id= setInterval(function(){
        var min ,sec ,milisec;
        sec=parseInt(counter/100);
        milisec=counter%100;
        sec=sec%60;
        min=parseInt(sec/60);
       

         if(milisec < 10){//append 
             milisec = '0' + milisec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        timecount.innerHTML=min + ":"+sec + ":" +milisec ;
        console.log(counter);
        counter++;

        },6);
    }

    else if(startbtn.innerHTML=="Stop")
    {
       startbtn.innerHTML="start";
       lapbtn.innerHTML="reset";
       startbtn.style.color="green";
       startbtn.style.backgroundColor="rgb(154, 245, 154)";
       clearInterval(id);
    }
})


       lapbtn.addEventListener("click",function(){
       
        var laplist=document.getElementById("lap_list");
         if(lapbtn.innerHTML=="lap")
         {
           var lapdiv = document.createElement("div");
           lapdiv.style.display = "flex";
           lapdiv.style.alignItems = "center";
           lapdiv.style.justifyContent = "space-between";
           lapdiv.style.borderTop = "1px solid grey";
            lapdiv.style.backgroundColor = "grey";
            lapdiv.style.color = "white";
           lapdiv.style.margin = "30px";
           laplist.appendChild(lapdiv);

          


           var lap_alpha = document.createElement("div");
           lap_alpha.innerText="LAP"+ lapCounter;
           lap_alpha.style.left="20px";
           lap_alpha.style.padding="20px";
           lap_alpha.style.fontSize="20px";
           lap_alpha.style.display="flex";
           lapCounter++;
           lapdiv.appendChild(lap_alpha);
          

            
          var lap_time=document.createElement("div");
           lap_time.innerText=document.getElementById("timelabel").innerHTML;     
           //console.log(document.getElementById("timelabel").innerHTML);      
           //lap_alpha.style.padding="20px";
           lap_alpha.style.fontSize="20px";
           lap_alpha.style.top="20px";
           lapdiv.appendChild(lap_time);
           }
         else if(lapbtn.innerHTML=="reset")
         {
            laplist.innerHTML="";
            timecount.innerHTML="00:00:00";
            lapCounter=1;
            count=1;
         }

       })
     
