### Install
```bash
npm i use-rxjs-state
yarn add use-rxjs-state
```


### Usage example
```tsx
import { click$, open$ } from "./store"
import { useBehaviorSubject, useSubject } from "use-rxjs-state"

export default function App() {
  return (
    <div>
      <Hello/>
      <World/>
    </div>
  )
}

const Hello = () => {
  const fireClick = useSubject(click$)
  const [ open, setOpen ] = useBehaviorSubject(open$)
  return (
    <div>
      <button onClick={() => fireClick('Tell everyone I was clicked!')}>Click me</button>
      <div>
      <button onClick={() => setOpen(!open)}>open hamburger</button>
      </div>
    </div>
  )
}

const World = () => {
  useSubject(click$, message => {
    console.log('message:', message)
  })
  const [ open ] = useBehaviorSubject(open$)
  return (
    <div>
      <div>Is open: {open ? 'true' : 'false'}</div>
    </div>
  )
}
```

`./store.ts`
```ts
import { BehaviorSubject, Subject } from "rxjs"

export const click$ = new Subject()

export const open$ = new BehaviorSubject(false)
```