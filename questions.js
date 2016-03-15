var selectElementsStartingWithA = function(array) {
  return array.filter(function(element) {
    if (element[0] === 'a') {
      return element;
    }
  });
};


var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(element) {
  return (/^[aeiou]/).test(element);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(element){ return element != undefined });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element){
    return (element !== null && element !== false);
  });
};

var reverseWordsInArray = function(array) {
  var result = [];
  array.forEach(function(element){
    result.push(element.split("").reverse().join(""));
  });
  return result;
};

var everyPossiblePair = function(array) {
  if (array.length < 2) { return []; }
  var newArray = array.sort(),
      first = newArray[0],
      rest  = newArray.slice(1),
      pairs = rest.map(function (person) { return [first, person]; });
  return pairs.concat(everyPossiblePair(rest));
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  newArray = reverseWordsInArray(array).sort();
  return reverseWordsInArray(newArray);
};

var getFirstHalf = function(string) {
  var isEvenLength = function(string) { return string.length % 2 === 0;};
  if (isEvenLength(string)){
    indexHalf = string.length / 2;
  } else {
    indexHalf = string.length / 2 +1;
  }
  return string.substring(0, indexHalf);
};

var makeNegative = function(number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
  palindromes = []
  array.forEach(function(element){
    if (element.split("").reverse().join("") === element){
      palindromes.push(element);
    }
  });
  return palindromes.length;
};

var shortestWord = function(array) {
  var shorter = [array.pop()];
  array.forEach(function(word){
    if (word.length < shorter[0].length){
    shorter = [word];
    }
  });
  return shorter.pop();
};

var longestWord = function(array) {
  var longer = [array.pop()];
  array.forEach(function(word){
    if (word.length > longer[0].length){
    longer = [word];
    }
  });
  return longer.pop();
};

var sumNumbers = function(array) {
  return array.reduce(add, 0);
  function add(a, b) {return a + b;}
};

var repeatElements = function(array) {
  dupes = [array];
  dupes.push(array);
  return dupes.reduce(function (a, b){
    return a.concat(b);
  });
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  return sumNumbers(array) / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  return array.forEach(function(element){
    return (element <= 5);
  });
};

var convertArrayToObject = function(array) {
  return 'Write your method here';
};

var getAllLetters = function(array) {
  return 'Write your method here';
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return 'Write your method here';
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  return 'Write your method here';
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return 'Write your method here';
};

var factorial = function(number) {
  return 'Write your method here';
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return 'Write your method here';
};

var letterPosition = function(array) {
  return 'Write your method here';
};
