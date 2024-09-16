var n1 = window.prompt('Insira a primeira nota do aluno: ');
var n2 = window.prompt('Insira a segunda nota do aluno: ');
var n3 = window.prompt('Insira a terceira nota do aluno: ');
var n4 = window.prompt('Insira a quarta nota do aluno');

n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);
n4 = Number(n4);

var media = (n1 + n2 + n3 + n4)/4.0;

window.alert(`As notas do aluno foram ${n1} ${n2} ${n3} ${n4}, resultando na media ${media}`);