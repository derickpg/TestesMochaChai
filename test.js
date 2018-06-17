var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var Soma = require('./Somar.js');

describe('Soma de 2 inteiros', function(){

    describe('Soma entre 5 e 2', function(){

        it('A soma é 7', function(){
            var aux = Soma.fazSoma(5,2);
            expect(Soma.fazSoma(5,2).should.be.equal(7));

        });
    });
    describe('Soma entre 5 e 2 ', function(){

        it('A soma é 2', function(){
            var aux = Soma.fazSoma(5,2);
            expect(Soma.fazSoma(5,2).should.be.equal(2));

        });
    });
});
