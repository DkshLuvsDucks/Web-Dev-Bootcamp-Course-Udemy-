$("h1").addClass("big-title margin-50");
$("h1").text("aaaa");

$("button").html("<em>CLICK ME!</em>");
$("button.slide").html("<em>SLIDEE!</em>");

$("img").attr("src","duck2.jpg");

$("h1").click(function(){
    $("h1").css("color","#8ace00");
    $("body").css("background-color","black");
})

$("button").click(function(){
    $("h1").css("color","black");
    $("body").css("background-color","#8ace00");
})

$(document).keypress(function(event){
    $("h2").text("key pressed : "+event.key);
})

$("h1").on("mouseover mouseout", function() {
    $(this).toggleClass("hover");
});

$("img").click(function(){
    $("h1").fadeToggle();
})

$("button.slide").click(function(){
    $("h1").slideToggle();
})
