$(document).on('click', 'a', function(e) {
    var $a = $(this);
    var href = $a.attr('href');
    if (href.startsWith('#')) {
        // e.preventDefault();
        var destenation = $(href).offset().top;
        $("html, body").animate({ scrollTop: destenation }, 1000);
    }
})