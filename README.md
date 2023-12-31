# props

## Props

When thinking in the context of a React application, components are small pieces of a whole. Together, they make up the interface that users will see.

With each component playing a role in the interface, there are times when components must be able to communicate with other components.

In this lesson, you will learn another way that components can interact: a component passing information to another component.

Information that gets passed from one component to another is known as `props`.

Props can be used to customize the output of each component depending on the information that is passed in.

By allowing components to communicate with each other, we can add a level of flexibility that was not possible before.

By the end of this lesson, you should be able to:

- Pass, access, and display props.
- Use props to create conditional statements.
- Define event handlers in a component and pass them to other components.
- Work with a component's children.
- Assign default values to props.

Let's get started!

## Access a Component's Props

Every component has something called `props`.

A component’s `props` is an object. It holds information about that component.

You’ve seen this before, but you might not have realized it! Let’s take a look at the HTML `button` tag. There are several pieces of information we can pass to the `button` tag, such as the `type` of the button.

```html
<button type="submit" value="Submit">Submit</button>
```

In this example, we’ve passed two pieces of information to the `button` tag, a `type` and a `value`. Depending on what `type` attribute we give to the `<button>` element, it will treat the form differently. In the same way, we can pass information to our own components to specify how they behave!

Props serve the same purpose for components as arguments do for functions.

To access a component’s `props` object, you can reference the `props` object using the dot notation for its properties. Here’s an example:

```javascript
props.name;
```

This would retrieve the `name` property from the `props` object.

You can format the provided text in Markdown as follows:

## Pass `props` to a Component

To take advantage of `props`, we need to pass information to a React component. In the previous exercise, we rendered an empty `props` object because we did not pass any props to our `PropsDisplayer` component.

How do we pass `props`? By giving the component an attribute:

```jsx
<Greeting name="Jamel" />
```

Let’s say that you want to pass a component the message, "We're great!". Here’s how you can do it:

```jsx
<SloganDisplay message="We're great!" />
```

As you can see, to pass information to a component, you need a name for the information that you want to pass.

In the above example, we used the name `message`. You can use any name you want.

If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:

```jsx
<Greeting myInfo={["Astronaut", "Narek", "43"]} />
```

In this next example, we pass several pieces of information to `<Greeting />`. The values that aren’t strings are wrapped in curly braces:

```jsx
<Greeting
  name="The Queen Mary"
  city="Long Beach, California"
  age={56}
  haunted={true}
/>
```

You can format the provided text in Markdown as follows:

## Render a Component's Props

Props allow us to customize the component by passing it information.

We’ve learned how to pass information to a component’s `props` object. You will often want a component to display the information that you pass.

To make sure that a function component can use the `props` object, define your function component with `props` as the parameter:

```jsx
function Button(props) {
  return <button>{props.displayText}</button>;
}
```

In the example, `props` is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (`object.propertyName`).

Alternatively, since `props` is an object, you can also use destructuring syntax like so:

```jsx
function Button({ displayText }) {
  return <button>{displayText}</button>;
}
```

## Pass Props From Component To Component

You have learned how to pass a prop to a component:

```jsx
<Greeting firstName="Esmerelda" />
```

You have also learned how to access and display a passed-in prop:

```jsx
return <h1>{props.firstName}</h1>;
```

The most common use of props is to pass information to a component from a different component.

Props in React travel in a one-way direction, from the top to bottom, parent to child.

Let’s explore the parent-child relationship of passing props a bit further.

```jsx
function App() {
    return <Product name="Apple Watch" price={399} rating="4.5/5.0" />;
}
```

In this example, `App` is the parent, and `Product` is the child. `App` passes three props to `Product` (name, price, and rating), which can then be read inside the child component.

Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.

Let’s practice this!

### Instructions

**Checkpoint 1:**
1. Your mission is to pass a prop to `Player` from `App`.
   Ensure that `Player` can accept props by changing the function definition to include `props` in the parameter.

**Checkpoint 2:**
2. Next, display the name of the song in the `<h1></h1>` tag by injecting the `songName` value from `props.

**Checkpoint 3:**
3. Display the name of the artist in the `<h2></h2>` tag by injecting the `artist` value from `props.

**Checkpoint 4:**
4. Since `App` is passing props to `Player`, `App` is the parent and `Player` is the child.
   Inside of `Player.js`, export the component to be used in `App.js.

**Checkpoint 5:**
5. Open `App.js`. Import the `Player` component in `App.js.

**Checkpoint 6:**
6. In the `App` component, call the `Player` component with the attributes `songName`, giving it a string of your favorite song, and the artist of the song.
```

The text is now formatted in Markdown.
