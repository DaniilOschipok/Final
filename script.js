$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger, .nav').toggleClass('active');
    })
    $('.cross_btn').click(function(event) {
        $('.nav').toggleClass('active');
    })
})

