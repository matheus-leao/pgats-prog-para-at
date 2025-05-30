import assert from 'node:assert';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from './trabalho.js';

describe('Testes da disciplina - fundamentos JS', () => {
  
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
  });

  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('  Pantera  '), 'PANTERA');
  });

  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('  Pantera Luna '), 'PANTERA');
  });

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
    assert.strictEqual(verificarSePodeSerAdotado(1, 'P'), true)
    assert.strictEqual(verificarSePodeSerAdotado(0.5, 'P'), true)
  })

  it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)
  });

  it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
    assert.strictEqual(decidirTipoDeAtividadePorPorte('medio'), 'caminhada no quarteirão')
    assert.strictEqual(decidirTipoDeAtividadePorPorte('grande'), 'correr no parque')
    assert.strictEqual(decidirTipoDeAtividadePorPorte('gigante'), 'porte inválido')
  });

  it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    assert.strictEqual(resultado, 'Pipoca');
  });

});