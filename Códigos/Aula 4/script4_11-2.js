/*Operador && (and)     somente será True quando os comparativos forem TODOS true
                        Do contrario será false 

Condição 1 Condição 2 Resultado
true  + true  = true
true  + false = false
false + true  = false
false + false = false   */
                        
let a,b,c,d;
a=50;
b=120;
c=200;
document.write(`a = ${a}, b = ${b}, c = ${c} <br>`);
d=(a<=b) && (a>=c);
document.write("(a<=b) && (a>=c) = "+d);