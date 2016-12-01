describe('#Paciente', function(){

  var carlos;

  beforeEach(function() {
    carlos = new PacienteBuilder().construir();
  });

  it('#Deve calcular o IMC', function(){
    expect(carlos.imc()).toEqual(75/(1.72*1.72));
  });

  it('#Deve calcular os batimentos', function(){
    expect(carlos.batimentos()).toEqual(23 * 365 * 24 * 60 * 80);
  });


})
