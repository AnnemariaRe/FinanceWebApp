var before = new Date().getTime();  
    window.onload = Pageloadtime;

    function Pageloadtime() {  
        var after = new Date().getTime();  
        pageloadtime = (after - before) / 1000  
    
        document.getElementById("load-time").innerHTML = "Page load time: " + pageloadtime + " sec";  
    }  