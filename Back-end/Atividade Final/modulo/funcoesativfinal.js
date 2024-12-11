/********
 * Nome: Hiago Rodrigues Ortolan
 * Objetivo: Fazer um projeto em uma escola para monitorar dados dos seus alunos pela escola.
 * Data: 27/11/2024
 * Versão 1.0
 ********/

const lionAlunos = require('./alunos')
const lionCursos = require('./cursos')

const getcursos = function () {
    let cursos = []
    let validacao = false

    lionCursos.cursos.forEach(function(item){
        cursos.push(item)  // Alterado para adicionar o item diretamente
        validacao = true
    })
    if (!validacao) {
        return validacao
    } else {
        return cursos
    }
}

const getalunos = function () {
    let alunos = []
    let validacao = false

    lionAlunos.alunos.forEach(function(item){
        alunos.push(item)
        validacao = true
    })
    if (!validacao) {
        return validacao
    } else {
        return alunos
    }
}

const getalunosmatricula = function (matricula) {
    let validacao = false
    let aluno = []

    lionAlunos.alunos.forEach(function(item) {
        if(matricula == item.matricula) {
            aluno.push(item)
            validacao = true
        }
    })
    if (!validacao) {
        return validacao
    } else {
        return aluno
    }  
}

const getcursosdsouredes = function (curso) {
    let cursoDoEstudante = curso.toLowerCase()  // Não é necessário o uso de String()
    let cursoarray = []
    let validacao = false

    lionAlunos.alunos.forEach(function(item){
        item.curso.forEach(function(dsouredes){
            if(cursoDoEstudante == dsouredes.sigla.toLowerCase()) {
                cursoarray.push(item)
                validacao = true
            }
        })
    })
    if (!validacao) {
        return validacao
    } else {
        return cursoarray
    }
}

const getalunosfiltrostatus = function (status) {
    let statusAluno = status.toLowerCase()  // Não é necessário o uso de String()
    let statusArray = []
    let validacao = false

    lionAlunos.alunos.forEach(function(item){
        if(statusAluno == item.status.toLowerCase()) {
            statusArray.push(item)
            validacao = true
        }
    }) 
    if (!validacao) {
        return validacao
    } else {
        return statusArray
    }
}

const getalunosfiltrocursoestatus = function (curso, status) {
    let cursoDoAluno = curso.toLowerCase()  // Não é necessário o uso de String()
    let statusDoAluno = status.toLowerCase()  // Não é necessário o uso de String()
    let Cursoarray = []
    let validacao = false

    lionAlunos.alunos.forEach(function(item) {
        item.curso.forEach(function(siglaDoCurso) {
            if(cursoDoAluno == siglaDoCurso.sigla.toLowerCase()) {
                let aluno = {
                    foto: item.foto,
                    nome: item.nome,
                    matricula: item.matricula,
                    sexo: item.sexo,
                    curso: {
                        nome: siglaDoCurso.nome,
                        sigla: siglaDoCurso.sigla,
                        icone: siglaDoCurso.icone,
                        carga: siglaDoCurso.carga,
                        conclusao: siglaDoCurso.conclusao,
                        disciplinas: []
                    },
                }
                siglaDoCurso.disciplinas.forEach(function(statusDaMateria) {
                    if(statusDoAluno == statusDaMateria.status.toLowerCase()) {
                        aluno.curso.disciplinas.push({
                            nome: statusDaMateria.nome,
                            carga: statusDaMateria.carga,
                            media: statusDaMateria.media,
                            status_disciplina: statusDaMateria.status
                        })
                    }                                                          
                    validacao = true     
                })
                if (aluno.curso.disciplinas.length > 0) {
                    Cursoarray.push(aluno)
                }
            }
        })
    })
    if (!validacao) {
        return validacao
    } else {
        return Cursoarray
    }
}

const getalunosfiltrocursoeanoconclusao = function (curso, ano) {
    let cursoDoAluno = curso.toLowerCase()  // Não é necessário o uso de String()
    let conclusaoArray = []
    let validacao = false

    lionAlunos.alunos.forEach(function(item){
        item.curso.forEach(function(conclusao){
            if(cursoDoAluno == conclusao.sigla.toLowerCase()){
                if(ano == conclusao.conclusao){
                    conclusaoArray.push(item)
                    validacao = true
                }
            }
        })
    })
    if (!validacao) {
        return validacao
    } else {
        return conclusaoArray
    }
}

//console.log(getcursos())
//console.log(getalunos())
//console.log(getalunosmatricula(20151001001))
//console.log(getcursosdsouredes('rds'))
//console.log(getalunosfiltrostatus('finalizado'))
//console.log(getalunosfiltrocursoestatus('rds', 'reprovado'))
//console.log(getalunosfiltrocursoeanoconclusao("rds", 2024))

module.exports = {
    getcursos,
    getalunos,
    getalunosmatricula,
    getcursosdsouredes,
    getalunosfiltrostatus,
    getalunosfiltrocursoestatus,
    getalunosfiltrocursoeanoconclusao
}