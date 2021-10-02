let title="Code With Kastar";
let counter=0;
var colors=["brown","red","cyan","green" ,"brown","blue","yellow","darkred","yellow","rgb(238,45,65)","rgb(238,45,65)","rgb(238,45,65)","#724f4f","#5f4f4f","#1d6827","#5c33b9","#c225a0","#944984","#277075","#a7c71a","#b0bd76","#32332e","#b8a81b","#b84d1b"];
var hello=["brown","red","cyan","green" ,"brown","blue","yellow","darkred","yellow","rgb(238,45,65)","rgb(238,45,65)","rgb(238,45,65)","#724f4f","#5f4f4f","#1d6827","#5c33b9","#c225a0","#944984","#277075","#a7c71a","#b0bd76","#32332e","#b8a81b","#b84d1b"];

function animationText(){
    let color=colors[Math.floor(Math.random()*colors.length)];
    let tophead=colors[Math.floor(Math.random()*hello.length)];
    
    document.getElementById("foranimetext0").style.color=color;
    document.getElementById("foranimetext1").style.color=tophead;
    document.getElementById("foranimetext0").innerHTML=title.slice(0,counter);
    
    if(counter==title.length){
        counter=0;
        
        
    }
    
    counter++;
   
}
setInterval(animationText,100);




