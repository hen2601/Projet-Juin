"use strict";
let dateAuj = new Date();
let jourAuj = dateAuj.getDate();
let moisAuj = dateAuj.getMonth();
let anneeAuj = dateAuj.getFullYear();
let dateAct = "";
if((moisAuj >= 10) && (jourAuj >= 10)){
    dateAct = anneeAuj + "-" + moisAuj + "-" + jourAuj;
}
else if((moisAuj >= 10) && (jourAuj < 10)){
    dateAct = anneeAuj + "-" + moisAuj + "-0" + jourAuj;
}
else if((moisAuj < 10) && (jourAuj >= 10)){
    dateAct = anneeAuj + "-0" + moisAuj + "-" + jourAuj;
}
else{
    dateAct = anneeAuj + "-0" + moisAuj + "-0" + jourAuj;
}
function initPagePersonnes() {
    let positifNegatif;
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:82/recupererPersonnes', true);
    xhr.onload = function () {
        let listPersonnes = JSON.parse(xhr.responseText);

        for (let i in listPersonnes) {
            if ((listPersonnes[i].testResult===1)&&(dateAct < listPersonnes[i].expiration)){
                positifNegatif="oui";
            }
            else{
                positifNegatif="non";
            }
            document.getElementById("tbodyPersonnes").innerHTML += "<th> " + listPersonnes[i].id + "</th><th>" + listPersonnes[i].prenom + "</th><th>" + listPersonnes[i].nom + "</th><th>" + listPersonnes[i].dateDeNaissance + "</th><th>"+positifNegatif+"</th>";

        }


    }
    xhr.send();
    return false;
}