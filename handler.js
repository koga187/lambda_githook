'use strict';
const fetch = require('node-fetch');	//npm install node-fetch

module.exports.hello = async (event) => {
const jsonEvent = JSON.parse(event.body);
console.log(jsonEvent);
if (jsonEvent.review.state == 'changes_requested') {
  console.log('Algum Miseravi precisa ajustar o PR...');
  //acender luz vermelha
} else {
  console.log('Alteraram o repositório fique de olho seu lascado!');
  //acender luz vermelha
}

return true;
};
