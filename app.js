
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiPositionCounter = 1;

body.onkeydown = function(e){

    //right arrow : 39
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40

    console.log(e.keyCode);
    displayMessage(e.keyCode);

    if (e.keyCode === 39){
        taxiPositionCounter++
    }
    else if (e.keyCode === 37){
        taxiPositionCounter--;
    }

    displayMessage(taxiPositionCounter);

    // make the taxi move


};
