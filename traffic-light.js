var TrafficLight = function(index){

    const trafficLight = trafficLightLocation(index);
    const trafficLightElement = document.querySelector(trafficLight);
    const classList = trafficLightElement.classList;

    var color = 'green';

    this.green = function(){
        classList.add("lights-go");
        classList.remove("lights-slowdown");
        classList.remove("lights-stop");
        color = 'green';
    };

    this.red = function(){
        classList.remove("lights-go");
        classList.remove("lights-slowdown");
        classList.add("lights-stop");
        color = 'red';
    }

    this.orange = function(){
        classList.remove("lights-go");
        classList.add("lights-slowdown");
        classList.remove("lights-stop");
        color = 'red';
    }

    this.state = function(){
        if (classList.contains('lights-slowdown')){
            return 'orange';
        }

        if (classList.contains('lights-go')){
            return 'green';
        }

        if (classList.contains('lights-stop')){
            return 'red';
        }
    }
};
