"use strict";

function nombreCas() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:82/recuperercas', true);
    xhr.onload = function () {
        let listCas = JSON.parse(xhr.responseText);
        for(let i in listCas){
            document.getElementById("tbodyNombreMaladesParVille").innerHTML+="<tr><th>" + listCas[i].codeP + "</th><th>" + listCas[i].ville + "</th><th>" + listCas[i].casCovid + "</th></tr>";
        }

    }
    xhr.send();
    return false;
}
function visitePersonnes(){

    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:82/recupererPersonnes', true);
    xhr.onload=function (){
        let test=JSON.parse(xhr.responseText);
        for(let i in test){
            document.getElementById( "personneVisiteVille").innerHTML+= '<option> ' + test[i].nom  + '</option>';


        }
    }
    xhr.send();
        return false;
        }
function visiteVille(){

    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:82/recupererVilles', true);
    xhr.onload=function (){
        let villes=JSON.parse(xhr.responseText);
        for(let i in villes){
            document.getElementById( "villeVisitee").innerHTML+= '<option> ' + villes[i].ville + '</option>';


        }
    }
    xhr.send();
    return false;
}
function EnregistrerVisite(){
    let xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:82/', true);
    xhr.onload=function (){
        let villes=JSON.parse(xhr.responseText);
        for(let i in villes){
            document.getElementById( "villeVisitee").innerHTML+= '<option> ' + villes[i].ville + '</option>';


        }
    }
    xhr.send();
}












