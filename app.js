/********************************************************************************************
 * Objetivo: API para retornar dados de estados e cidades
 * Data: 30/10/2024
 * Autor: Marcel
 * Versão: 1.0
 **********************************************************************************************/

/*
    Para criar uma API devemos instalar:
        express         npm install express --save        - Serve para criar uma API
        cors            npm install cors --save           - Serve para configurar as permissões do header 
        body-parser     npm install body-parser --save    - Serve para manipular os dados de entrada na API pelo body

*/

//Import das bibliotecas para cria a API
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Inicializando a utilização do express através da variavel app
const app = express()

//request   - significa a chegada de dados da API
//response  - significa a saída de dados da API

app.use((request, response, next)=>{
    //Permissão de acesso para quem irá chamar a API
    response.header('Access-Control-Allow-Origin', '*')
    //Permissão de acesso para quais metodos a API irá responder
    response.header('Access-Control-Allow-Methods', 'GET')

    //Ativa as configurações do header para o cors()
    app.use(cors())

    next()
})

//Import do arquivo de funções
const estadosCidades = require('./modulo/funcoes.js')

//EndPoint para retornar todos os estados 
app.get('/v1/estados-cidades/lista-estados-sigla', cors(), async function(request, response){

    //Chama a função que retorna todos os estados
    let dados = estadosCidades.getListaDeEstados()

    if(dados){
        //Resposta da API com o JSON e o status code
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message':'Não foram encontrados estados para retornar.'})
    }
})

//EndPoint que retorna os dados de um estado filtrando pela sigla
app.get('/v1/estados-cidades/estado/:sigla', cors(), async function(request, response){
    //Recebe o conteudo da variavel sigla que será enviada na URL da requisição pelo modelo de parametro (params)
    let uf = request.params.sigla

    //Chama a função que irá receber a sigla e retornar os dados referente ao estado
    let dados = estadosCidades.getDadosEstado(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um estado'})
    }

})

//EndPoint que retorna a capital do estado filtrando pela sigla
app.get('/v1/estados-cidades/capital/estado', cors(), async function(request, response){
    //Recebe a variavel sigla através do modelo Query String (permite receber mais de uma variável na requisição)
    let uf = request.query.sigla
    // let nome = request.query.nome
    // let data = request.query.data

   let dados = estadosCidades.getCapitalEstado(uf)

   if(dados){
        response.status(200)
        response.json(dados)
   }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível localizar o estado informado.'})
   }
})

//Executa a API e faz com que fique aguardando novas requisições
app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})




