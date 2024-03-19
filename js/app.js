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
    arrayFormattedNames.push(formattedNames)
    // console.log(formattedName);
}

console.log(arrayFormattedNames);

// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const voto70 = [];
const voto70Id120 = [];

for (let i = 0; i < elenco.length; i++) {
    const element = elenco[i];
    
    if (element.voto > 70) {
        voto70.push(element);
    } else if (element.voto > 70 && element.id > 120) {
        voto70Id120.push(element);
    }
}

console.log(voto70);
console.log(voto70Id120);