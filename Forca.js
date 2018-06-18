'use strict';
var palavra = "";
var caracteres = [''];
var parcial = [''];
var retorno = false;
var i = 0;

var Forca = function forca(a) {
    this.palavra = a;
    caracteres = palavra.split('');
    for(i = 0; i < palavra.length; i++){
        parcial[i] = '-';
    }
}

module.exports = Forca;

Forca.getPalavra = function() {
    return palavra;
}

Forca.parcial = function(){
    return parcial;
}

Forca.letra = function(a){
    for(i = 0;i < caracteres.length;i++){
        if(a == caracteres[i]){
            parcial[i] = a;
            retorno = true;
        }
    }
    return retorno;
}

Forca.revela = function(a){
    if(Forca.letra(a).to.equal(true))
        return caracteres;
    else
        return caracteres;
}
