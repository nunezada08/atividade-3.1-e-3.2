// sistema.test.js
const {
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
} = require('./sistema');

describe('Suíte de Testes Unitários - 10 Funções Lógicas Iniciais', () => {
  // Teste 1: verificarMaioridade
  test('1. verificarMaioridade: deve validar idades de 15, 18 e 21 anos', () => {
    expect(verificarMaioridade(15)).toBe(false);
    expect(verificarMaioridade(18)).toBe(true);
    expect(verificarMaioridade(21)).toBe(true);
  });

  // Teste 2: calcularIMC (atenção aos decimais de ponto flutuante!)
  test('2. calcularIMC: deve calcular o IMC correto com precisão decimal', () => {
    // 70kg e 1.75m -> IMC esperado aproximado de 22.86
    expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
  });

  // Teste 3: formatarNome
  test('3. formatarNome: deve formatar "Lucas" e "Silva" para "Silva, Lucas"', () => {
    expect(formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
  });

  // Teste 4: ehPar
  test('4. ehPar: deve testar número par, ímpar e o zero', () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(7)).toBe(false);
    expect(ehPar(0)).toBe(true);
  });

  // Teste 5: celsiusParaFahrenheit
  test('5. celsiusParaFahrenheit: deve converter temperaturas padrão (0°C, 100°C e -40°C)', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });

  // Teste 6: adicionarHobby (comparação estrutural de arrays com toEqual)
  test('6. adicionarHobby: deve retornar novo array com tamanho incrementado contendo o novo hobby', () => {
    const hobbiesIniciais = ['Futebol', 'Videogame'];
    const resultado = adicionarHobby(hobbiesIniciais, 'Leitura');

    expect(resultado).toHaveLength(3);
    expect(resultado).toEqual(['Futebol', 'Videogame', 'Leitura']);
  });

  // Teste 7: dividir (captura de exceção throw com função anônima)
  test('7. dividir: deve dividir normalmente e lançar erro ao dividir por zero', () => {
    expect(dividir(10, 2)).toBe(5);
    // Para testar toThrow, a chamada deve estar embrulhada em uma arrow function () => ...
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
  });

  // Teste 8: criarAluno (comparação de estrutura de objeto com toEqual)
  test('8. criarAluno: deve retornar o objeto do aluno com as propriedades corretas', () => {
    const alunoEsperado = { nome: 'Mariana', curso: 'Desenvolvimento de Sistemas', ativo: true };
    expect(criarAluno('Mariana', 'Desenvolvimento de Sistemas')).toEqual(alunoEsperado);
  });

  // Teste 9: aplicarDesconto
  test('9. aplicarDesconto: deve calcular desconto de 10% e manter valor original com 0%', () => {
    expect(aplicarDesconto(100, 10)).toBe(90);
    expect(aplicarDesconto(100, 0)).toBe(100);
  });

  // Teste 10: validarTamanhoSenha
  test('10. validarTamanhoSenha: deve reprovar senha com 5 caracteres e aprovar com 8 ou mais', () => {
    expect(validarTamanhoSenha('12345')).toBe(false);
    expect(validarTamanhoSenha('senha123')).toBe(true);
    expect(validarTamanhoSenha('senhaSuperSegura2026')).toBe(true);
  });
});
