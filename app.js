
let tableau1 = [    {id:1, image: 'img/huile d olive.png', nom:'huile d olive', ingredient: 1,},
{id:2, image: 'img/courgette.png', nom:'courgette', ingredient: 2},
{id:3, image: 'img/maïs.png', nom:'maïs', ingredient: 3},
{id:4, image: 'img/pomme de terre.png', nom:'pomme de terre', ingredient: 4},
{id:5, image: 'img/tomate.png', nom:'tomate', ingredient: 5},
{id:6, image: 'img/carotte.png', nom:'carotte', ingredient: 6}  
]

let listes = [];

//////////////////////////////////////afficher les elememnt dans le tableau 1///////////////////////////////////////////////

tableau1.forEach(element => {

// recuperation de l'id tableau1    
let liste= document.getElementById("tableau1")
// creation d'une balise 
let creerListe= document.createElement("li")
// creation du bouton 
let btnAjouter= document.createElement("button")

//injecter un id different par boutons
btnAjouter.id=element.ingredient
//injecter les element du tableau dans les boutons
// recup par numero ingredient btnAjouter.innerHTML=element.ingredient
btnAjouter.innerHTML=`<img src="${element.image}">`
//(creer liste) est enfant de de (liste)
liste.appendChild(creerListe)
//(btnAjouter) est enfant de de (creerListe)
creerListe.appendChild(btnAjouter)


///////////////////////////////////////fonction pour envoyer les element dans le tableau 2 et afficher les resultats du tableau 3////////////////////////////////////

btnAjouter.addEventListener("click",function  (){

listes.push(element)
let index = tableau1.indexOf(element)
console.log(index)
tableau1.splice(index,1)//.forEach(item)
//copieTableau1.style.display="none";

//let copieTableau1 = [...tableau1]

console.log(tableau1)


//afficher les ingredients selectionnés et le resultat de recette (tableau 2 et 3)  

//listeTableau1();
listeTableau2();
listeTableau3();

})

}
); 

//////////////////////////////////////afficher les elememnt dans le Tableau 1/////////////////////////////////////////////// 


function listeTableau1(){
let showInfo1 = ""
tableau1.forEach(element => 
showInfo1 += 
`       
<div class="col-3">
<button><img src="${element.image}"></button> 
<h5 id=titreTableau1>${element.nom}</h5> 
</div>                  
`     
);

document.getElementById("tableau1").innerHTML=showInfo1;

}

//////////////////////////////////////afficher les elememnt dans le Tableau 2///////////////////////////////////////////////   

function listeTableau2(){
let showInfo = ""
listes.forEach(test => 
showInfo += 
`
<li class="list-group-item">
<div class="row">
        <div class="col">
        <img id="imgTableau2" src="${test.image}"/>
        </div>
        <div class="col">    
            <h6>${test.nom}</h6>                   
        </div>
        <div class="col"> 
            <span class="float-right" ><button " onclick="supprimerElement()"  class="btn btn-danger">X</button></span>
        </div>
</div>                    
</li>
`     
);

document.getElementById("tableau2").innerHTML=showInfo;

}
function supprimerElement (element){
tableau1.push(element)
let index = tableau1.indexOf(element)
console.log(index)
listes.splice(index,1)
}        



//////////////////////////////////////////////////////////tableau 3//////////////////////////////////////////////////////////

function listeTableau3(){
let pizzas = [
{id :1, nom:"Croque monsieur", explication:" etape 1 vous devez test poh poihsfpogvh ivpsdofuvh pouihp ouhsdfb pouh pdsofubh spdofihvp soihpoihfdv cjksmkdfuhv ncvmskdfhv iocspoidhf vpsodifhv", ingredients : [1,2,3]},
{id :2, nom:"Burger", explication:" etape 1 vous devez test poh poihsfpogvh ivpsdofuvh pouihp ouhsdfb pouh pdsofubh spdofihvp soihpoihfdv cjksmkdfuhv ncvmskdfhv iocspoidhf vpsodifhv", ingredients : [1]},
{id :3, nom:"salade de riz", explication:" etape 1 vous devez test poh poihsfpogvh ivpsdofuvh pouihp ouhsdfb pouh pdsofubh spdofihvp soihpoihfdv cjksmkdfuhv ncvmskdfhv iocspoidhf vpsodifhv", ingredients : [2,1]},
{id :4, nom:"risotto", explication:" etape 1 vous devez test poh poihsfpogvh ivpsdofuvh pouihp ouhsdfb pouh pdsofubh spdofihvp soihpoihfdv cjksmkdfuhv ncvmskdfhv iocspoidhf vpsodifhv", ingredients : [3]},
{id :5, nom:"Gateau au chocolat", explication:" etape 1 vous devez test poh poihsfpogvh ivpsdofuvh pouihp ouhsdfb pouh pdsofubh spdofihvp soihpoihfdv cjksmkdfuhv ncvmskdfhv iocspoidhf vpsodifhv", ingredients : [1,3]}
];
// ... copie et eclate le tableau d'origine 
let PizzaList = [...pizzas];

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

for( let ingre of listes ){

//piz devient pizzaList
PizzaList = PizzaList.filter(function( piz ){

//compare les ingre de let pizzaList avec listes   
return piz.ingredients.includes( ingre.ingredient );

});

//////////////////////////////////////afficher les elememnt dans le Tableau 3/////////////////////////////////////////////// 



let showInfo3 = ""            
PizzaList.forEach(test3 => 
showInfo3 += `

<li class="list-group-item m-1 ">
    <div class="row ">
         <h2>${test3.nom}</h2>
    </div>
</li>
`

);



document.getElementById("tableau3").innerHTML=showInfo3;



}
console.log(listes)
console.log( PizzaList );
//fonction pour afficher les recettes trouvées
const afficherRecette = document.getElementById("tableau3")

afficherRecette.addEventListener("click", ()=>{
/*const instruction = document.getElementById(".recette")*/
/*instruction.classList.toggle("voirRecette");*/
document.getElementById('detail').innerHTML =
pizzas.forEach (liste=> {
    liste.explication
    console.log(liste.explication)
}) 
/*console.log("ok")*/
})

}







/////////////////////////////////////notes///////////////////////////////////////////////
/*
<a
onClick={() => {
window.location.href = 'details.html';
}}
>
Go to Details
</a>
*/

//liste.sort() pour ranger par ordre alphabétique

/*function listeTableau(){
let i=0
for(i=0; i< listes.length; i++) {

// recuperation de l'id listes (tableau 1)   
let liste= document.getElementById("tableau1")
// creation d'une balise li
let creerListe= document.createElement("li")
// creation du bouton 
let btnAjouter= document.createElement("button")

//injecter un id different par boutons
btnAjouter.id=listes[i]
//injecter les element du tableau dans les boutons
btnAjouter.innerHTML=listes[i]

//(creer liste) est enfant de de (liste)
liste.appendChild(creerListe)
//(btnAjouter) est enfant de de (creerListe)
creerListe.appendChild(creerListe)    
}
}

//let liste= document.getElementById("tableau1")
//let creerListe= document.createElement("li")
//creerListe.innerHTML="elementAjouté"
//creerListe.id="monId"
//creerListe.className="maClass"
//creerListe.style.backgroundColor="blue"
//liste.appendChild(creerListe)
*/        