1. What problem does the context API help solve?

    Context API solves the issue of having to prop drill constantly throughout your application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions- hold information that will be used to send to the store by telling the reducer how to change state.
	Reducers- hold information for how the state changes in reponse to actions.
	Store- holds all of the applications state data.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is state that is available throughout your app, where as component state is locally available inside a specific component. component state would be better served for a small application or an app that doesn't use a lot of state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux thunk allows us to make asynchronous updates by dispatching actions, without it you could only do synchronous updates.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I kind of like context api more at the moment because it's less confusing and easier for smaller applications, but we've used it less than redux so I don't feel too comfortable with either right now.

