import { useEffect, useState } from "react";
import { BehaviorSubject, Subject } from "rxjs";

export const useBehaviorSubject = <T,>(
  behaviorSubject: BehaviorSubject<T>,
  eventReaction?: (value: T) => void
): [T, (value: T) => void] => {
  const [currentState, setCurrentState] = useState(behaviorSubject.value);
  useEffect(() => {
    const subscription = behaviorSubject.subscribe((value) => {
      setCurrentState(value)
      eventReaction?.(value)
    });
    return () => subscription.unsubscribe();
  }, [behaviorSubject]);
  const setState = (value: T) => behaviorSubject.next(value);
  return [currentState, setState];
};

export const useSubject = <T,>(
  subject: Subject<T>,
  eventReaction?: (value: T) => void
): [T | undefined, (value: T) => void] => {
  const [lastState, setLastState] = useState<T>()
  useEffect(() => {
    const subscription = subject.subscribe((value) => {
      setLastState(value)
      eventReaction?.(value)
    });
    return () => subscription.unsubscribe();
  }, [subject]);
  const setState = (value: T) => subject.next(value);
  return [lastState, setState];
};
