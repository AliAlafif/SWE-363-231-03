const readline = require('readline');

const questions = [
  'What is the capital city of Saudi Arabia?',
  'How many provinces does Saudi Arabia have?',
  'What is the official language of Saudi Arabia?',
  'What is the currency of Saudi Arabia?',
  'What is the largest city in Saudi Arabia?',
  'What is the significance of the Red Sea for Saudi Arabia?',
  'What is the population of Saudi Arabia?',
  'What are the major industries in Saudi Arabia?',
  'What is the highest peak in Saudi Arabia?',
  'What is the historical significance of the city of Mecca in Saudi Arabia?',
  'What are some famous landmarks in Saudi Arabia?',
  'Is Saudi Arabia known for its oil reserves?'
];

const answers = [
  'The capital city of Saudi Arabia is Riyadh.',
  'Saudi Arabia has 13 provinces.',
  'The official language of Saudi Arabia is Arabic.',
  'The currency of Saudi Arabia is the Saudi Riyal (SAR).',
  'The largest city in Saudi Arabia is Riyadh.',
  'The Red Sea is significant for Saudi Arabia as it has a coastline along the western part of the country and is strategically important for trade and transportation.',
  'As of my knowledge cutoff date in 2022, the population of Saudi Arabia is approximately 35 million.',
  'Major industries in Saudi Arabia include petroleum, petrochemicals, manufacturing, and construction.',
  'The highest peak in Saudi Arabia is Jabal Sawda, which is part of the Asir Mountains.',
  'Mecca is of great historical and religious significance in Saudi Arabia as it is the holiest city in Islam and the birthplace of the Prophet Muhammad.',
  'Some famous landmarks in Saudi Arabia include the Kaaba in Mecca, the Kingdom Centre Tower in Riyadh, and the historic Diriyah district.',
  "Yes, Saudi Arabia is known for its extensive oil reserves, and it is one of the world's leading oil producers and exporters."
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let exitCommand = 'exit';

rl.on('line', (line) => {
  if (line === exitCommand) {
    console.log('Thank you for interacting with the Saudi Arabia chatbot.');
    rl.close();
    return;
  }

  const questionIndex = questions.indexOf(line);
  if (questionIndex !== -1) {
    console.log(answers[questionIndex]);
  } else {
    console.log('Sorry, I didn\'t understand your question.');
  }
});

rl.on('close', () => {
  console.log('Chatbot session closed.');
});
