// Copyright Jean Khoury. 2023. All Rights Reserved.
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/**
 * Fichier JSON qui stock les informations suivantes sur les salles de classes: 
 * * nom: nom de la salle 
 * * localisation: localisation de cette salle
 * * projecteur: variable de type Boolean (Vrai ou Faux) pour indiquer la 
 * présence d'un projecteur
 * * nombre-de-place: Entier qui indique le nombre de place disponible
 * * photo: attribut optionel avec un URL vers une image
 */
// 
var master_data = {
    "salles": [
        {
            "nom": "Labo",
            "localisation": "X-117",
            "projecteur": true,
            "nombre-de-place": 100,
            "photo": "../img/x117"
        },
        {
            "nom": "Labo2",
            "localisation": "X-118",
            "projecteur": true,
            "nombre-de-place": 10,
            "photo": "../img/x118"
        },
        {
            "nom": "Labo3",
            "localisation": "X-119",
            "projecteur": true,
            "nombre-de-place": 100,
            "photo": "../img/x119"
        },
        {
            "nom": "Labo4",
            "localisation": "X-120",
            "projecteur": false,
            "nombre-de-place": 23,
            // pas de photo ici
        }
    ]
}
