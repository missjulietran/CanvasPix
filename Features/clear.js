class Clear extends Painting{
    constructor(ctxreal,ctxdraft){
        super();
        this.real=ctxreal;
        this.draft=ctxdraft;
    }   

    clear(){
        this.real.clearRect(0,0,canvasReal.width,canvasReal.height);
        this.draft.clearRect(0,0,canvasReal.width,canvasReal.height);
        history=[];
    } 
}

$('#clear-button, #new-button').on("click",function(e){
    console.log('clear')
    currentFunction = new Clear(ctxreal,ctxdraft);
    currentFunction.clear();
})