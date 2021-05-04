class Stamp extends Painting {
    constructor(ctxreal) {
    super();
    // $('.bottom-nav').hide();
    this.ctxreal = ctxreal;
    this.ctxdraft = ctxdraft;
    $('.stamp-panel').fadeIn(220); 
    $('.stroke-size-panel').hide();
}

onMouseDown(coord, event) {
    // this.draw(this.ctxreal, coord);
    // saveMove();
    var img = new Image();
    img.src = source;
    img.onload=function(){ctxreal.drawImage(img,coord[0]-75,coord[1]-75)}

}
onMouseUp() {
    dragging = false;
}
}

$('#stamp-button').on("click",function(e){
    currentFunction = new Stamp(ctxreal);
    $(".stamp-panel").css({
        display:"block"
    })
    $("p").css("display", "none");
    $("#stamp-inst").css("display","block");
});


$("#bubble").on('click', function(e){
    source="assets/stamps/stamp-bubblebobble.png"
})
$("#mario").on('click', function(e){
    source="assets/stamps/stamp-mario.png"
})
$("#money").on('click', function(e){
    source="assets/stamps/stamp-money.png"
})
$("#megaman").on('click', function(e){
    source="assets/stamps/stamp-megaman.png"
})
$("#streetfigther").on('click', function(e){
    source="assets/stamps/stamp-streetfighter.png"
})
$("#tamagotchi").on('click', function(e){
    source="assets/stamps/stamp-tamagotchi.png"
})
$("#furby").on('click', function(e){
    source="assets/stamps/stamp-furby.png"
})
