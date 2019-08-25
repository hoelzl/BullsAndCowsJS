// Wordlist generated using https://www.randomlists.com/random-words
const dict = [
  'bull',
  'cow',
  'accessible',
  'adjoining',
  'attach',
  'average',
  'back',
  'bathe',
  'bore',
  'capable',
  'curvy',
  'dazzling',
  'desert',
  'deserve',
  'elastic',
  'five',
  'grieving',
  'handle',
  'hose',
  'hour',
  'lock',
  'neck',
  'oatmeal',
  'rapid',
  'ratty',
  'self',
  'snotty',
  'teeny',
  'telephone',
  'true',
  'various',
  'wry'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomWord() {
  return dict[getRandomInt(dict.length)];
}

export default getRandomWord;
