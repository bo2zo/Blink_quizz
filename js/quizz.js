const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");
const q3 = document.querySelector("#q3");
const q4 = document.querySelector("#q4");



//reset 
const logo = document.querySelector(".logo");
const mon_btn = document.querySelector("#mn-btn");

const result = {};
result.q1="r1";
result.q2="r2";
result.q3="r1";
result.q4="r3";

let q = 1;
let nbPoints = 0;

mon_btn.addEventListener('click',preInit);

function preInit(){
q=1;
nbPoints=0;
document.querySelector(".les_niveaux").style.display="none";
document.querySelector(".rep_avance").style.display="none";
document.querySelector(".rep_debutant").style.display="none";
document.querySelector(".rep_intermediaire").style.display="none";
document.querySelector(".container").style.display="block";
document.querySelector("#titre").style.display="";


init();
}

init();

function init(){
    let caroucell = document.querySelectorAll(".q");
    for (let elt of caroucell){
        elt.style.display = "none";
    }
    document.querySelector(".les_niveaux").style.display = "none";
    affichagequestion();
}

function affichagequestion(){
  switch(q){

    case 2: 
        q2.style.display = "block";
        addListener(q2);
         break; 
            case 3: 
                q3.style.display = "block";
                addListener(q3);
                 break; 
                    case 4: 
                       q4.style.display = "block";
                       addListener(q4);
                        break;

           default:
            q1.style.display = "block";
            addListener(q1);
            break;
  }

}

function addListener(elt){
    let questions = document.querySelectorAll('#' + elt.id +' .r' );
    for (elt of questions){
        elt.addEventListener('click', check);
    }
    
}

function check(event){
//verif de la rep (je compte les points)
//appeler uen focntion qui incremente q et qui gère si on est encore sur les question ou affiche le resultat 
//appel de la fonction init et affichage question suivante au cas ou
    let position = event.target.id.indexOf("r");
    let question = event.target.id.slice(0, position);
    let reponse = event.target.id.slice(position);
    if(result[question] == reponse){
        switch(question){
            case "q1":
                nbPoints += 10;
                break;
            case "q2":
                nbPoints += 20;
                break;
            case "q3":
                nbPoints += 30;
                break;
            case "q4":
                nbPoints += 40;
                break;
            default:
                break;
        }
    }
    etapeSuivante();
}

function etapeSuivante(){
    q++;
    if(q <= 4 ){
    init();
    } else{
      level();
}
}
function level(){
    document.querySelector(".container").style.display="none";
    document.querySelector("#titre").style.display="none";
    document.querySelector(".les_niveaux").style.display="flex";
    if(nbPoints < 40){
        document.querySelector(".rep_debutant").style.display = "flex";
    } else if(nbPoints >= 50 && nbPoints <= 70){
        document.querySelector(".rep_intermediaire").style.display = "flex";
    } else{
        document.querySelector(".rep_avance").style.display = "flex";
    }
    
}