var someNumber = 123; //veselu skaitli sauc par integer//
var someDecimal = 3.14; //decimālskaitli sauc par float//
var someWord = 'Hello world!'; //teksts = string var rakstīt gan '', gan "", gan ``//
var someTrue = true; //boolean (bool), raksta bez '', true vai false//
var someNothing = null; //null - mainīgajama nav vērtības, bet ir definēts//

var someArray = [
    'vaz', 
    'zaz', 
    'gaz', 
    'maz', 
    'bmw', 
    1, 
    3.14, 
    true, 
]; //array = masīvs saraksts ar vairākām lietām//
var i = 1;
// console.log(someArray[i]);//jāsāk skaitit no 0, nevis no 1//

var johnny = {
    name: 'Johnny',
    surname: 'Doe',
    fullName: 'Johnny Doe',
    age: '21',
} //objekts ir key value pāris - atslēga un vērtība, var būt gan teksts gan cipars
// console.log(johnny.name);
// console.log(johnny[fullName])//


// var a = 'foo';
// console.log(a);
// a = 'bar';
// console.log(a);
// a = 'baz';
// console.log(a);
// a = 1;
// console.log(a);
// a = 2;
// console.log(a);
// a = 3;
// console.log(a);
// var number1 = 2;
// var number2 = 4;
// console.log(1+1); // + - * / % //
// console.log(2+2*2);
// console.log(number1 + number2);
// console.log(number1 + 4);
// var number3 = number1 - number2;
// console.log(number3);
// number1 = number1 +1;
// number1 +=1;
// number1++;
// number1--;
// --number1;
// console.log(number1); šeit izpilda visas iepriekšējās uzrakstītās darbības

// console.log('foo' + 'bar');
// console.log(1 + '1');
// console.log('1' + 1);

//== ir vienāds
//!= nav vienāds (! nozīmē not = not equal)
//>
//<
//>=
//<=
//=== strict comparison (eaqual) salīdzina ne tikai mainīgā vērtību, bet arī tipu
//!== strict comparison (not eaqual)

// if (true) {
//     console.log('was true');
// } else {
//     console.log('was not true');
// }

// var name = 'Jānis';
// if (name = 'Anna') {
//     console.log('Čau Anna');
// } else if (name == 'Jānis') {
//         console.log('whats up Jānis');
//     }else {
//     console.log('Nepazīstu Tevi');
// }
// [] izmanto masīvā, {} izmanto blokiem, () kad izsauc funkciju vai dod parametru if
var a = 1;
var b = 2;
var c = 3;

// && nozīmē un
// || nozīmē vai
// if (a == 2 && b == 3 || c == 3) {

// }

// var name = 'Liene';
// if (name == 'Jānis' || name == 'Kārlis' || name == 'Zane') {
//     console.log('Čau, zināmais cilvēk!');
// }else {
//     console.log('Nepazīstu Tevi');
// }
// var name = 'Kārlis';

// switch (name) {
//     case 'Jānis':
//     console.log('Čau, zinamais cilvēk!');
//     break;
//     case 'Kārlis':
//     console.log('Čau, zinamais cilvēk!');
//     break;
//     case 'Liene':
//     console.log('Čau, zinamais cilvēk!');
//     break;
//     default:
//     console.log('Nepazīstu Tevi');
// }
// ja neieliek brake, izpildās default. Lai izspildītos nosacījumi, ir jāsastopas ar break

// cikls - vienu un to pašu darbību izpilda vairākas reizes - while

// var i = 0;
// while (i < 10) {
//     if (i < 5) {
//         console.log(i);
//     }
//     i++;    
// }

// var a = 0;
// while (a < 20) {
//     if (a % 2 == 0) {
//         console.log(a);
//     }
//     i++;
// }

// var i = 0;
// while (i < 20) {
//     console.log(i);
//     i += 2;
// }

// var i3 = 20;
// while (i3 >= 0) {
//     i3--;
//     console.log(i3);
// }

// var i = 0;
// while (i < 20) {
//     i++;
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// 

var cars = ['vaz', 'gaz', 'zaz', 'maz', 'uaz', 'bmw'];
var superCar = 'gaz';
for (var index = 0; index < cars.length; index++) {
    // console.log(car);
    var car = cars[index];
    if (car = superCar) {
        // console.log(car);
    }
    
}
addTwoNumbers(2, 3);
function addTwoNumbers(number1, number2) {
    var sum = number1 + number2;
    console.log(sum);
}
// console.log(addTwoNumbers(2, 3));
// funcija saņem 2 parametrus - cilvēka vārdu un vecumu
// Kārlis, 50
//čau, Kārli, Tev ir 50 gadi!

// function person(name, age) {
//     console.log('Čau ' + name + ',Tev ir ' + age + 'gadi!');
    
// }
// person('kārlis', 50);

// var i = 0;
// while (i < 31); {
//     if (i < 31) {
//         console.log(i);}
//         i++;
//         if (i % 2 == 0);{
//              console.log('Fizz');
//             }
//         if (i % 3 == 0);
//         console.log('Bazz');
//         if (i % 2 == 0 && i % 3 == 0);
//         console.log('Fizz Bazz');
//         if (i % 2 != 0 && i % 3 != 0);
//         console.log(i);
    
// }

// var i = 0;
// while (i < 31);{
//     if (i % 2 == 0);{
//         console.log('Fizz');
//     }
//     if (i % 3 == 0);{
//         console.log('Bazz');
//     }
//     if (i % 2 == 0 && i % 3 == 0);{
//         console.log('Fizz Bazz');
//     }
//     if (i % 2 != 0 && i % 3 == 0);{
//         console.log(i);
//     }
// }

for (var i = 0; i <= 30; i++) {
var output = '';
if (i % 2 == 0) {
    output = 'Fizz ';
}
if (i % 3 == 0) {
    output += 'Bazz';
}
if (output == '') {
    output = i;
}
console.log(output);
}