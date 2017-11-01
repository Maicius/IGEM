/**
 * Created by maicius on 2017/9/26.
 */

$(document).ready(function () {
    resize_window();
        $(window).scroll(function () {
            if(window.innerWidth > 1400) {
                // 隐藏侧边导航栏
                if ($(window).scrollTop() >= 200) {
                    //$('#scu_nav_side').animate({marginLeft:"0px"}, 1000);
                    $('#scu_nav_side').css("margin-left", "20px");
                } else {
                    //$('#scu_nav_side').animate({marginLeft:"-700px"}, 1000);
                    $('#scu_nav_side').css("margin-left", "-700px");
                }

                //隐藏下拉按钮
                if ($(window).scrollTop() >= 500) {
                    $('#scu_down').css("opacity", "0.0");
                }
                else {
                    $('#scu_down').css("opacity", "1.0");
                }
            }
            else{
                $('#scu_nav_side').css("margin-left", "-700px");
            }
        });
    window.onresize = function(){
        if(window.innerWidth < 1400){
            $('#scu_nav_side').css("margin-left", "-700px");
        }
    }
});


function click_to_down() {
    console.log("enter");
    var height = $('#scu_nav_bannerBack').offset();
    $('html,body').animate({scrollTop: height.top}, 500);
}

window.onresize = function(){
    if(window.innerWidth < 1400){
        $('#scu_nav_side').css("margin-left", "-700px");
    }
};
$(window).resize(function(){
    if(window.innerWidth < 1400){
        $('#scu_nav_side').css("margin-left", "-700px");
    }
});

function click_nav() {
    console.log()
    var id = $(this).data("name");
    var str = "'#" + id + "'";
    var height = $(str).offset();
    $('html,body').animate({scrollTop: height.top}, 500);
}

$(window).resize(function () {
   resize_window();
});
function resize_window() {
    console.log("resize");
    var left = $('#left').height();
    var right = $('#middle').height();
    var middle = $('#right').height();
    var newHeight = left > right ? left : right;
    var Height = newHeight > middle ? newHeight: middle;
    // console.log(newHeight);
    $('#left_wrapper').css("height", Height + 30);
    $('#right_wrapper').css("height", Height + 30);
    $('#middle_wrapper').css("height", Height + 30);

    // var windowHeight = $(document).outerHeight();
    // $('#scu_nav_wrapper').css("height", windowHeight);
}