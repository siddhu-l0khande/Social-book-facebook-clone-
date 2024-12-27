var settingsmenu = document.querySelector(".settingsmenu");
var darkbtn =document.getElementById("darkbutton")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settingsmenu-height");


}

darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("darktheme");
    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");

    }
    else{
        localStorage.setItem("theme","light");

        
    }




}

if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on")  ;
    document.body.classList.remove("darktheme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on")  ;
    document.body.classList.add("darktheme");

}
else{
    localStorage.setItem("theme","light");
}

localStorage.setItem("theme","dark");
localStorage.getItem("theme");
