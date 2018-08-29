// function buttonClick() {
//     var element = document.querySelector('#some-paragraph');
//     // console.log(element);
//     // console.log(element.innerHTML);  
//     // console.log(element.innerText);
//     if (element.innerText == 'foo') {
//         element.innerText = 'bar';
//     } else {
//         element.innerText = 'foo';
//     }
//     //    setTimeout(buttonClick, 2000);

// }

function buttonClick() {
    var element = document.querySelector('#text');
    if (element.innerText == 'foo') {
        element.innerText = 'bar';
    } else {
        element.innerText = 'foo';
    }
}



// setInterval(buttonClick, 500);
// rekursija - funkcijas, kas izsauc pati sevi
// function checkParagraphContent() {
//     var elements = document.querySelectorAll('.other-paragraph');
//     for (var i = 0; i < elements.length; i++) {
//         var element = elements[i];
//         if (element.innerText == 'foo') {
//             element.innerText = 'bar';
//         } else {
//             element.innerText = 'foo';
//         }
//     }

// }

// function checkParagraphContent() {
//     var elements = document.querySelectorAll('.other-paragraph');
//     for (var i = 0; i < elements.length; i++) {
//         var element = elements[i];
//         var number = i + 1;
//         if (element.innerText == 'foo ' + number) {
//             element.innerText = 'bar ' + number;
//         } else {
//             element.innerText = 'foo ' + number;
//         }
//     }

// }


// function add (number) {
//     var element = document
//     .getElementById('number');
//     var currentValue = parseInt(element.innerText);
//     element.innerText = currentValue + number;
// }

// var count = 0;
// function addCount() {
// count++;
// document
// .getElementById('counter')
// .innerText = count;
// }
// // console.log(document.querySelectorAll('.other-paragraph'));
