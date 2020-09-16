I lean towards the view that Redux is overkill on a great many things, especially since React has eleviated it's need by introducing [Context](https://reactjs.org/docs/context.html) and hooks, especially [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer). However there are applications that require the benefits of Redux. For those like me who touch Redux on the rare occasion, this is a simple example implementing Redux's [useSelector and useDispatch hooks](https://react-redux.js.org/api/hooks), and it includes the structure you might want for a larger project.

[Redux](https://github.com/reactjs/redux)

To run this example:

1. [Download this repo](https://github.com/NathanTrost/counter-example-with-redux-hooks) or `git clone https://github.com/NathanTrost/counter-example-with-redux-hooks`
2. From the root folder run:  
   `npm install`
3. `npm start`
4. Play around with it a bit.

This example was created using `https://reactjs.org/docs/create-a-new-react-app.html#create-react-app`

The files created and modified for this project are:

- General Files
   - src/index.js: Modified to with `Provider` and `store` wrapping our component
   - store.js: Setup store
   - actions/actionTypes.js: Definitions for all various actions
   - reducers/rootReducer.js: Bundle all reducers with `combineReducer`
   - reducers/initialState.js: Non functional object of initial state values

- Counter Example with Hooks
   - actions/counterActions.js: Action Creators
   - reducers/counter.js: State specific reducer that returns new state based off the action called
   - components/Counter.js: Finally the component in which we'll recieve state from `useSelector` and update it by using `useDispatch`

- Date Change Example without Hooks
   - actions/dateTimeActions.js: Action Creators
   - reducers/setDateTime.js: State specific reducer that returns new state based off the action called
   - components/SetTimeWithLegacyRedux.js: Finally the component in which we'll recieve state using `connect`, `mapStateToProps` and `mapDispatchToProps`
