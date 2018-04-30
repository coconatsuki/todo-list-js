// TODO : REPAIR REMOVE CURRENT LIST

// TODO : REVIEW ORDER WHEN ADDING A LIST (it comes before the old loaded ones)

// TODO : add validations

// TODO : Make it responsive.

---

// Note : in package.json, "prepush": "yarn deploy" => tell husky to run "yarn deploy" before each $ git push command.

// Reminders (when working with React):

* When we call a function WITH PARAMETERS in an event, we need to wrap it in an arrow function to prevent it to be called right away.

* The parent component that needs some variable/state is the one that possess the methods that update these variables/this state.
  These methods must be bound to this component, and passed to the child components.

* Each time the component finish rendering itself (usually, after its state has changed), this method is called automatically by React :

  componentDidUpdate() {
  ....
  }

  We can add it and customize it to make it do what we want. For ex: this.saveToLocalStorage()

voir => https://reactjs.org/docs/react-component.html#componentdidupdate
