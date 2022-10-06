let x , y , z; //declarando variaveis
y=231; //valor da variavel
z=55; //valor da variavel
x = 2 *(y + z); //x=2*(24+33) , x=2*57, x=144
document.write ("x =",x,"<br>");  //, uso exclusivo do doc write
document.write ("x =" +x+ "<br>");// + juntar (concatenar)
document.write (`x = ${x} <br>`); // crase
document.write (`O valor de z vale ${z} <br>`);
document.write (`z=${z} , y=${y}, x=${x}<br>`);//vai trazer o contecudo da variavel
document.write ('z=${z} , y=${y}, x=${x}<br>');// aspa simples não funciona
document.write (`O valor de x vale ${y**z}<br>`)
document.write (`O valor de x vale ${y%z}<br>`)