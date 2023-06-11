const puppeteer = require('puppeteer')

const urls = [
{url: 'https://www.courtsoftheworld.com/united-states/new-york-city-ny/rucker-park/',
  informations: [ 
    { key: 'courtName', value: '.location-header__headline' },
    { key: 'location', value: '.location-header p' },
    { key: 'rating', value: '.location-properties__content .text-large[data-rating-total]' }
  ]
},

{url: 'https://www.courtsoftheworld.com/portugal/lisbon/campo-dos-martires-da-patria/',
  informations: [ 
    { key: 'courtName', value: '.location-header__headline' },
    { key: 'location', value: '.location-header p' },
    { key: 'rating', value: '.location-properties__content .text-large[data-rating-total]' }
  ]
},

{url: 'https://www.courtsoftheworld.com/portugal/coimbra/coimbra-choupal/',
  informations: [ 
  { key: 'courtName', value: '.location-header__headline' },
  { key: 'location', value: '.location-header p' },
  { key: 'rating', value: '.location-properties__content .text-large[data-rating-total]' }
  ]
},

{url: 'https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair/',
  informations: [
  { key: 'Tittle', value: '.post-content h1'}
  ]
}
];

async function hooper (data) {
    const browser = await puppeteer.launch({ headless: "new" })
    const page = await browser.newPage()
    await page.goto(data.url);

    var dados = [];
    
    for (const information of data.informations) {
      const info = await page.$eval(information.value, element => element.textContent.trim());
      console.log(information.key, ": ", info);
      dados.push( info);
      console.log(dados);
    }
    

    await browser.close();
    return dados;
  }



  async function scraping_information() {
    for (const url of urls) {
      await hooper(url);
      console.log('\n');
    }
  }

  scraping_information()
  .then(() => {
    console.log('Extração concluída.');
  })
  .catch((erro) => {
    console.error('Ocorreu um erro:', erro);
  });

  module.exports = hooper;