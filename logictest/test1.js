let words = 'beever';

const test = () => {
  let letter = '';
  for (let i = 0; i < words.length; i++) {
    letter += words[i];
    console.log(letter);
  }
};

console.log(test());
