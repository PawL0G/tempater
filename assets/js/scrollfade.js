$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();

    $('.brand_logo').css({
        opacity: function() {
            let elementHeight = $(this).height(),
                opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});
