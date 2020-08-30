$(document).ready(function() {
    let smoothScroll = new scrollToSmooth('a', {
        easing: 'easeInOutBack',
        duration: 1200,
        durationRelative: true,
        onScrollStart: (data) => { console.log(data); },
        onScrollUpdate: (data) => { console.log(data); },
        onScrollEnd: (data) => { console.log(data); },
    });
    smoothScroll.init();
})