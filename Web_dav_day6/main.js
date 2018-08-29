// isEven
// true/false

// function isEven (a){
//     if(a % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(5));

// function isEven (number) {
//     if (number % 2 == 0) {
// return true;}
//         return false;
// }
// console.log('number 2 is even' + isEven(2));
// console.log('number 3 is even' + isEven(3));
// console.log('number 4 is even' + isEven(4));
// console.log('number 5 is even' + isEven(5));
// console.log('number 6 is even' + isEven(6));

// function isEven (number) {
//  return number % 2 == 0;
// }
// console.log('number 2 is even' + isEven(2));
// console.log('number 3 is even' + isEven(3));
// console.log('number 4 is even' + isEven(4));
// console.log('number 5 is even' + isEven(5));
// console.log('number 6 is even' + isEven(6));


// function isEven(number) {
//     return number % 2 == 0 ? 'Is even' : 'is odd';
// }

// function isEven (number) {
//     if (number % 2 == 0 && number % 3 == 0) {
//         return 'Fizz Bazz'
//     }
//     if (number % 2 == 0) {
//         return 'Fizz' ;
//     }
//     if (number % 3 == 0){
//         return 'Bazz' ;
//     }
//     else {
//         return number ;
//     }
// }
// console.log(isEven(3));
// console.log(isEven(7));
// console.log(isEven(100));
// console.log(isEven(97));
// console.log(isEven(30));

// funciju iekš objekta sauc par metodi

// var isEven2 = function (number) {
// return number % 2 == 0 ? 'is even' : 'is odd';
// }
// console.log('number 2 ' + isEven2(2));
// console.log('number 3 ' + isEven2(3));
// console.log('number 4 ' + isEven2(4));
// console.log('number 5 ' + isEven2(5));
// console.log('number 6 ' + isEven2(6));

var cat = {
    name: 'Muris',
    hunger: 10,
    feed: function(){
        this.hunger--;
    }
}
// console.log(cat);
// cat.feed();
// console.log(cat);

// var foo = 'bar';
// console.log(foo.split(''));

// funkcija, kas kā parametru saņem vienu vārdu un atgriež so vārdu spoguļrakstā (no otras puses)
//uztaisīt funkciju, kas parametru saņem tekstu un atgriež true vai false, vai sis teksts ir palindroms (lasās no abām pusēm)


// console.log('alus'.split('').reverse().join(''));

// function reverseWord(word) {
//     return word.split('').reverse().join('');
// }
// // console.log(reverseWord('Jānis'));

// function isPalindrom(word) {
//     return word == reverseWord(word);
// }
// console.log(isPalindrom('Jānis'));
// console.log(isPalindrom('racecar'));
// console.log(isPalindrom('eye'));

function isAnagram(string, string2) {
    if (string.lenght !== string2.lenght) {
        return false;
    }
    var sortString = string.split('').sort().join('').trim();
    var sortString2 = string2.split('').sort().join('').trim();
    return (sortString === sortString2);

}

console.log(isAnagram('foo', 'bar'));
console.log(isAnagram('true lady', 'adultery'));
console.log(isAnagram('dog', 'god'));
console.log(isAnagram('cat', 'rat'));
console.log(isAnagram('house', 'mouse'));

function isAnagram(name1, name2) {
    name1 = name1.replace(' ', '').split('').sort().join('');
    name2 = name2.replace(' ', '').split('').sort().join('');
return name1 == name2;
}
console.log('foo' + isAnagram('foo', 'bar'));
console.log('aaa' + isAnagram('aaa', 'aaa'));
console.log('a a a' + isAnagram('a a a', 'a b a'));
console.log('random' + isAnagram('kdjdhs', 'akaah'));

