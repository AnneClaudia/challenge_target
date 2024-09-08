function calcularFaturamento() {
  const fileInput = document.getElementById('fileInput');
  
  if (fileInput.files.length === 0) {
    alert('Por favor, selecione um arquivo JSON.');
    return;
  }
  
  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.onload = function(event) {
    try {
      const faturamentoDiario = JSON.parse(event.target.result);
      
      let totalFaturamento = 0;
      let diasComFaturamento = 0;
      let menorValor = Number.MAX_VALUE;
      let maiorValor = 0;
      let diasAcimaMedia = 0;

      faturamentoDiario.forEach(dia => {
        if (dia.valor > 0) {  
          totalFaturamento += dia.valor;
          diasComFaturamento++;

          if (dia.valor < menorValor) {
            menorValor = dia.valor;
          }

          if (dia.valor > maiorValor) {
            maiorValor = dia.valor;
          }
        }
      });

      const mediaFaturamento = totalFaturamento / diasComFaturamento;

      faturamentoDiario.forEach(dia => {
        if (dia.valor > mediaFaturamento) {
          diasAcimaMedia++;
        }
      });

      document.getElementById('menor').innerHTML = `Menor valor de faturamento: R$${menorValor.toFixed(2)}`;
      document.getElementById('maior').innerHTML = `Maior valor de faturamento: R$${maiorValor.toFixed(2)}`;
      document.getElementById('diasAcimaMedia').innerHTML = `Dias com faturamento acima da média: ${diasAcimaMedia}`;
    } catch (error) {
      console.error('Erro ao processar o arquivo JSON:', error);
    }
  };
  
  reader.readAsText(file);
}
