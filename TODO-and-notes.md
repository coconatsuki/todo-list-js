// App => méthode addTask (à binder et à donner au Modal Task)

// App => Faire un map pour afficher les tâches

// S'occuper du Edit Task Modal (soit en lui filant les props de la tâche à éditer,
soit en "créant" un modal par bouton et en bindant les props de la tâche en cours au state.)

// Make it responsive.

// Note : in package.json, "prepush": "yarn deploy" => tell husky to run "yarn deploy" before each $ git push command.

// Reminders (when working with React):

* When we call a function WITH PARAMETERS in an event, we need to wrap it in an arrow function to prevent it to be called right away.

* The parent component that needs some variable/state is the one that possess the methods that update these variables/this state.
  These methods must be bound to this component, and passed to the child components.
