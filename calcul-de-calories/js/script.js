function createSelectForEntree() {
  var selectElement = document.getElementById("command-entree-select");
  var labelElement = document.createElement("label");
  labelElement.for = "entree-selector";
  labelElement.innerText = "Entrée";
  selectElement.id = "entree-selector";
  selectElement.addEventListener("change", updateEntree)
  menu?.entrees.forEach((e) => {
    var option = document.createElement("option");
    option.text = e.name;
    option.value = e.id;
    selectElement.appendChild(option);
  });
}

function createSelectForRepas() {
  var selectElement = document.getElementById("command-repas-select");
  // addEventListener("change", updateRepas) est l'équivalent de faire "onchange='updateRepas()'" 
  selectElement.addEventListener("change", updateRepas)
  menu?.repas.forEach((e) => {
    var option = document.createElement("option");
    option.text = e.name;
    option.value = e.id;
    selectElement.appendChild(option);
  }); 
}

function updateEntree(evt){
    var selected_item =  menu.entrees[evt.target.selectedIndex-1] 
    console.log("Entree va être updater avec: ", selected_item)
    var imageElement = document.getElementById("commande-entree-img");
    var prixElement = document.getElementById("commande-entree-cal");
    
    prixElement.innerText = `${selected_item.calories}`
    imageElement.src = selected_item["image-url"];
    updatePricing()
}

function updateRepas(evt){
    //ici on pourrais aller chercher le menu en prenant
    // document.getElementById("command-repas-select").value
    var selected_item =  menu.repas[evt.target.selectedIndex-1] 
    console.log("Repas va être updater avec: ", selected_item)
    var imageElement = document.getElementById("commande-repas-img");
    var prixElement = document.getElementById("commande-repas-cal");
    
    prixElement.innerText = `${selected_item.calories}`
    imageElement.src = selected_item["image-url"];
    updatePricing()
}

function updatePricing(){
  // Je fais le calcul "statique" des éléments et je met à jours la valeur
  // Attention les selecteurs en CSS sont sur le <span> qui contient seulement des chiffres
  // le selecteur ne comporte pas le signe $.
  const TAX_RATE = 0.15
  var selected_sous_total = document.getElementById("cal-st")
  var selected_taxe = document.getElementById("cal-erreur")
  var selected_total = document.getElementById("cal-total")
  var selected_prix_repas = document.getElementById("commande-repas-cal").innerText;
  var selected_prix_entree = document.getElementById("commande-entree-cal").innerText;
  
  // Calculated value
  var ss_total = (+selected_prix_repas) + +selected_prix_entree
  var tax = ss_total * TAX_RATE
  
  selected_sous_total.innerText= ss_total.toFixed(2)
  selected_taxe.innerText = tax.toFixed(2)
  selected_total.innerText = (ss_total + tax).toFixed(2)
}

console.log(menu);
createSelectForEntree();
createSelectForRepas();
