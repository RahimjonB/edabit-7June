//1. Write a function that returns the number of dots when given its corresponding triangle number of the sequence.
function triangle(n) {
    let dots = 0;
    for (let i = 1; i <= n; i++) {
      dots += i;
    }
    return dots;
  }

//2. Create a function that counts the integer's number of digits.
function count(number) {
    let count = 0;
    let num = Math.abs(number);
  
    while (num >= 1) {
      num = Math.floor(num / 10);
      count++;
    }
  
    return count;
  }

//3. Given an input string, reverse the string word by word, the first word will be the last, and so on.
function reverseWords(str) {
    let trimmedStr = str.trim();
    let words = trimmedStr.split(/\s+/);
    let reversedWords = words.reverse();
    return reversedWords.join(' ');
  }

//4. An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
function isSpecialArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && arr[i] % 2 !== 0) {
        return false;
      }
      if (i % 2 !== 0 && arr[i] % 2 === 0) {
        return false;
      }
    }
    return true;
  }

//5. Create a function that returns true if all parameters are truthy, and false otherwise.
function allTruthy(...args) {
    return args.every(Boolean);
  }

//6. Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
function progressDays(miles) {
    let count = 0;
    
    for (let i = 1; i < miles.length; i++) {
      if (miles[i] > miles[i - 1]) {
        count++;
      }
    }
    
    return count;
  }

//7. Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.
function uniqueSort(arr) {
    let uniqueSet = new Set(arr);
    let sortedArray = Array.from(uniqueSet).sort((a, b) => a - b);
    return sortedArray;
  }

//8. Create a function that returns the mean of all digits.
function mean(number) {
    let sum = 0;
    let count = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += digit;
      count++;
      number = Math.floor(number / 10);
    }
    let mean = Math.floor(sum / count);
    return mean;
  }
  
//9. Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
function capMe(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
  }

  
//10. Create a function that takes a number as its argument and returns an array of all its factors.
function factorize(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

//11. Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.
function emphasise(str) {
    let words = str.split(' ');
    let capitalizedWords = words.map(word => {
      let firstLetter = word.charAt(0).toUpperCase();
      let restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
    return capitalizedWords.join(' ');
  }

//12. Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
    let modifiedStr = str.replace(/[abc]/gi, '');
    if (modifiedStr === str) {
      return null;
    }
    return modifiedStr;
  }

//13. Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.
function firstPlace(road) {
    if (!road) {
      return "No road available";
    }
    for (let i = 0; i < road.length; i++) {
      const char = road.charAt(i);
      if (/[a-zA-Z]/.test(char)) {
        return char;
      }
    }
    return "No car available";
  }

//14. Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
function identicalFilter(arr) {
    return arr.filter(str => str.split('').every(char => char === str[0]));
  }  

//15. Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.
function flickSwitch(arr) {
    let switchFlag = false;
    return arr.map(item => {
      if (item === "flick") {
        switchFlag = !switchFlag;
      }
      return switchFlag;
    });
  }

//16. A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.
function isHarshad(num) {
    let sumOfDigits = 0;
    let tempNum = num;
    while (tempNum > 0) {
      sumOfDigits += tempNum % 10;
      tempNum = Math.floor(tempNum / 10);
    }
    return num % sumOfDigits === 0;
  }

//17. Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.
function miniPeaks(arr) {
    let result = [];
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        result.push(arr[i]);
      }
    }
    return result;
  }

//18. Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.
function stepsToConvert(str) {
    let lowercaseSteps = 0;
    let uppercaseSteps = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (char === char.toLowerCase()) {
        uppercaseSteps++;
      } else {
        lowercaseSteps++;
      }
    }
    return Math.min(lowercaseSteps, uppercaseSteps);
  }

//19. Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
function checkSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === n) {
          return true;
        }
      }
    }
    return false;
  }

//20. Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.
function indexShuffle(str) {
    let evenChars = '';
    let oddChars = '';
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        evenChars += str[i];
      } else {
        oddChars += str[i];
      }
    }
    return evenChars + oddChars;
  }
  