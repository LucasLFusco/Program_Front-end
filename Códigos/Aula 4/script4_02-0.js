let a,b;
a=prompt("Digite um número");
a=parseInt(a);
b=parseInt(prompt("Digite outro número"));
document.write (`soma: ${(a+b)} <br>`);
document.write ("subtração: "+ (a-b),"<br>");
document.write (`potência: ${a**b}<br>`);
document.write (`módulo: ${a%b}<br>`);
document.write (`A multiplicação de ${a} por ${b} vale ${(a+b)} <br>`)