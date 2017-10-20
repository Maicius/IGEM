/**
 * Created by maicius on 2017/9/26.
 */

$(document).ready(function () {
        $(window).scroll(function () {
            // 隐藏侧边导航栏
            if($(window).scrollTop() >= 200) {
                //$('#scu_nav_side').animate({marginLeft:"0px"}, 1000);
                $('#scu_nav_side').css("margin-left", "0px");
            }else {
                //$('#scu_nav_side').animate({marginLeft:"-700px"}, 1000);
                $('#scu_nav_side').css("margin-left", "-700px");
            }

            //隐藏下拉按钮
            if ($(window).scrollTop() >= 500) {
                $('#scu_down').css("opacity", "0.0");
            }
            else{
                $('#scu_down').css("opacity", "1.0");
            }
        });



});


function click_to_down() {
    console.log("enter");
    var height = $('#scu_nav_bannerBack').offset();
    $('html,body').animate({scrollTop: height.top}, 500);
}