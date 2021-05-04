$("#thick1").on('click', function(e){
    thickness=2;
    thicknessspray=5
})

$("#thick2").on('click', function(e){
    thickness=4;
    thicknessspray=10
})
$("#thick4").on('click', function(e){
    thickness=6;
    thicknessspray=15
})
$("#thick6").on('click', function(e){
    thickness=8;
    thicknessspray=20
})
$("#thick8").on('click', function(e){
    thickness=10;
    thicknessspray=25
})

$("#draw-line-button, #paint-button, #spray, #erase-button, #straight-line-button, #curve-button").on("click",function(e){
    $('.stroke-size-panel').fadeIn(220);
    $('.stamp-panel').hide();
})
