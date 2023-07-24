//Animate Smooth Scroll
$('#scroll-down').on('click', function() {
    const target = $('#database').position().top;

    $('html, body').animate(
        {
            scrollTop: target
        },
        2000
    );
});
