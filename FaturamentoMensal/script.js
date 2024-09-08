function calcularPercentual() {
    
    const faturamento = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53
    };
  
   
    const total = faturamento.SP + faturamento.RJ + faturamento.MG + faturamento.ES + faturamento.Outros;
  
    
    const percentualSP = ((faturamento.SP / total) * 100).toFixed(2);
    const percentualRJ = ((faturamento.RJ / total) * 100).toFixed(2);
    const percentualMG = ((faturamento.MG / total) * 100).toFixed(2);
    const percentualES = ((faturamento.ES / total) * 100).toFixed(2);
    const percentualOutros = ((faturamento.Outros / total) * 100).toFixed(2);
  
    
    document.getElementById('sp').innerHTML = `SP: ${percentualSP}%`;
    document.getElementById('rj').innerHTML = `RJ: ${percentualRJ}%`;
    document.getElementById('mg').innerHTML = `MG: ${percentualMG}%`;
    document.getElementById('es').innerHTML = `ES: ${percentualES}%`;
    document.getElementById('outros').innerHTML = `Outros: ${percentualOutros}%`;
    document.getElementById('total').innerHTML = `Total Faturamento: R$${total.toFixed(2)}`;
  }
  