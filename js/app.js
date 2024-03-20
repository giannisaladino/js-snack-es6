// SNACK 1

const tavoloVip = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];


tavoloObj = tavoloVip.map(function(element, index) {return {nomeTavolo: 'Tavolo Vip', nomeVip: element, posto: index + 1}})
console.log(tavoloObj);


// SNACK 2

const elenco = [
    {
        id: 213,
        nome: 'Marco della Rovere',
        voto: 78,
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        voto: 96,
    },
    {
        id: 250,
        nome: 'Andrea Mantegna',
        voto: 48,
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        voto: 74,
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        voto: 68,
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        voto: 50,
    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        voto: 84,
    },
]
// console.log(elenco);

// 1. dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo

function capitalize(string) {
    const newString = string.toUpperCase()
    // console.log(newString);
    return newString
}

const arrayFormattedNames = [];
for (let i = 0; i < elenco.length; i++) {
    const element = elenco[i];
    const formattedNames = capitalize(element.nome)
    arrayFormattedNames.push({
        id: element.id,
        nome: formattedNames,
        voto: element.voto
    })
    // console.log(formattedName);
}

console.log(arrayFormattedNames);

// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const voto70 = [];
const voto70Id120 = [];

for (let i = 0; i < arrayFormattedNames.length; i++) {
    const element = arrayFormattedNames[i];

    if (element.voto > 70) {
        voto70.push(element);
        if (element.id > 120) {
            voto70Id120.push(element);
        }
    }
}

console.log(voto70);
console.log(voto70Id120);


// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        nome: 'Scott',
        peso: 12,
    },
    {
        nome: 'Giant',
        peso: 14,
    },
    {
        nome: 'Bottecchia',
        peso: 15,
    },
    {
        nome: 'KTM',
        peso: 11,
    },
    {
        nome: 'Bici5',
        peso: 19,
    },
    {
        nome: 'Bici6',
        peso: 20,
    },
    {
        nome: 'Bici7',
        peso: 10,
    },
    {
        nome: 'Bici8',
        peso: 21,
    }
]

//Dichiaro una variabile che memorizzi l'elemento piu piccolo trovato a partire dal primo elemento (ovvero il primo)
lightestBike = bici[0];

for (let i = 1; i < bici.length; i++) {
    const currentElement = bici[i];

    if (currentElement.peso < lightestBike.peso) {
        lightestBike = currentElement;
    }
}

// Stampo in console la bici con peso minore utilizzando destructuring e template literal
const {nome, peso} = lightestBike;
console.log(`La bici più leggera è ${nome}, che pesa ${peso}kg`);



// SNACK 4

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const teams = [
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Fiorentina',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Atalanta',
        punti: 0,
        falli: 0
    },
]

// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

for (let i = 0; i < teams.length; i++) {
    let puntiFatti = parseInt(Math.random()* 100) + 1;
    console.log(puntiFatti);
    let falliSubiti = parseInt(Math.random()* 50) + 1;
    console.log(falliSubiti);   
}

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//devo scappareee per adesso