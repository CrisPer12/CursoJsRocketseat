// Requsição AJAX para consumo de APIs

/*
var url = "https://viacep.com.br/ws/04401090/json/"
var xhr = new XMLHttpRequest();

xhr.open('GET', url );
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}

// Promise = Devolve Valor de Resultado Após um tempo
 
var url = "https://viacep.com.br/ws/04401090/json/"
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url );
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    });

*/    

 // Utilizando Biblioteca AXIOS para utilização de Promise

axios.get("https://viacep.com.br/ws/04401090/json/")
    .then(function(response){
        console.log(response.data.bairro)
    })
    .catch(function(error){
        console.warn(error)
    });