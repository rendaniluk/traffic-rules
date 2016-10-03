# Traffic Rules

Did you know that your computer reads key codes every time you press a key? That’s how it knows what do when you type. The browser gives us the ability to capture these key codes, by attaching a function when a key is pressed.

> Fork and clone this repository.

Open the the `index.html` file. What do you see. Try pressing the `right`, `left`, `up` and `down` arrow keys. What happens?

In the `app.js` file we have already attached an event handler that captures the key code. And will display it on the screen.

The key codes we will be using are:

- Right arrow: 39
- Left arrow: 37
- Up arrow: 38
- Down arrow: 40

We will use the `LEFT` and `RIGHT` arrows to make the taxi move forwards and reverse, and the `UP` and `DOWN` arrows to change the traffic lights from red to green.

To do this, a few things are involved:

Some CSS for the taxi position and the colour of the traffic light

- Each location of the taxi has a different class
- CSS class names determine the colour of the light

All of the above is controlled by a counter, we will call this variable `taxiLocationCounter`

Everything we do is based on this variable that increments or decrements based on the key's pressed.

##To move the taxi forward:

1. Get your current location class name based on the `taxiLocationCounter` variable
2. Increment the counter variable
3. Get the next location class name
4. Pass both class names to the `moveTaxi` function based on the new value of the counter.

What do you expect to happen?

Try it in the `app.js` file. Save your changes and refresh the `index.html` file.

What happened?

## The traffic lights

You are also provided with a TrafficLight constructor function, it takes the index of a TrafficLight it controls on instantiation.

For example:

```javascript

    //target the third trafficlight
    var trafficLight = new TrafficLight(3);

    //change the color like this
    trafficLight.green();
    trafficLight.red();
    trafficLight.orange();

    //get the current color of the traffic light
    trafficLight.color // returns 'red', 'green' or 'orange'

```

## Stop at red lights

Use the `taxiLocationCounter` and find the Traffic Light closest to the taxi. Use the `up` and `down` arrows to change it to red (up) or green (down). If the light is red the taxi should not be able to move forward. Only after the light was changed to green using the down arrow, the taxi should be able to move forward.

## Final touches

Make sure that your taxi can reverse. It should wrap around once it reach the first or last locations on the screen.
