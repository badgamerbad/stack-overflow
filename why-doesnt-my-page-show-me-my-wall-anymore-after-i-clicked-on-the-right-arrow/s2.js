$('.close').hide();
$(".item").on("click", function(e) {
    $(".wall").hide();
    var childId = $(e.currentTarget).data("childid");
    $("div[data-itemId='" + childId + "']").show();
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