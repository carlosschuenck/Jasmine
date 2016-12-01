function MaiorEMenor() {
  var menor;
  var maior;

  var clazz = {
    encontrar: function(nums) {
      menor = Number.MAX_VALUE;
      maior = Number.MIN_VALUE;

      nums.forEach(function(num){
        if(num < menor) menor = num;
        if(num > maior) maior = num;
      });
    },

    pegarMaior: function() {return maior;},

    pegarMenor: function() {return menor;}
  };

  return clazz;
}
