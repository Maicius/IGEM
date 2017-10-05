/**
 * Created by maicius on 2017/9/26.
 */

function click_scroll() {
    console.log("enter");
    var scroll_offset = $("#scu_project").offset();
    $("body,html").animate({
        scrollTop: scroll_offset.top
    }, 1000);
}

$(document).ready(function () {
        console.log(document.body.scrollTop);
        if (document.body.scrollTop > 700) {
            $('#scu_down_image').style.opacity = 0
        }
    }
);

$('#scu_down_image').bind('mousewheel', function(event, delta, deltaX, deltaY) {
    console.log(delta, deltaX, deltaY);
    console.log("bind")
});

$('#body').mousewheel(function(event, delta, deltaX, deltaY) {
    console.log(delta, deltaX, deltaY);
    console.log("event");
});
