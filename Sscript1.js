let subs = document.getElementById("sub");
let tb = document.getElementById("tabody");
let i = 0;
subs.addEventListener('click',function(){intake()});
function intake(){
i++;
let events = document.querySelector("#events").value;
let dates = document.querySelector("#dates").value;
window.localStorage.setItem("events" + i, events);
window.localStorage.setItem("dates" +i, dates);
let fevents = window.localStorage.getItem("events"+i);
let fdates = window.localStorage.getItem("dates"+i);
tb.innerHTML += "<tr><td>" + fevents + "</td><td>" + fdates + "</td><td><button class='delete' id='delbut"+i+"' onclick='delremove(" + i + ")'>DELETE</button></td></tr>";
let cc = i;
window.localStorage.setItem("count",(cc));
}

function delremove(c){
if(c == parseInt(window.localStorage.getItem("count"))){
let elem = document.getElementById("delbut"+c);
elem.closest("tr").remove();
window.localStorage.removeItem("events"+c);
window.localStorage.removeItem("dates"+c);
let cc = window.localStorage.getItem("count");
window.localStorage.setItem("count",(cc-1));
i--;
}
else{
    let elem = document.getElementById("delbut"+c);
    elem.closest("tr").remove();
    window.localStorage.removeItem("events" + c);
    window.localStorage.removeItem("dates"+c);
    let cc = window.localStorage.getItem("count");
    for(i=c;i<cc;i++){
        let bevent = window.localStorage.getItem("events"+ (i+1));
        let bdate = window.localStorage.getItem("dates"+ (i+1));
        window.localStorage.setItem("events"+ i, bevent);
        window.localStorage.setItem("dates"+ i, bdate);
    }
    window.localStorage.setItem("count",(cc-1));
    i--;
}
}
function addele(){
    if(localStorage.getItem("count"))
    {
    for(let j=1;j<=parseInt(window.localStorage.getItem("count"));j++)
    {
        let fevents = window.localStorage.getItem("events"+j);
        let fdates = window.localStorage.getItem("dates"+j);
        tb.innerHTML += "<tr><td>" + fevents + "</td><td>" + fdates + "</td><td><button class='delete' id='delbut"+j+"' onclick='delremove(" + j + ")'>DELETE</button></td></tr>";       
    }
        for(let j=1;j<=parseInt(window.localStorage.getItem("count"));j++)
{
    if((window.localStorage.getItem("events"+j) === "null")||(window.localStorage.getItem("events"+j) === null))
    {
        if(j == parseInt(window.localStorage.getItem("count"))){
            let elem = document.getElementById("delbut"+j);
            elem.closest("tr").remove();
            window.localStorage.removeItem("events"+j);
            window.localStorage.removeItem("dates"+j);
            let cc = window.localStorage.getItem("count");
            window.localStorage.setItem("count",(cc-1));
            }
        else{
        let elem = document.getElementById("delbut"+j);
        elem.closest("tr").remove();
        window.localStorage.removeItem("events" + j);
        window.localStorage.removeItem("dates"+j);
        let cc = window.localStorage.getItem("count");
        for(i=j;i<cc;i++){
            let bevent = window.localStorage.getItem("events"+ (i+1));
            let bdate = window.localStorage.getItem("dates"+ (i+1));
            window.localStorage.setItem("events"+ i, bevent);
            window.localStorage.setItem("dates"+ i, bdate);
        }
        window.localStorage.setItem("count",(cc-1));   
    }
   
}
}
    i = window.localStorage.getItem("count");
    }
}

window.onload = addele();