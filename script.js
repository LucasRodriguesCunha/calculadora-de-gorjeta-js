function calcularGorjeta() {
  // Obter valor da conta e qualidade do serviço
  const valorConta = document.getElementById("valor_conta").value;
  const qualidadeServico = document.getElementById("qualidade_servico").value;

  // Validar entrada
  if (valorConta === "" || qualidadeServico === "0") {
    alert("Por favor, preencha os campos do formulário corretamente.");
    return;
  }

  // Calcular gorjeta e valor total
  const valor_gorjeta = valorConta * qualidadeServico;
  const valor_total = parseFloat(valorConta) + parseFloat(valor_gorjeta);

  // Exibir resultados
  document.getElementById("valor_gorjeta").value = valor_gorjeta.toFixed(2);
  document.getElementById("valor_total").value = valor_total.toFixed(2);
}

document
  .getElementById("calcular_btn")
  .addEventListener("click", calcularGorjeta);
