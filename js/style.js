$(function () {
    // if ($(window).width() <= 760) {
    //     $("#news .banner1 img,#product .banner1 img").attr("src", $(".banner1 img").attr("data-l"))
    //     $("#news .banner1 img,#product .banner1 img").addClass("img-responsive")
    // } else if ($(window).width() <= 1000) {
    //     $(".banner1 img").attr("src", $(".banner1 img").attr("data-s"))
    //     $(".banner1 img").addClass("img-responsive")
    // } else if ($(window).width() <= 1200){
    //     $("#index .banner1 img").attr("src", $("#index .banner1 img").attr("data-s"))
    //     $("#index .banner1 img").removeClass("img-responsive")
    // } else {
    //     $(".banner1 img").attr("src", $(".banner1 img").attr("data-bm"))
    //     $(".banner1 img").removeClass("img-responsive")
    // }

    if ($(window).width() >= 1200) {
        $(".banner1 img").attr("src", $(".banner1 img").attr("data-bm"))
        $(".banner1 img").removeClass("img-responsive")
    } else if ($(window).width() >= 1000) {
        $("#index .banner1 img").attr("src", $("#index .banner1 img").attr("data-s"))
        $("#index .banner1 img").removeClass("img-responsive")
    } else if ($(window).width() >= 760) {
        $(".banner1 img").attr("src", $(".banner1 img").attr("data-s"))
        $(".banner1 img").addClass("img-responsive")
    } else {
        $("#news .banner1 img,#product .banner1 img").attr("src", $(".banner1 img").attr("data-l"))
        $("#news .banner1 img,#product .banner1 img").addClass("img-responsive")
        $(".banner1 img").attr("src", $(".banner1 img").attr("data-s"))
        $(".banner1 img").addClass("img-responsive")
    }
    if ($(window).width() <= 760) {
        $(".pl_sec2 div.line-big li").css("padding", "0")
        $(".pl_sec2 div.line-big").removeClass("line-big")
    }
    $("input,textarea").focus(function () {
        $(this).css("border-color", "#2e63bf")
    })
    $("input,textarea").blur(function () {
        $(this).css("border-color", "#eee")
    })

})