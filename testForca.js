var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var Forca = require('./Forca.js');
Forca.forca = "Banana";

describe('Jogo da Forca, palavra = Banana ', function(){

  it("Retorna a palavra procurada", function() {
    expect(Forca.getPalavra()).to.be.a('string');
  });

  it("Vai exibir um '-' para cada letra da palavra", function() {
    expect(Forca.parcial()).to.be.a('array');
  });

  it(",Retorna verdadeiro se a letra A está na palavra", function() {
    expect(Forca.letra("a")).to.equal(true);
  });

  it(",Retorna falso se a letra Z não está na palavra", function() {
    expect(Forca.letra("z")).to.equal(false);
  });

  it("Vai revelar aonde a letra escolhida se encaixa, e mostrando '-' nas letras ainda não reveladas", function() {
    expect(Forca.revela("a")).to.eql("-a-a-a");
  });

});
