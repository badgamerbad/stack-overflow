$('.close').hide();
$(".item[data-toggle]").on("click", function(e) {
    e.preventDefault();
    var selector = $(this).data("toggle");  // get corresponding element
    $(".wall").hide();
    $(selector).show();
    $('.close').show();
});


$('.close').click(function(){
    $(".wall").hide();
    $('.close').hide();
});

var count = 0;
$('.links').hide();
$('.rechts').click(function(){
    $('.links').show();
    count+= 1;
    if(count >= 3){
        $('.rechts').hide();
    }
});
$('.links').click(function(){
    count-=1;
    if(count<3){
        $('.rechts').show();
    }
    if(count == 0){
        $('.links').hide();
    }
});