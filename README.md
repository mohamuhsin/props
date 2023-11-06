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
props.name
```

This would retrieve the `name` property from the `props` object.

