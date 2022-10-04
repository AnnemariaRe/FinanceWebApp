var before = new Date().getTime();  
window.onload = Pageloadtime;

function Pageloadtime() {  
    var after = new Date().getTime();  
    document.getElementById("load-time").innerHTML = "Page load time: " + (after - before) / 1000  + " sec";  
}  