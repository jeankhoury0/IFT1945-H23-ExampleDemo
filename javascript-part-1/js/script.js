// Copyright Jean Khoury. 2023. All Rights Reserved.
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/**
 * Les functions de notre page 
 */


/**
 * function simple qui affiche une alerte dans le navigateur
 * (peut être utilisé pour tester que notre code est bien importé)
 */
function displayHelloWorld() {
    alert("Clicked on Hello World")
}

/**
 * function simple qui affiche une alerte dans le navigateur
 * avec l'input de ```example-2-form-nom```
 */
function showNameInput(){
    // aller cherche le input avec le id "example-2-form-nom" 
    var inputName = document.getElementById("example-2-form-nom").value
    
    // alert avec le inputName. afficher dans un string "Votre input est Jean" 
    // alert(inputName + " est votre input");
    
    // templating, better way V
    alert(`${inputName} est votre input`)
}

/**
 * function qui vide le contenu du champ de formulaire Nom
 */
function clearNameInput(){
    var inputName = document.getElementById("example-2-form-nom").value = ""
}

/**
 * Function qui autofill le text qu'on lui passe en argument (dans les parenthèses)
 * @param {string} name le nom de la personne à écrire dans le formulaire nom
 */
function autofillNameInput(name){
    document.getElementById("example-2-form-nom").value = name;
} 


function parsedContentSansFormat2(){
    var output = document.getElementById("parsed-format");
    var salles = master_data.salles;
    console.log(salles)
    output.innerText = ""
    for (var i in salles){
        var element = salles[i]
        console.log(element.nom)
        // output.innerText = output.innerText + element.nom
        output.innerText += (" " + element.nom)
    }
}

function parseContentAvecFormat(){
    var output = document.getElementById("parsed-avec-format");
    var salles = master_data.salles;
    output.addEventListener("change", console.log("changed"))
    for(var i in salles){
        var option_el = document.createElement("option")
        option_el.text = salles[i].nom
        output.appendChild(option_el)
    }
}

function parsedContentSansFormat(){
    var output = document.getElementById("parsed-format")
    var salles = master_data.salles
    output.innerText = ""
    console.log(salles)
    for (var i in salles){
        var element = salles[i]
        console.log(element.nom)
        output.innerHTML += element.nom + "<br>"
    }
}

// execution à chaques chargement de la page
// parsedContentSansFormat2()
parseContentAvecFormat()
// comment faire une addition
// comment faire un tableau dans un autre document
// container fluid

