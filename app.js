let $ul = document.querySelector(".result");

const themes = [
"Phrases d'ascenseur",
"Foirer un entretien d'embauche instantanément",
"Bagarre direct",
"Pokemon fictif",
"Mot gênant",
"Phrase que tu dis en couple mais pas en repas de famille",
"Si c\'est liquide c\'est pas normal",
"Nom de restau à 1,5/5 sur google",
"C'est pas facile",
"Action mini conséquence maxi",
"1ère phrase aux beaux-parents",
"Célébrité mais pas trop",
"Gâcher un rencard direct",
"On peut l'entendre à l'hôpital et dans un restau",
"Légal mais border",
"Situation où t'es pas fier.e",
"Faux compliment",
"Le prochain Harry Potter (Harry et...)",
"Recherche google de la honte",
"Truc que tu peux dire qu'en 2009",
"Tu fais ça c'est punition directe par les darons",
"Nom de DJ de boîte de nuit d'Evreux",
"S'en sort pas trop mal contre un ours",
"Travail fictif",
"Nom de chien qui te met la honte dans la rue",
"Truc honteux quand t'as des invité.es chez toi",
"Expression inventée crédible",
"Phrase de la vie commune à double sens",
"Mort humiliante",
"Phrase stylée avant de mourir"
];

// Shuffle

function shuffle(array) {
  let currentIndex = array.length,
  temporaryValue,
  randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Lettre aléatoire

let input_id = "random-letter";
function randLetter() {
  let letters = "ABCDEFGHIJLMNOPQRSTUV".split("");
  let mixLetters = shuffle(letters);
  document.getElementById(input_id).innerHTML = mixLetters[0];
}

// Liste

function createList() {
  let randomized = shuffle(themes);

  $ul.innerHTML = "";
  randomized.slice(themes, 6).forEach((theme) => {
    let $li = document.createElement("li");
    $ul.appendChild($li);
    $li.innerText = theme;
    
    $li.onclick = newli;
  });
}
function newli() {
  let randomized = shuffle(themes);
  let theme = randomized[0];
  this.innerText = theme;
}

// Règles

function regles() {
  let $bloc = document.querySelector('#rules');
  $bloc.classList.toggle('visible');
}
