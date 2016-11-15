
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;
var previousLocationCounter = 0;
body.onkeydown = function(e){
  var trafficlight = new TrafficLight(taxiLocationCounter);

    displayMessage(e.keyCode);
    //when keyCode 39 is pressed taxi move forward
        if(e.keyCode == 39){
            if(trafficlight.state() === 'green'){
                previousLocationCounter = taxiLocationCounter;
              taxiLocationCounter++;
              //allowing taxi to wrap arround when reach position 9
              if(taxiLocationCounter>9){
                taxiLocationCounter=1;
              }
              //calling the moveTaxi function from support.js file
              //with parameters previousLocationCounter and taxiLocationCounter
              moveTaxi(previousLocationCounter,taxiLocationCounter);
                }
                //reversing the taxi
            }else if (e.keyCode == 37) {
                previousLocationCounter=taxiLocationCounter;
                  taxiLocationCounter--;
              //when reversing it allows taxi to wrap arround when reach location 1    
                  if(taxiLocationCounter<1){
                    taxiLocationCounter=9;
                  }
              //calling the moveTaxi function from support.js file
              //with parameters previousLocationCounter and taxiLocationCounter
              moveTaxi(previousLocationCounter,taxiLocationCounter);
              //changing traffic light to red
            }else if (e.keyCode == 38){
              trafficlight.red();
              //changing traffic light to green
            }else if (e.keyCode == 40) {
              trafficlight.green()
            }
    // to make the second TrafficLight `Orange`
    //var tl = new TrafficLight(3);
    //tl.orange();

};
