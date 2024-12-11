/******************
objetivo: manipular entrada e saída de dados, para calcular os juros compostos de uma venda parcelada
data: 31/07/2024
autor: Hiago
versão: 1.0
******************/

var readline=require('readline')

var jurosc=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

jurosc.question('insira o valor da capital inicial: ', function(capitalInicial){
    var P=parseFloat(capitalInicial)

    jurosc.question('insira a taxa de juros por ano: ', function(jurosAnual){
        var r=parseFloat(jurosAnual/100)

        jurosc.question('digite os juros são compostos por ano: ', function(compostosPorAno){
            var n=parseInt(compostosPorAno)

            jurosc.question('digite os anos: ', function(tempoAnos){
                var t=parseInt(tempoAnos)


                var base = 1 + r / n;
                var exponent = n * t;
                var montante = P * (base ** exponent);

                console.log('o valor final do montante é: ${montante}')

                jurosc.close()
            })
        })
    })
})