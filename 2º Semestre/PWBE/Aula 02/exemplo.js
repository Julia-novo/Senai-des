// const numeros = [1, 2, 3, 4, 5];
// for(let i = 0;  i<numeros.length; i++) {
// console.log("[" + i+"] ->" + numeros[i]);    
// }

// function soma(a,b){
// return a + b;
// console.log(a + b);
// }

// console.log(soma(2,3)); 

// const soma = (a,b) => {
//     console.log(a + b);
// }
// soma(8, 2);

const numeros = [1, 2, 3, 4, 5];
const marcas =["nike","adidas","jaguar"];
const usuarios = [
    {
        "nome": "fulano",
        "sobrenome":"Souza",
        "matricula": "1234",
        "telefone": "(12) 1234-4321"
    },
    {
        "nome": "ciclano",
        "sobrenome":"Jordan",
        "matricula": "4567",
        "telefone": "(35) 1234-4321"
    }
];
// function imprime(value) {
//     console.log("Value - " + value);
// }
//marcas.forEach(imprime);
marcas.forEach( (value) =>  {
    if(value == "nike"){
        console.log("Encontrei");
    }
});
// const carro = {
//     "ano": 2000,
//     "cor": "vermelho",
//     "modelo":"uno",
//     "Marca" :"fiat",
//     "escada": true,
//     "placa": "abc1234"
// }
// console.log(carro);



usuarios.forEach((usuario) => {
    if(usuario.matricula === "4567"){
        console.log(usuario.nome +" "+ usuario.sobrenome);
        console.log(usuario.telefone);
    }
});