# Traffic Rules

Did you know that your computer reads key codes every time you press a key? That’s how it knows what do when you type. The browser gives us the ability to capture these key codes, by attaching a function when a key is pressed.


In the app.js file we have already attached an event handler that captures the key code.

The key codes we will be using are:

- Right arrow: 39 
- Left arrow: 37 
- Up arrow: 38 
- Down arrow: 40 
 

We will use the LEFT and RIGHT arrows to make the taxi move forwards and reverse, and the UP and DOWN arrows to change the traffic lights from red to green.

  

To do this, a few things are involved:

Some CSS for the taxi position and the colour of the traffic light

- Each location of the taxi has a different class 
- CSS class names determine the colour of the light 
  

Everything we do is based on a variable that increments or decrements based on the key pressed. 

We will call this the `taxiLocationCounter`

  

##To move the taxi forward:

1. Get your current location class name based on the `taxiLocationCounter` variable 
2. Increment the counter variable 
3. Get the next location class name 
4. Pass both class names to the moveTaxi function based on the new value of the counter. 
  

What do you expect to happen?

  

Try it. 

What happened?
