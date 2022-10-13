/* Operador  || (Ou)  / Para ser verdadeira, basta 1 for True
                      / Somente será false quando todos forem False,

Condição 1 Condição 2 Resultado
true  + true  = true
true  + false = true
false + true  = true
false + false = false */

let a,b,c,d;
a=50;
b=120;
c=200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);
d=(a<=b) || (a>=c);
document.write("(a<=b) || (a>=c) = "+d);
