const { default: puppeteer } = require('puppeteer');
const hooper = require ('./index');

jest.setTimeout(30000);

test('scrap data from URLs', () => {
  return hooper ({
    url: 'https://www.courtsoftheworld.com/united-states/new-york-city-ny/rucker-park/',
      informations: [ 
      { key: 'courtName', value: '.location-header__headline' },
      { key: 'location', value: '.location-header p' },
      { key: 'rating', value: '.location-properties__content .text-large[data-rating-total]' }
  ]
}).then(teste =>{
  expect(teste).toStrictEqual([
  'Rucker Park',
  '155th Street & Frederick Douglass Blvd,\n' +
    '                                                        New York City, NY 10039,                            United States',
  'Rating 4.6 Stars'
])

})});




test('Extrair dados dos URLs',() => {
  return hooper({
    url: __dirname + '/Jest_test.html',
    informations: [ 
      { key: 'courtName', value: '.location-header__headline' },
      { key: 'location', value: '.location-header p' },
      { key: 'rating', value: '.location-properties__content .text-large[data-rating-total]' }
    ]
  }).then(teste =>{
    expect(teste).toStrictEqual([
      'Rucker Park',
      '155th Street & Frederick Douglass Blvd,\n' +
        '                                                        New York City, NY 10039,                            United States',
      'Rating 4.6 Stars'
    ])
  })
});


/* jest.mock ('puppeteer');

test('scrap data from URLs', () => {
  const browser = CDPBrowser {
    eventsMap: Map(2) { 'targetcreated' => [], 'targetchanged' => [] },
    emitter: {
      all: Map(2) { 'targetcreated' => [], 'targetchanged' => [] },
      on: [Function: on],
      off: [Function: off],
      emit: [Function: emit]
    }
  };
  const page = CDPPage {
  eventsMap: Map(0) {},
  emitter: {
    all: Map(0) {},
    on: [Function: on],
    off: [Function: off],
    emit: [Function: emit]
  }
};
const eval = 'Rucker Park';

puppeteer.launch.mockResolvedValue(browser);
browser.newPage.mockResolvedValue(page);
page.$eval.mockResolvedValue(eval);


  return hooper ({
    url: 'https://www.courtsoftheworld.com/united-states/new-york-city-ny/rucker-park/',
      informations: [ 
      { key: 'courtName', value: '.location-header__headline' },
      { key: 'location', value: '.location-header p' },
      { key: 'rating', value: '.location-properties__content .text-large[data-rating-total]' }
  ]
}).then(teste =>{
  expect(teste).toStrictEqual([
  'Rucker Park',
  '155th Street & Frederick Douglass Blvd,\n' +
    '                                                        New York City, NY 10039,                            United States',
  'Rating 4.6 Stars'
])

})});
*/