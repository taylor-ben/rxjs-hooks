### Install
```bash
npm i use-rxjs-state
yarn add use-rxjs-state
```


### Usage example
```tsx
import { clicking, openess } from "./store"
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
  const fireClick = useSubject(clicking)
  const [ open, setOpen ] = useBehaviorSubject(openess)
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
  useSubject(clicking, message => {
    console.log('message:', message)
  })
  const [ open ] = useBehaviorSubject(openess)
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

export const clicking = new Subject()

export const openess = new BehaviorSubject(false)
```