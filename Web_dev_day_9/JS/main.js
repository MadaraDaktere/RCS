// document
// .getElementById('some-btn')
// .addEventListener('click', function() {
//     var el = document.getElementById('super-p');
//     if (el.innerText == 'foo') {
//         el.innerText = 'bar';
//     } else {
//         el.innerText = 'foo';
//     }

// });



// function changeParagraphText() {
//     var el = document.getElementById('super-p');
//     if (el.innerText == 'foo') {
//         el.innerText = 'bar';
//     } else {
//         el.innerText = 'foo';
//     }

// }


// jQuery aizstāj ar $ zīmi
// $('#some-btn').click(function(){
//     $('.super-p').each(function() {
//         var num = $(this).attr('data-number');
//            if ($(this).html() == 'foo ' + num) {
//        $(this).html('bar ' + num);
//    } else if ($(this).html() == 'bar ' + num) {
//        $(this).html('baz ' + num);
//    } else {
//     $(this).html('foo ' + num);
//    }

//     });
// });

$('#some-btn').click(function () {
    if ($('.super-p span').html() == 'foo') {
        $('.super-p span').html('bar');
    } else if ($('.super-p span').html() == 'bar') {
        $('.super-p span').html('baz');
    } else {
        $('.super-p span').html('foo');
    }
});

$('#some-other-btn').click(function () {
    $('.super-p').toggle(2000);
});

// 2000 iekavās nozīmē milisekundes, laiku. Tas pats ar slideUp
// toggle parāda kaut ko nospiežot pogu

$('.add').click(function () {
    var action = $(this).attr('data-action');
    var currentNumber = $('#some-input').val();
    var newValue = parseInt(currentNumber) + parseInt(action);
    $('#some-input').val(newValue);
});