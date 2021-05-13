"use strict";

function initialiserPage()
{
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:82/recupererVilles', true);
    xhr.onload = function () {
        let villes = JSON.parse(xhr.responseText);
        for (let i in villes) {
            document.getElementById("listeVilles").innerHTML += "<li>" + villes[i].ville + " " + villes[i].codeP + "</li>";
        }
    }
    xhr.send();
    return false;
}

function ajouterVille(formulaireVille)
{
    let codep =formulaireVille.codePostal.value;
    let ville=formulaireVille.nomVille.value;
    let o=new XMLHttpRequest();
    o.open('get','http://localhost:82/enregistrerVille?codepostal='+codep+'&nomville='+ville,true);
    o.send();
    o.onload = function(){
        if (xhr.readyState == 4){
            console.log("ok");        }else{            console.log("0");        }     }
    return false;
}