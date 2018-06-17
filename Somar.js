'use strict';

var Somar = function somar(a,b) {
    this.a = a;
    this.b = b;
}

module.exports = Somar;

Somar.fazSoma = function(a,b) {
    return (a + b);
}




