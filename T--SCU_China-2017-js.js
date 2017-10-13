/**
 * Created by maicius on 2017/9/26.
 */

$(document).ready(function () {
        $(window).scroll(function () {

            // 隐藏侧边导航栏
            console.log($(window).scrollTop());
            if($(window).scrollTop() >= 200) {
                $('#scu_nav_side').css("margin-left", "0px");
            }else {
                $('#scu_nav_side').css("margin-left", "-700px");
            }

            //隐藏下拉按钮
            if ($(window).scrollTop() >= 500) {
                $('#scu_down').css("opacity", "0.0");
            }
            else{
                $('#scu_down').css("opacity", "1.0");
            }
        })
});

$('#scu_down_image').bind('mousewheel', function (event, delta, deltaX, deltaY) {
    console.log(delta, deltaX, deltaY);
    console.log("bind")
});

$('#body').mousewheel(function (event, delta, deltaX, deltaY) {
    console.log(delta, deltaX, deltaY);
    console.log("event");
});
