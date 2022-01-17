//bibliotecas de frases
const frases_do_dia = [
    'Com ou sem luta, sempre há derrota',
    'Calma, você ainda tem muito a perder',
    'Quando te falarem que não vai dar certo, acredite',
    'Na vida sempre é tudo ou nada. Tudo dando errado ou nada dando certo',
    'Dias ruins se passam para que piores possam vir',
    'Nunca foi azar, sempre foi incompetência',
    'Depois da tempestade vem o lamaçal',
    'até o cheque é espepcial e você não'
];
const mood_do_dia = [
    'Suicídio',
    'Rejeição amorosa',
    'Depressão',
    'Fracasso profissional',
    'Desespero',
    'Vontade de morrer'
];
//funcoes
const random_prhase = () =>{
    let randomIndex = Math.floor(Math.random()*frases_do_dia.length);
    return frases_do_dia[randomIndex];
};
const random_mood = () =>{
    let randomIndex = Math.floor(Math.random()*mood_do_dia.length);
    return mood_do_dia[randomIndex];
};

const output = () =>{
    console.log (`Pelas previsões dos coachs intergalaticamente quânticos você ainda tem ${Math.floor(Math.random()*100)} anos de azar.`);
    console.log (`Frase do dia: ${random_prhase()}.`);
    console.log (`Mood do dia: ${random_mood()}.`);
};
output()