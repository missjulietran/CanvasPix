class Textbox extends Painting{
    constructor(ctxdraft,ctxreal){
        super();
        this.contextdraft=ctxdraft;
        this.contextreal=ctxreal;
    }

    onMouseDown(coord,event){

        $("#textinput").css({
            position:"absolute",
            display:"block",
            transform: `translateY(${coord[1]}px) translateX(${coord[0]}px)`
        })
        this.origX=coord[0];
        this.origY=coord[1];
        this.contextreal.shadowBlur=0;
        this.contextreal.fillStyle=color;
    }

   onDragging(coord,event){
        
        let boxheight= coord[1]-this.origY;
        let boxwidth=coord[0]-this.origX;
        this.fontsize=boxheight*0.4;
       $("#textinput").css({
        height:`${boxheight}px`,
        width:`${boxwidth}px`,
        "font-size":`${this.fontsize}px`,
        "text-align":"left"
    })
    $("#textinput").eq(0).focus();

   } 

   Submit(coord){
    this.contextreal.font=(this.fontsize+"px Arial")
    let textcontent=$("#textinput").val();
    this.contextreal.fillText(textcontent,this.origX,this.origY);
    $("#textinput").val("");
    
    $("#textinput").css({
        display:"none",
    })

}
}



$('#text-button').on('click',function(e){
    currentFunction = new Textbox(ctxdraft,ctxreal);
    $("p").css("display", "none");
    $("#text-inst").css("display","block");

    })

    $('#textinput').on('keydown', function(event) {
        if (event.keyCode == 13)
        currentFunction.Submit();
    })

