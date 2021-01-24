var btnTop = $('#btnTopOnScroll');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btnTop.addClass('show');
    } else {
        btnTop.removeClass('show');
    }
});

btnTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});