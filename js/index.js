window.onload = function () {
    let circleRed = document.querySelector('.circle-red')
    let circleBlue = document.querySelector('.circle-blue')
    let realContent = document.querySelector('.container-real')
    window.onscroll = function (e) {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrolltop)
        if (scrolltop > 1300) {
            realContent.style.transform = 'translateY(' + -(scrolltop - 1300) + 'px)'
        } else {
            realContent.style.transform = 'translateY(' + 0 + 'px)'
        }
        if (scrolltop <= 1500){
            circleRed.style.top = scrolltop + 'px'
            circleBlue.style.top = -scrolltop + 'px'
        }
    }




    //2、事件监听
    particlesJS.load('particles', './particles.json', function () { //加载粒子
        console.log('callback - particles.js config loaded');
    });
}