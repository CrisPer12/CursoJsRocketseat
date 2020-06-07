/*
class List {
    constructor() {
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor() {
        super();

        this.usuario = 'Cristiano';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
   
}

var  MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();


// Operações em Vetores em JS com ES6


// Utilizando MAP
const arr = [1, 3, 4, 5, 8, 9,10];

const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);


// Utilizando reduce
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);


// Utilizando filter
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(filter);

// Utilizando Find

const find = arr.find(function(item){
    return item === 2;
});

console.log(find);


// Trabalhando com Arrow Function 

const arr = [1,2,4,5,6];

const newArr = arr.map(item => item * 2 );

console.log(newArr);



// Valores Padrão

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());



// Desestruturação de Objetos em JS

const usuario = {
    nome: 'Cris',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostrarNome({nome, idade}){
    console.log(nome, idade);
}

mostrarNome(usuario)



// Operadores REST e Spread

// REST  = RESTO DAS PROPRIEDADES

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const {nome, ... resto} = usuario;

console.log(nome);
console.log(resto);


// SPREAD 

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


// Templates Literals

const nome = 'Cristiano';
const idade = 22;

//console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos ');

console.log(`Meu nome ${nome} e tenho ${idade} anos.`)


// Object Short Syntax 

const nome = 'Cris';
const idade = 22;

const usuario = {
    nome,
    idade,
    empresa: 'IBM',
}

console.log(usuario);




// Import e Export Files Js
//import {soma, sub} from './funcoes';

import soma from './soma';

console.log(soma(1,2));
//console.log(sub(4, 2));


alert('Coringao');


// Trabalhando com Async/Await

const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(() => {resolve('Ok')},2000 );
});

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();


// Configurando Axios

import axios from 'axios';

class Api{
    static async getUserInfo(username){
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    } catch (err){
        console.warn('Erro na API')
    }
        
    }
}

Api.getUserInfo('CrisPer12')
Api.getUserInfo('CrisPer1efefe2')

*/

// Adicionar Repositórios

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'Tire sua ideia do papel e de vida a sua startup',
            description: 'Tire sua ideia do papel e de vida a sua startup',
            avatar_url: 'https://avatars1.githubusercontent.com/u/29154104?v=4',
            html_url: 'https://github.com/CrisPer12/AppToDoRocktSeat',
        });
        this.render();
    }
    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));


            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        })
    }
}

new App();
