let ftime = document.getElementById("clock");
function time()
{
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hour = time.getHours();
    sec = mod(sec);
    min = mod(min);
    hour = mod(hour); 
    ftime.innerHTML = "<br>" + hour + ":" + min + ":" +sec;
}    
function mod(numb)
{
    if(numb<10)
    {
        numb = "0" + numb;
    }
    return numb;
}
setInterval(time,1000);