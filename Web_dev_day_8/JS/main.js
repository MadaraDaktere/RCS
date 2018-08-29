// function changeWord() {
//     var element = document.querySelector('#some-button')
//     if (element.innerText == 'baz') {
//         element.innerText = 'foo';
//     } else if (element.innerText == 'foo') {
//         element.innerText = 'bar';
//     } else {element.innerText = 'baz'}
// }

// function change() {
//     var elements = document.querySelectorAll('.some-paragraph')
//     for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     var number = i + 1;
//     if (element.innerText == 'foo ' + number) {
//         element.innerText = 'bar ' + number;
//     } else {
// element.innerText = 'foo ' + number;
//     }
//     }
// }


function add(number) {
    var element = document.getElementById('number');
    var value = parseInt(element.value);
    element.value = value + number;
}
 































