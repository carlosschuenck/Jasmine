describe('#MaiorEMenor',function(){
  it('#Deve entender números em ordem não sequenciais.',function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontrar([5,1,7,9,2,10]);

    expect(algoritmo.pegarMaior()).toEqual(10);
    expect(algoritmo.pegarMenor()).toEqual(1);
  });

  it('#Deve entender números em ordem crescente.',function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontrar([1,2,3,4,5,6,7,8,9]);

    expect(algoritmo.pegarMaior()).toEqual(9);
    expect(algoritmo.pegarMenor()).toEqual(1);
  });

  it('#Deve entender números em ordem decrescente.',function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontrar([9,8,7,6,5,4,3,2]);

    expect(algoritmo.pegarMaior()).toEqual(9);
    expect(algoritmo.pegarMenor()).toEqual(2);
  });

  it('#Deve entender com apenas um número.',function(){
    var algoritmo = new MaiorEMenor();
    algoritmo.encontrar([5]);

    expect(algoritmo.pegarMaior()).toEqual(5);
    expect(algoritmo.pegarMenor()).toEqual(5);
  });
})
