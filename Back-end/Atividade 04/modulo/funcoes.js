const pais = require('./pais')

const getListaDeEstados = function () {
    let uf=[]
    pais.listaDeEstados.estados.forEach(function(item) {
        uf.push(item.sigla)
    })
    console.log(uf)
    console.log(uf.length)
    return uf
}
const getDadosEstado=function (nomedoestado) {
    let estado=String(nomedoestado).toUpperCase()
    let estadosencontrados=null
    pais.listaDeEstados.estados.forEach(function (item) {
        if (String(item.sigla).toUpperCase()==estado) {
            estadosencontrados ={
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
                regiao: item.regiao
            }

        }
    })
   return estadosencontrados || false
}

const getCapitalEstado=function (nomedoestado) {
    let capital=String(nomedoestado).toUpperCase()
    let encontrados=[]
    pais.listaDeEstados.estados.forEach(function (item) {
        if (String(item.sigla).toUpperCase()==capital) {
            encontrados={
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
            }
        }
    })
    return encontrados || false
}

const getEstadosRegiao=function (nomedaregiao) {
    let regiao=String(nomedaregiao).toUpperCase()
    let regioesencontradas={regiao: regiao,
        estados: []
    }
    pais.listaDeEstados.estados.forEach(function (item) {
        if (String(item.regiao).toUpperCase()==regiao) {
            regioesencontradas.estados.push({
                uf: item.sigla,
                descricao: item.nome,
            })
        }
    })
    return regioesencontradas || false
}

const getCapitalPais = function(){
    capitalpais={
        capitais:[]
    }
    pais.listaDeEstados.estados.forEach(function (item) {
        if (item.capital_pais) {
            capitalpais.capitais.push({
                capital_atual: item.capital_pais.capital,
                sigla: item.sigla,
                descricao: item.nome,
                capital:item.capital,
                regiao:item.regiao,
                capital_pais_ano_inicio: item.capital_pais.ano_inicio,
                capital_pais_ano_termino: item.capital_pais.ano_fim
            })
        }
    })
    return capitalpais || false
}

const getCidades = function (uf) {
    let sigla=String(uf).toUpperCase()
    estado={
    }
    cidades=[]
    pais.listaDeEstados.estados.forEach(function (item) {
        if (String(item.sigla).toUpperCase()==sigla) { 
            item.cidades.forEach(function (itemc){
                cidades.push(itemc.nome)
                estado={
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
                cidades
                }

            })
        }
    })
    return estado || false
}
module.exports={
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}