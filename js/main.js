$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 400) {
        $('#goFrom').fadeIn();
    } else {
        $('#goFrom').fadeOut();
    }
});
$(document).ready(function () {
    $("#goFrom").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});