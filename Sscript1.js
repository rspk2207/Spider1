let subs = document.getElementById("sub");
let tb = document.getElementById("tabody");
let i = 1;
subs.addEventListener('click',function(){intake()});
function intake(){
let events = document.querySelector("#events").value;
let dates = document.querySelector("#dates").value;
tb.innerHTML += "<tr><td>" + events + "</td><td>" + dates + "</td><td><button class='delete' id='" + i + "' onclick='delremove(" + i + ")'>DELETE</button></td></tr>";
i++;
}
function delremove(c){
let elem = document.getElementById(c);
elem.closest("tr").remove();
}