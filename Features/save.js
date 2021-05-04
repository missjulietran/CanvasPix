$("#save-button").on("click",function(e){
    let savefile= canvasReal.toDataURL();
    console.log(savefile)
    $("#save-button").attr("href", savefile);
})