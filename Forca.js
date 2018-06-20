'use strict';
var palavra = "";
var caracteres = [''];
var parcial = [''];
var retorno = false;
var i = 0;

var Forca = function forca() {}
module.exports = Forca;

Forca.forca = function(a) {
    palavra = a;
    caracteres = palavra.split('');
    for(i = 0; i < palavra.length; i++){
        parcial[i] = '-';
    }
}

Forca.getPalavra = function() {
    return palavra;
}

Forca.parcial = function(){
    return parcial;
}

Forca.letra = function(a){
    retorno = false;
    for(i = 0;i < caracteres.length;i++){
        if(a == caracteres[i]){
            parcial[i] = a;
            retorno = true;
        }
    }
    return retorno;
}

Forca.revela = function(a){
    Forca.letra(a)
    return parcial.join("");
}
