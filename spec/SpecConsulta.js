describe("#Consulta", function() {

    var guilherme;

    beforeEach(function(){
       guilherme = new PacienteBuilder().setIdade(28).setPeso(72).setAltura(1.80).construir();
    });

    describe('#Consultas que são retornos', function() {
        it("#Não deve cobrar nada se a consulta for um retorno.", function() {
            var consulta = new Consulta(guilherme, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    })

    describe('#Consultas que são comuns', function() {
        it("#Deve cobrar R$25 por cada procedimento comum.", function() {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);
            expect(consulta.preco()).toEqual(50);
        });
    });

    describe('#Consultas que são particulares', function() {
        it("#Deve dobrar o preço da consulta particular.", function() {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], true, false);
            expect(consulta.preco()).toEqual(50 * 2);
        });
    });

    describe('#Consultas por convênio', function() {
        it("#Deve cobrar preço especifico dependendo do procedimento.", function() {
            var consulta = new Consulta(guilherme, ["procedimento-comum", "raio-x", "procedimento-comum2", "gesso"], false, false);
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });
});
