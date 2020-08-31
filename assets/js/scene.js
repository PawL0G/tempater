document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();

    timeline
        .from('.elem_1', 4, {
            y: -260,
            x: -120,
            scale: 0.8,
            ease: Power3.easeInOut
        })
        .from('.elem_2', 4, {
            y: -250,
            x: 90,
            scale: 0.7,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.elem_3', 4, {
            y: 120,
            x: -250,
            scale: 0.9,
            ease: Power3.easeInOut
        }, '-=4')
        .from('.middle', 4, {
            scale: 1.2,
            opacity: 1,
            ease:Linear.easeNone
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


    let tween = TweenMax.to(".background-container", 1, {scale:0.5, opacity:0.5, ease:Linear.easeNone});

    let pinSceneIntro = new ScrollMagic.Scene({
            triggerElement: '#intro',
            triggerHook: 0,
            duration: '100%'
        })
            .setTween(tween)
            .setPin('#intro .background-container')
            .addIndicators()
            .addTo(controller);

});