
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;

body.onkeydown = function(e){

    //right arrow : 39
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40

    displayMessage(e.keyCode);

    /*

    to move the taxi forward...
    when the right arrow is pressed
    work with `taxiLocationCounter`

    store the value of `taxiLocationCounter` in a variable called `previousLocationCounter`
    increment the `taxiLocationCounter`

    pass both to the `moveTaxi( previousLocationCounter,
        taxiLocationCounter)` function

    */

    // to make the second TrafficLight `Orange`
    var tl = new TrafficLight(2);
    tl.orange();

};
