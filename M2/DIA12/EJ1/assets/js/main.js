$(document).ready(function() {
    $('#titulo-clickeable').on("click", function() {
        $('h1').css({"color": "red", "background-color":"blue"})
    })

    $("#titulo-clickeable").on("dbclick", function() {
        $(this).css({"color": "green", "background-color":"purple"})
    })

    $(".parrafo").on("click", function() {
        $(this).fadeOut("slow")
    })
})



