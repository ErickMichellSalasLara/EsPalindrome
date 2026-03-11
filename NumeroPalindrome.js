// EL codigo de ahora será averiguar si un numero ingresado a la funcion es palindrome o no, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda
// Usaremos un loop while y un comparador "%" para obtener el ultimo digito del numero y compararlo con el primer digito, luego eliminaremos el ultimo digito y repetiremos el proceso hasta que el numero sea 0 o menor que 10

function isPalindrome(number){
  const original = number;
  let reverseNumber = 0;
  
  while(number > 0){
    const lastDigit = number % 10;
    reverseNumber = reverseNumber * 10;
    reverseNumber = reverseNumber + lastDigit;
    number = number - lastDigit;
    number = number / 10;
  }
}

isPalindrome(123);
console.log(isPalindrome())