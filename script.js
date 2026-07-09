const btn=document.getElementById("themebtn");
btn.onclick=()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.innerHTML="☀️";
    } else {
        btn.innerHTML="🌙";
    }
}