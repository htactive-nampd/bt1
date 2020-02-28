function onResize() {
    if ((window.innerWidth <= 992)) {
        $(".container").css("border", "none")
        $(".title h1").css("font-size", "32px")
        $(".title h3").css("font-size", "18px")
        $(".container").css("box-shadow", "none")
        $("body").css("background", "none")
        //console.log("remove border")

    } else {
        $(".container").css("border", "2px solid #000")
        $(".title h1").css("font-size", "45px")
        $(".title h3").css("font-size", "25px")
        $(".container").css("box-shadow", "5px 5px #000")
        $("body").css("background", "-moz-linear-gradient(left, rgba(242,241,230,1) 0%, rgba(254,182,69,1) 100%)")
    }
}