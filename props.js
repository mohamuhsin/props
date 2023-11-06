// 1. ACCESSING PROPS:

/* Look at PropsDisplayer.js.

This component has props as a part of its parameter.

Inside the function body, there is a stringProps variable which contains the string data of props.

Let’s display it on the screen and see what’s inside by injecting the stringProps variable between the <h2></h2> tags.*/

//PropsDisplayer.js
import React from "react";

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2></h2>
    </div>
  );
}

export default PropsDisplayer;

/*
Now that we’ve finished the PropsDisplayer component, let’s use it in our top-level component, App, and have it render to the screen.

Open up App.js. Take a look at the App component definition, and have it return the PropsDisplayer component.

As always, App is exported to index.js and rendered. */

import React from "react";
import ReactDOM from "react-dom";

import PropsDisplayer from "./PropsDisplayer";

function App() {}

// 2. PASS PROPS TO COMPONENTS

/* Inside the App top-level component, find the line where we call the PropsDisplayer component.

Modify this line so that PropsDisplayer is called with a prop named myProp and the string value "Hello". */

// 3. RENDER A COMPONENTS PROPS:

/*Explore the code in the code editor.

Product.js contains the outline of a component responsible for displaying the products of an e-commerce site.

App.js contains the top-level App component, which calls the Product component with three pieces of information: name, price, and rating.

However, the Product component does not accept props.
In Product.js, modify the Product component so that it accepts props in the function definition.*/

import React from "react";

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>
  );
}

import React from "react";
import Product from "./Product";

function App() {
  return <Product name="Apple Watch" price={399} rating="4.5/5.0" />;
}

//instructions:

/* Next, display the name of the product in the <h1></h1> 
tag by injecting the name value from props.*/

//For the <h2></h2> tag, inject the price value from props.
//Finish it off by injecting the rating value from props within the <h3></h3> tags.
