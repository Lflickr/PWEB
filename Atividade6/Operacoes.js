var n1 = window.prompt('Insira o primeiro numero: ');
var n2 = window.prompt('Insira o segundo numero: ');



n1 = Number(n1);
n2 = Number(n2);

window.alert(`\nnumero 1: ${n1.toFixed(2)}\n
numero 2: ${n2.toFixed(2)}\n
soma: ${(n1+n2).toFixed(2)}\n
subtração: ${(n1-n2).toFixed(2)}\n
produto: ${(n1*n2).toFixed(2)}\n                
divisão: ${(n1/n2).toFixed(2)}\n
resto da divisão: ${(n1%n2).toFixed(2)}`);

