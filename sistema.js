// sistema.js

// 1. Verificador de maioridade
function verificarMaioridade(idade) {
  return idade >= 18;
}

// 2. Calculadora de IMC (Índice de Massa Corporal)
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return Number(imc.toFixed(2));
}

// 3. Formatador de nome completo (Sobrenome, Nome)
function formatarNome(nome, sobrenome) {
  return `${sobrenome}, ${nome}`;
}

// 4. Verificador de número par
function ehPar(numero) {
  return numero % 2 === 0;
}

// 5. Conversor de temperatura Celsius para Fahrenheit
function celsiusParaFahrenheit(c) {
  return (c * 1.8) + 32;
}

// 6. Gerenciador de hobbies (Adiciona item em lista imutável)
function adicionarHobby(lista, hobby) {
  return [...lista, hobby];
}

// 7. Divisão matemática com tratamento de erro
function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não permitida');
  }
  return a / b;
}

// 8. Construtor de objeto aluno
function criarAluno(nome, curso) {
  return { nome, curso, ativo: true };
}

// 9. Calculadora de desconto promocional
function aplicarDesconto(preco, porcentagem) {
  return preco - (preco * (porcentagem / 100));
}

// 10. Validador de comprimento mínimo de senha (mínimo 8 caracteres)
function validarTamanhoSenha(senha) {
  return senha.length >= 8;
}

// Exportação das funções para uso externo
module.exports = {
  verificarMaioridade,
  calcularIMC,
  formatarNome,
  ehPar,
  celsiusParaFahrenheit,
  adicionarHobby,
  dividir,
  criarAluno,
  aplicarDesconto,
  validarTamanhoSenha
};
