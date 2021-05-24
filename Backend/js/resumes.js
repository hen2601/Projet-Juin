"use strict";


function CasPositif(){
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:82/recupererNombreCasPositifsActuellement", true);
    xhr.onload = function (){
        let CasPositifsAct = JSON.parse(xhr.responseText);
        for(let i in CasPositifsAct){
            document.getElementById("nombreMalades").innerHTML += CasPositifsAct[i].CasCovidAct;
            console.log(CasPositifsAct [i].CasCovidAct);
        }
    }
    xhr.send();
    return false;
}



function TestRecents() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:82/recupererTestRecents", true);
    xhr.onload = function () {
        let testRecents = JSON.parse(xhr.responseText);
        for (let i in testRecents) {
            document.getElementById("nombreTests").innerHTML += testRecents[i].testRecent;
        }
    }
    xhr.send();
    return false;
}