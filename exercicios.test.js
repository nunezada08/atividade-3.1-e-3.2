// exercicios.test.js
const {
  calcularMedia,
  verificarAprovacao,
  classificarFaixaEtaria,
  converterKmParaMilhas,
  gerarEmailCorporativo,
  adicionarItemCarrinho,
  calcularSalarioLiquido,
  criarProduto,
  ehTrianguloValido,
  removerElemento
} = require('./exercicios');

describe('Suíte de Testes Unitários - 10 Regras de Negócio', () => {
  test('1. calcularMedia: deve calcular médias exatas, dízimas e validar notas', () => {
    expect(calcularMedia(7, 8, 9)).toBe(8);
    expect(calcularMedia(7.5, 8.0, 9.0)).toBeCloseTo(8.17, 2);
    expect(() => calcularMedia(-1, 8, 9)).toThrow('Nota inválida: deve estar entre 0 e 10');
    expect(() => calcularMedia(11, 8, 9)).toThrow('Nota inválida: deve estar entre 0 e 10');
  });

  test('2. verificarAprovacao: deve considerar nota e frequência mínimas', () => {
    expect(verificarAprovacao(7.0, 75)).toBe(true);
    expect(verificarAprovacao(8.5, 80)).toBe(true);
    expect(verificarAprovacao(6.9, 90)).toBe(false);
    expect(verificarAprovacao(9.0, 74)).toBe(false);
  });

  test('3. classificarFaixaEtaria: deve classificar as quatro faixas etárias', () => {
    expect(classificarFaixaEtaria(10)).toBe('Criança');
    expect(classificarFaixaEtaria(15)).toBe('Adolescente');
    expect(classificarFaixaEtaria(25)).toBe('Adulto');
    expect(classificarFaixaEtaria(65)).toBe('Idoso');
    expect(() => classificarFaixaEtaria(-5)).toThrow('Idade não pode ser negativa');
  });

  test('4. converterKmParaMilhas: deve converter distâncias e rejeitar valores negativos', () => {
    expect(converterKmParaMilhas(10)).toBeCloseTo(6.21, 2);
    expect(converterKmParaMilhas(0)).toBe(0);
    expect(() => converterKmParaMilhas(-10)).toThrow('Distância não pode ser negativa');
  });

  test('5. gerarEmailCorporativo: deve padronizar nomes, sobrenomes e empresa', () => {
    expect(gerarEmailCorporativo('Lucas', 'Silva', 'empresa.com')).toBe('lucas.silva@empresa.com');
    expect(gerarEmailCorporativo('   Ana ', ' Souza       ', 'TECH.IO')).toBe('ana.souza@tech.io');
  });

  test('6. adicionarItemCarrinho: deve adicionar item sem alterar o carrinho original', () => {
    const carrinhoInicial = ['Monitor', 'Mouse'];
    const resultado = adicionarItemCarrinho(carrinhoInicial, 'Teclado');

    expect(resultado).toEqual(['Monitor', 'Mouse', 'Teclado']);
    expect(resultado).toHaveLength(3);
    expect(carrinhoInicial).toHaveLength(2);
  });

  test('7. calcularSalarioLiquido: deve aplicar desconto e validar os valores', () => {
    expect(calcularSalarioLiquido(3000, 10)).toBe(2700);
    expect(calcularSalarioLiquido(5000, 0)).toBe(5000);
    expect(() => calcularSalarioLiquido(0, 10)).toThrow('Valores de salário ou desconto inválidos');
    expect(() => calcularSalarioLiquido(3000, -5)).toThrow('Valores de salário ou desconto inválidos');
  });

  test('8. criarProduto: deve criar produto em estoque e validar o preço', () => {
    expect(criarProduto(1, 'Monitor', 899.90, 'Informática')).toEqual({
      id: 1,
      nome: 'Monitor',
      preco: 899.90,
      categoria: 'Informática',
      emEstoque: true
    });
    expect(() => criarProduto(2, 'Mouse', 0, 'Informática')).toThrow('Preço deve ser maior que zero');
    expect(() => criarProduto(3, 'Teclado', -50, 'Informática')).toThrow('Preço deve ser maior que zero');
  });

  test('9. ehTrianguloValido: deve validar a desigualdade triangular', () => {
    expect(ehTrianguloValido(3, 4, 5)).toBe(true);
    expect(ehTrianguloValido(1, 2, 10)).toBe(false);
    expect(ehTrianguloValido(0, 4, 5)).toBe(false);
    expect(ehTrianguloValido(-1, 4, 5)).toBe(false);
  });

  test('10. removerElemento: deve remover ocorrências sem alterar a lista original', () => {
    const listaOriginal = ['banana', 'maca', 'uva'];
    const resultado = removerElemento(listaOriginal, 'maca');

    expect(resultado).toEqual(['banana', 'uva']);
    expect(removerElemento([1, 2, 3], 99)).toEqual([1, 2, 3]);
    expect(listaOriginal).toEqual(['banana', 'maca', 'uva']);
    expect(listaOriginal).toHaveLength(3);
  });
});
