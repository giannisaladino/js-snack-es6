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
    }
]

for (let i = 0; i < bici.length; i++) {
    const pesoBici = bici[i].peso;
    console.log(pesoBici);
    
}