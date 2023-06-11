# Hoopers Desafio

1. Função hooper(data) 

A função hooper é responsável por extrair informações de uma página da web usando o Puppeteer.

**Parâmetros**

data (Objeto): Um objeto contendo os seguintes campos:

url (String): A URL da página a ser acessada.

informations (Array): Uma matriz contendo objetos com a chave e o seletor CSS para extrair as informações.

**Retorno**

Retorna uma promessa que é resolvida com um array contendo as informações extraídas.

2. Função scraping_information()

A função scraping_information é responsável por iterar sobre uma lista de URLs e chamar a função hooper para cada URL, realizando a extração de informações.

**Retorno**

Retorna uma promessa que é resolvida quando a extração de informações está concluída.

Exemplo para uso:

```const urls = [
  {
    url: 'https://www.example.com',
    informations: [
      { key: 'title', value: 'h1' },
      { key: 'description', value: '.description' }
    ]
  },
  // Adicione mais objetos de URL conforme necessário
];
```

 * Função para extrair informações de uma lista de URLs usando Puppeteer.
 * @param {Object} data - Um objeto contendo a URL e as informações a serem extraídas.
 * @param {string} data.url - A URL da página a ser acessada.
 * @param {Array} data.informations - Uma matriz contendo objetos com a chave e o seletor CSS para extrair as informações.
 * @returns {Promise<Array>} - Uma promessa que é resolvida com um array contendo as informações extraídas.
 

# Para realização de teste de integração

Importa o módulo hooper para realizar a extração de dados.

**const hooper = require('./index');**


Linha que define o tempo limite para a execução dos testes como 30.000 milissegundos (30 segundos). Foi colocado a tempo limite uma vez que estava com problemas na resolução do DNS em casa, sendo assim o teste falhou várias vezes quanto tentado executar.

**jest.setTimeout(30000);**


 * Testa a função hooper para realizar a extração de dados de uma URL específica.
 
 * O teste verifica se a função retorna os dados esperados com base nas informações fornecidas.
 
No teste foi usado apenas na primeira URL fornecida, para que o tempo de execução da mesma seja mais rápido. 
```
test('scrap data from URLs', () => {
  return hooper({
    url: 'https://www.courtsoftheworld.com/united-states/new-york-city-ny/rucker-park/',
    informations: [
      { key: 'courtName', value: '.location-header__headline' },
      { key: 'location', value: '.location-header p' },
      { key: 'rating', value: '.location-properties__content .text-large[data-rating-total]' }
    ]
  }).then(teste => {
    expect(teste).toStrictEqual([
      'Rucker Park',
      '155th Street & Frederick Douglass Blvd,\n' +
        '                                                        New York City, NY 10039,                            United States',
      'Rating 4.6 Stars'
    ]);
  });
});

```


# Considerações pessoais 

Durante o desafio a maior dificuldade foi realmente em realizar os testes, como não havia estudado ou tido experiência anteriormente. 
 

Não foi testado a função scraping_information(), pois não há muita lógica de negócio na mesma, apenas a iteração da função hooper.
 

Há erros nos testes de integração  devido a chamada assíncronas das funções, pois a função continua rodando mesmo depois de terminar o teste.
 

Na aba dos testes, há um código comentado que é a implementação do teste unitário e está comentado apenas para demonstrar que houve entendimento sobre o assunto. Os objetos mockados ‘browser’,  ‘page’ e ‘$eval’, que substituem os objetos reais do Puppeteer durante o teste, para criar um ambiente de teste mockado e evitar a dependência de um navegador real. Todos os códigos de teste foram escritos com a ajuda do Stackoverflow (https://stackoverflow.com/questions/65417870/how-to-mock-remote-website-responses-to-unit-test-puppeteer-code-with-jest). Não foi aplicado tempo suficiente para a correção destes problemas de teste sendo que no enunciado diz que é valorizado os testes mas não obrigatório.
 
 
Inicialmente foi feito o código apenas para extração de dados da página solicitada no desafio, mas escolhi outras 3 URLs também para demonstrar que decidi aprofundar no assunto. No código há um exemplo de URL completamente aleatório para testar se o código funciona para qualquer URL introduzida.
 

Por fim, agradeço a oportunidade de participar deste desafio para integração da equipe Hooper.
