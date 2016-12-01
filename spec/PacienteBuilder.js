function PacienteBuilder(){

  var nome = 'Carlos';
  var idade = 23;
  var peso = 75;
  var altura = 1.72;

  var clazz = {
    construir : function(){
      return new Paciente(nome, idade, peso, altura);
    },
    setNome : function(valor){
      nome = valor;
      return this;
    },
    setIdade : function(valor){
      idade = valor;
      return this;
    },
    setPeso : function(valor){
      peso = valor;
      return this;
    },
    setAltura : function(valor){
      altura = valor;
      return this;
    }
  };

  return clazz;
}
