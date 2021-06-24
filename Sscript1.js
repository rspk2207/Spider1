let subs = document.getElementById("sub");
let tb = document.getElementById("tabody");
let i = 0;
subs.addEventListener('click',function(){intake()});
function intake(){
i++;
let events = document.querySelector("#events").value;
let dates = document.querySelector("#dates").value;
window.localStorage.setItem("event" + i, events);
window.localStorage.setItem("date" +i, dates);
let fevents = window.localStorage.getItem("event"+i);
let fdates = window.localStorage.getItem("date"+i);
tb.innerHTML += "<tr><td>" + fevents + "</td><td>" + fdates + "</td><td><button class='delete' id='" + i + "' onclick='delremove(" + i + ")'>DELETE</button></td></tr>";
let cc = document.querySelectorAll("tr").length;
window.localStorage.setItem("count",(cc-1));
}
function delremove(c){
if(c == parseInt(window.localStorage.getItem("count"))){
let elem = document.getElementById(c);
elem.closest("tr").remove();
window.localStorage.removeItem("event" + c);
window.localStorage.removeItem("date"+c);
let cc = document.getElementsByTagName("tr").length;
window.localStorage.setItem("count",(cc-1));
i--;
}
else{
    let elem = document.getElementById(c);
    elem.closest("tr").remove();
    window.localStorage.removeItem("event" + c);
    window.localStorage.removeItem("date"+c);
    let cc = window.localStorage.getItem("count");
    for(i=c;i<cc;i++){
        let bevent = window.localStorage.getItem("event"+ (i+1));
        let bdate = window.localStorage.getItem("date"+ (i+1));
        window.localStorage.setItem("event"+ i, bevent);
        window.localStorage.setItem("date"+ i, bdate);
    }
    window.localStorage.setItem("count",(cc-1));
}
}
function addele(){
    if(localStorage.getItem("count"))
    {
    for(let j=1;j<=(window.localStorage.getItem("count"));j++)
    {
        let fevents = window.localStorage.getItem("event"+j);
        let fdates = window.localStorage.getItem("date"+j);
        tb.innerHTML += "<tr><td>" + fevents + "</td><td>" + fdates + "</td><td><button class='delete' id='" + j + "' onclick='delremove(" + j + ")'>DELETE</button></td></tr>";       
        i = j;
    }
}
}

window.onload = addele();