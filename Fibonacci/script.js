
function checkFibonacci() {
    const number = parseInt(document.getElementById('inputNumber').value);
    const resultElement = document.getElementById('result');
  
    if (isNaN(number)) {
      resultElement.innerHTML = 'Por favor, insira um número válido.';
      return;
    }
  
    if (isFibonacci(number)) {
      resultElement.innerHTML = `O número ${number} pertence à sequência de Fibonacci.`;
    } else {
      resultElement.innerHTML = `O número ${number} Não pertence à sequência de Fibonacci.`;
    }
  }
  

  function isFibonacci(num) {
    let a = 0, b = 1;
    if (num === 0 || num === 1) {
      return true;
    }
    while (b <= num) {
      let next = a + b;
      a = b;
      b = next;
      if (b === num) {
        return true;
      }
    }
    return false;
  }
  