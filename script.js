/* 
Escreva uma função que receba um ÚNICO número e retorne o seguinte:
- Número é divisível por 3: Fizz
- Número é divisível por 5: Buzz
- Número é divisível por 3 e 5: FizzBuzz
- Número NÃO é divisível por 3 e 5: Retorna !FizzBUzz
*/

function getRandom(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r) //-> floor para r n ter casas decimais
}

let array = []

for (let i = 0; i < 1; i++) {
  array.push(getRandom(0, 100)) //push adiciona elemento ao array
}

array = Number(array)
function conditions() {
  if (array % 3 === 0 && array % 5 === 0) return 'FizzBuzz'
  if (array % 3 === 0) return 'Fizz'
  if (array % 5 === 0) return 'Buzz'
  return '!FizzBuzz'
}
console.log(array, conditions())
