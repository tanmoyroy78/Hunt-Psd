$(document).ready(function () {
    $('.hi-slide').hiSlide(); // 以默认参数启动

    // 或
    $('#mySlide').hiSlide({ // 带参数启动
        interval: 3000, // 3秒一次的频率滚动
        speed: 500, // 1秒的切换动画
    });
    $('.venobox').venobox()
});