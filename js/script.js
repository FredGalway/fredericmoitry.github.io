/*
$('input').on('change', function() {
    $('body').toggleClass('mentol');
});
*/

e = $('#message-1').addClass('card');
f = $('#message-2').addClass('card');
g = $('#message-3').addClass('card');


a = $('#item-1').val('1');
b = $('#item-2').val('2');
c = $('#item-3').val('3');


var x

function shufflerandomay() {
    x = Math.floor((Math.random() * 4))

    console.log(x);
}

var groupImg1 = [
    "img/testimonial_01.svg",
    "img/testimonial_02.svg",
    "img/testimonial_03.svg"
];

var groupImg2 = [
    "img/testimonial_04.svg",
    "img/testimonial_05.svg",
    "img/testimonial_06.svg"
];

/*
var groupImg3 = [
    "img/testimonial_03.svg",
    "img/testimonial_04.svg",
    "img/testimonial_05.svg",
    "img/testimonial_06.svg"
];
*/

$(document).ready(function() {
    shufflerandomay(groupImg1[x])
    $("#img1").attr("src", groupImg1[x])

    shufflerandomay(groupImg2[x])
    $("#img2").attr("src", groupImg2[x])

    shufflerandomay(groupImg1[x])
    $("#img3").attr("src", groupImg1[x])
});




$('input, .previous').on('click', function() {
    shufflerandomay(groupImg1[x])
    shufflerandomay(groupImg2[x])
    shufflerandomay(groupImg1[x])

    console.log(a)
    console.log(b)
    console.log(c)


    $("#img1").attr("src", groupImg1[x])
    $("#img2").attr("src", groupImg2[x])
    $("#img3").attr("src", groupImg1[x])
})


$('.previous').on('click', function() {
    const slideLeftChecked = document.querySelectorAll('input[id="item-3"]');
    let selectedValue;
    for (const rb of slideLeftChecked) {
        if (rb.checked) {
            selectedValue = rb.value;
            alert("Position " + selectedValue);
            break;
        } else if (selectedValue == 1) {
            $('#item-3:checked~.cards #message-1').addClass('slideRight');

        } else if (selectedValue == undefined) {
            //$('#item-1').addClass('slideLeft');
            $('#message-1').addClass('slideRight');
            //$('#item-3:checked~.cards #message-1').addClass('slideRight');
            //$('#item-3').addClass('slideLeft');
        }
    }
});

$('.next').on('click', function() {
    const slideRightChecked = document.querySelectorAll('input[id="item-1"]');
    let selectedValue;
    for (const rb of slideRightChecked) {
        if (rb.checked) {
            selectedValue = rb.value;
            alert("Position " + selectedValue);
            break;
        } else if (selectedValue == undefined) {
            alert("Anim " + "off")
        }
        /*else if (selectedValue == undefined) {
                   alert("Anim " + "off")
               } */
    }
});