# use-rxjs-hooks

This npm package provides easy-to-use React hooks for working with RxJS subjects and behavior subjects.

## Installation

To install this package, run the following command:

```bash
npm install use-rxjs-hooks
```

## Usage

To use this package, simply import the hooks you need into your React component:

```tsx
import { useSubject, useBehaviorSubject } from "use-rxjs-hooks";
```

## useSubject

The `useSubject` hook allows you to subscribe to an existing subject and fire events to all subscribers. It takes two inputs: the subject to subscribe to, and a callback function that will be fired on each event. It does not have a current value, but it does return a function to fire new events to all subscribers.

Here's an example of how to use it:

```tsx
import { useSubject } from "use-rxjs-hooks";
import { Subject } from "rxjs";

const mySubject = new Subject();

function MyComponent() {
  const fireNextEvent = useSubject(mySubject, (event) => {
    console.log(event);
  });

  function handleClick() {
    fireNextEvent("Hello, world!");
  }

  return (
    <div>
      <button onClick={handleClick}>Emit Event</button>
    </div>
  );
}
```

## useBehaviorSubject

The useBehaviorSubject hook allows you to subscribe to an existing behavior subject and maintain a current state. It takes two inputs: the behavior subject to subscribe to, and a callback function that will be fired on each event. It returns the current value of the behavior subject, as well as a function to update the current value.

Here's an example of how to use it:

```tsx
import { useBehaviorSubject } from "use-rxjs-hooks";
import { BehaviorSubject } from "rxjs";

const myBehaviorSubject = new BehaviorSubject("initial value");

function MyComponent() {
  const [value, setValue] = useBehaviorSubject(myBehaviorSubject, (event) => {
    console.log(event);
  });

  function handleClick() {
    setValue("new value");
  }

  return (
    <div>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
}
```

## Differences Between Subjects and Behavior Subjects

While both subjects and behavior subjects can be used to emit and subscribe to events, there is a key difference between the two:

- **Subjects** are point-in-time events, meaning they are emitted and then immediately forgotten. They do not maintain a current state.
- **Behavior subjects** are periods between two points, or states. They maintain a current state that can be updated and subscribed to.

## License

This package is licensed under the MIT License. See the [LICENSE](https://github.com/taylor-ben/rxjs-hooks/blob/main/LICENSE) file for more information.

### x1
