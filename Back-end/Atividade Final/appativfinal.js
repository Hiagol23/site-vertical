const express = require ('express')
const cors = require ('cors')
const bodyParser = require ('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const funcoes = require('./modulo/funcoesativfinal')

app.get('/v1/lion-school/cursos', cors(), async function(request,response){
    let resultado = funcoes.getcursos()

    if(resultado){
        response.status(200)
        response.json(resultado)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado este curso'})
    }
})

app.get('/v1/lion-school/alunos', cors(), async function(request, response){
    let resultado = funcoes.getalunos()

    if(resultado){
        response.status(200)
        response.json(resultado)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado este curso'})
    }
})

app.get('/v1/lion-school/aluno/:matricula', cors(), async function(request, response){
    let matricula = request.params.matricula
    let resultado = funcoes.getalunosmatricula(matricula)

    if(resultado){
        response.status(200)
        response.json(resultado)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado este curso'})
    }
})

app.get('/v1/lion-school/alunos/cursos/:sigla', cors(), async function(request, response){
    let sigla = request.params.sigla
    let resultado = funcoes.getcursosdsouredes(sigla)

    if(resultado){
        response.status(200)
        response.json(resultado)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado este curso'})
    }
})

app.get('/v1/lion-school/alunos/:status', cors(), async function(request, response){
    let status = request.params.status
    let resultado = funcoes.getalunosfiltrostatus(status)

    if(resultado){
        response.status(200)
        response.json(resultado)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado este curso'})
    }
})

app.get('/v1/lion-school/alunos/filtro?curso={ds}&status={Aprovado', cors(), async function(request, response){
    let sigla = request.query.sigla
    let status = request.query.status

    if(status){
        response.status(200)
        response.json(resultado)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado este curso'})
    }
})

app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})