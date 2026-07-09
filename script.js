const btn=document.getElementById("themebtn");
btn.onclick=()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.innerHTML="☀️";
    } else {
        btn.innerHTML="🌙";
    }
}
const hour =new Date().getHours();
let greet="";
if(hour<12){ 
    greet="Good Morning";
}
else if (hour<18){
    greet="Good Afternoon";
}
else{
    greet="Good Evening";
}
document.getElementById("greeting").innerHTML=greet;
