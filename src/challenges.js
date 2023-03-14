// Desafio 1 - Crie a função compareTrue
const compareTrue = (paramA, paramB) => (paramA && paramB ? true : false);
// Desafio 2 - Crie a função splitSentence
const splitSentence = str => (str.split(' '));
// Desafio 3 - Crie a função concatName
const concatName = arr => (arr[arr.length - 1].concat(', ', arr[0]));
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => ((wins * 3) + (ties * 1));
// Desafio 5 - Crie a função highestCount
function highestCount(arrNum) {
  let maior = arrNum[0], aux = 0;
  for (i = 1; i < arrNum.length; i++) {
    if (arrNum[i] > maior) {
      maior = arrNum[i];
    }
  }

  for (j = 0; j < arrNum.length; j++) {
    if (arrNum[j] === maior) {
      aux++;
    }
  }

  return aux
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcRectangleArea = (base, height) => (base * height);
const calcTriangleArea = (base, height) => ((base * height) / 2);
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}
// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1'
  } else if (dist2 < dist1) {
      return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
