function inverterString() {
    
    const string = document.getElementById('inputString').value;
   
    let stringInvertida = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
  
    document.getElementById('resultado').innerHTML = `String invertida: ${stringInvertida}`;
  }
  