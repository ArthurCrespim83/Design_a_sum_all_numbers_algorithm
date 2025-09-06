// A função sumAll que desenvolvemos
function sumAll(arr) {
  // Encontra o menor e o maior número no array
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  let sum = 0; // Inicializa a variável de soma

  // Itera de min até max (inclusive) e adiciona cada número à soma
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum; // Retorna o valor final da soma
}

// --- Lógica para o aplicativo Web ---

// Seleciona os elementos do DOM (IDs ajustados para corresponder ao HTML)
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result"); // Corrigido para 'result'
const sumResultParagraph = document.getElementById("sumResult"); // Selecionando o parágrafo específico para a soma

// Adiciona um "ouvinte de evento" ao botão
calculateBtn.addEventListener("click", () => {
  // Obtém os valores dos campos de entrada e converte para números
  const number1 = parseInt(num1Input.value);
  const number2 = parseInt(num2Input.value);

  // Verifica se os inputs são números válidos
  if (isNaN(number1) || isNaN(number2)) {
    // Exibe mensagem de erro dentro da div de resultado
    resultDiv.innerHTML =
      '<p style="color: red;">Por favor, insira números válidos.</p>';
    return; // Interrompe a execução se não forem números válidos
  }

  // Cria um array com os números obtidos
  const numbersArray = [number1, number2];

  // Chama a função sumAll e obtém o resultado
  const totalSum = sumAll(numbersArray);

  // Atualiza o conteúdo da div de resultado com uma mensagem mais detalhada
  const minNum = Math.min(number1, number2);
  const maxNum = Math.max(number1, number2);
  sumResultParagraph.innerHTML = `A soma de todos os números entre ${minNum} e ${maxNum} (inclusive) é: <strong>${totalSum}</strong>`;
});

// --- Teste no console (opcional) ---
// Removi os console.logs diretos aqui para não poluir o console da página
// mas a função sumAll continua funcional e testável se você a chamar manualmente no console.
// Ex: sumAll([1, 4])
