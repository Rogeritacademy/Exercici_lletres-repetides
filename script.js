/*jshint esversion: 6 */

/*
Fase 1

Crea una array amb el teu nom on cada posició correspongui a una lletra.
Fes un bucle que recorri l’array i mostri per consola cadascuna de les lletres.

Fase 2

Al bucle, si la lletra és una vocal imprimeix a la consola: ‘VOCAL’. Sinó, imprimeix: ‘CONSONTANT’.
Es pot fer de diferents formes:
Creant una nova array que contingui les vocals (A, E, I, O, U) i comprovant si cadascuna de les lletres del teu nom
és en aquesta array amb el mètode indexOf
Comprovar si cadascuna de les lletres del teu nom és igual a ‘a’, ‘e’, ‘i’, ‘o’, ‘u’ concatenant
les comprovacions amb ||

Extra: Si trobes un numero, mostra per pantalla: ‘Els noms de persones no contenen números!’.
Pista: Mira’t la funció isNaN

Fase 3

Pensa una forma per emmagatzemar tant les lletres del array com el nombre de vegades que apareixen i implementa’l.
Pista: Map

Fase 4

Crea una array amb el teu cognom on cada posició correspongui a una lletra.
Passa de les dues arrays a una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona.
És a dir, abans tenies les arrays name i surname i ara només tens una que es dirà fullName.

	FullName: [‘N’, ‘A’, ‘M’, ‘E’, ‘ ‘, ‘S’, ‘U’, ‘R‘, ‘N’, ‘A’, ‘M’, ‘E’]
Pista: Feu servir aquesta funció (enteneu què esteu fent)
	var myFullName = [];
myFullName.push(...myName);

*/

const ElMeuNom = ('Roger Masellas Roca1');
var lletresVocals = ['A','E','I','O','U','a','e','i','o','u'];
var lletraActual;
var elMeuNomMatriu = ElMeuNom.split('');


// Solucions Fase 1 i Fase 2 combinades

function fase01fase02() {
  let iteracions = elMeuNomMatriu.length;
  for (i=0; i<iteracions; i++) {
    var lletraActual = elMeuNomMatriu[i];

    if (lletraActual == ' ') {
      console.log('Aqui hi ha un espai');
    } else if (!isNaN(lletraActual)) {
      console.log('Ep! Això és un nombre: ', lletraActual );
    }  else {
      if (lletresVocals.indexOf(lletraActual) > -1) {
      //if (lletraActual == 'a' || lletraActual == 'e' || lletraActual == 'i' || lletraActual == 'o' || lletraActual == 'u') {
        console.log('La lletra ' + lletraActual + ' es una VOCAL');
      } else {
        console.log('La lletra ' + lletraActual + ' es una CONSONANT');
      }
    }
  } //fi del bucle
}

console.log('####### Solucions Fase 1 i Fase 2 #######');
fase01fase02();


// Solució Fase 3

//var trobatAinternet = new Map([...new Set(elMeuNomMatriu)].map(x => [x, elMeuNomMatriu.filter(y => y === x).length]));

/* ########### */

var fase03 = new Map();
var count = 0;
var lletra = '';
var nums = [];
var iteracions = elMeuNomMatriu.length;

function MontaMatriu() {
  for (i=0; i<iteracions; i++) {
   elMeuNomMatriu[i] = elMeuNomMatriu[i].toLowerCase();
  }

  for(i=0; i<iteracions; i++) {
    lletra = elMeuNomMatriu[i];
      for(var j=0; j<iteracions; j++) {
        if(elMeuNomMatriu[j] == lletra) {
          count++;
        }
      }
    fase03.set(lletra, count);
    //nums.push(count);
    count=0;
  }
  console.log(fase03);
  //console.log(nums);
}

console.log('####### Solució Fase 3 #######');
MontaMatriu();


// Solució Fase 4
const Cognom = ('Masellas');
const Nom = ('Roger');
var CognomMatriu = Cognom.split('');
var NomMatriu = Nom.split('');
var myFullName = [];

function Ajunta() {
  myFullName.push(...NomMatriu, ' ',...CognomMatriu);
  console.log(myFullName);
}

console.log('####### Solucio Fase 4 #######');
Ajunta();
