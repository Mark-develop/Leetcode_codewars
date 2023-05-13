//    PALINDROME **********
console.log('PALINDROME')
console.log('This method do checks the string for a palindrome, if the string is read equally in both directions, the method returns true')
//
palindrome('popapop')
palindrome('1 2 3 4 4 3 2 1')
palindrome('roirk')

function palindrome(str){
   str = str.toLowerCase().replace(/\s/g,'');
   let NewStr = str.split('').reverse().join('');

   console.log(NewStr === str)
   console.log(str);
}



//    FIND VOWELS 1 *********
console.log('');
console.log('FIND VOWELS 1');
console.log('This is first way to find volwes in string');
//

console.log('Earials');
console.log(FindVowels('Earials'));
console.log('Why');
console.log(FindVowels('Why'));  

function FindVowels(str){
   let count = 0;
   const vowels = ['a','e','i','o','u'];
   console.log(str);

   for (let char of str) {
       if (vowels.includes(char)){
           count += 1;
       }
   };
   
   return  count
}

//   FIND VOWELS 2 *********
console.log('');
console.log('FIND VOWELS 2');
console.log('This is second way to find volwes in string');
//
console.log('Earials');
console.log(FindVowels('Earials'));  
console.log('Why');
console.log(FindVowels('Why'));  

function FindVowels(str){
   const matched = str.match(/[aeiou]/gi);
   return matched ? matched.length : 0;
}

//    FIZZBUZZ 1 *********
console.log('');
console.log('This method print numbers from 1 to 30. Number multiple of 3 print "fizz", and print "Buzz" for multiples of 5, and lastly print "FizzBuzz" for multiples of 3 and 5 ');

FizzBuzz(30);

function FizzBuzz(num){
   for (let i = 1; i <= num; i++) {
       if (i % 3 === 0 && i % 5  === 0){
           console.log('FizzBuzz'); 
       } else
       if (i % 3 === 0){
           console.log('Fizz');
       } else
       if (i % 5 === 0){
           console.log('Buzz');
       } else{
           console.log(i);
       }
   }
}

 // this is just another way to write logic "if else" for a previous method. It takes up less space but is less readable
 console.log('')
 console.log('this is just another way to write logic "if else" for a previous method. It takes up less space but is less readable:');
 console.log('function FizzBuzzz(num){\nfor (let i = 1; i <= num; i++) {\ni % 3 === 0 && i % 5  === 0 ? console.log("FizzBuzz") :\ni % 3 === 0 ? "Fizz" : \ni % 5 === 0 ? "Buzz" : "i"; \n}}')

// function FizzBuzzz(num){
//   for (let i = 1; i <= num; i++) {
//        i % 3 === 0 && i % 5  === 0 ? console.log('FizzBuzz') :
//        i % 3 === 0 ? "Fizz" :
//        i % 5 === 0 ? "Buzz" : "i";
//   }
// }

// //ANAGRAMM ******

// anagram('Friend', 'Finder')  true
// anagram('hej', 'bye')  false

// function buildChar(str) {
//  const charObj = {};
//  str = str.toLowerCase().replace(/[^\w]/g, '');
//  for (let char of str) {
//      charObj[char] = charObj[char] + 1 || 1;
//  }
//  return charObj;
// }

// function anagram(strA, strB){
//  const CharObj1 = buildChar(strA)
//  const CharObj2 = buildChar(strB)

//  if (Object.keys(CharObj1).length !== Object.keys(CharObj2).length){
//      return "it isn't anogramm"
//  }

//  for (let char in charObj1){
//      charObj1[char] !== CharObj2[char] ? false : true;
//  }
// }

