class DrawRectangle extends Painting{
    constructor(ctxdraft,ctxreal){
        super();
        this.contextdraft=ctxdraft;
        this.contextreal=ctxreal;
    }

    onMouseDown(coord,event){
        this.contextdraft.fillStyle=color;
        this.origX=coord[0];
        this.origY=coord[1];
    }

   onDragging(coord,event){
        this.contextdraft.fillStyle = color;
        this.contextdraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
       this.contextdraft.fillRect(this.origX,this.origY,coord[0]-this.origX,coord[1]-this.origY);

   } 
   onMouseUp(coord){
       this.contextdraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
       this.contextreal.fillStyle = color;
        this.contextreal.lineWidth = 0;
        this.contextreal.shadowBlur=0;
       this.contextreal.fillRect(this.origX,this.origY,coord[0]-this.origX,coord[1]-this.origY)
   }
} 


$('#rectangle-button').on('click',function(e){
    currentFunction = new DrawRectangle(ctxdraft,ctxreal);
    $("p").css("display", "none");
    $("#rect-inst").css("display","block");
 })