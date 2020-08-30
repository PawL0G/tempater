document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
        .from('.elem_1', 4, {
            y: 100,
            x: -150,
            ease: Power3.easeInOut
        })
        .from('.elem_2', 4, {
            y: -150,
            x: -250,
            ease: Power3.easeInOut
        }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '#sc',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
        .setTween(timeline)
        .setPin('#sc')
        .addTo(controller);


    var tween = TweenMax.to(".background-container", 1, {scale:0.5, opacity:0, ease:Linear.easeNone});

    var pinSceneIntro = new ScrollMagic.Scene({
            triggerElement: '#intro',
            triggerHook: 0,
            duration: '100%'
        })
            .setTween(tween)
            .setPin('#intro .background-container')
            .addIndicators()
            .addTo(controller);
})