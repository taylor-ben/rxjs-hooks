import { useEffect, useState } from "react";
import { BehaviorSubject, Subject } from "rxjs";

export const useBehaviorSubject = <T>(
  behaviorSubject: BehaviorSubject<T>
): [T, (value: T) => void] => {
  const [currentState, setCurrentState] = useState(behaviorSubject.value);
  useEffect(() => {
    const subscription = behaviorSubject.subscribe((value) =>
      setCurrentState(value)
    );
    return () => subscription.unsubscribe();
  }, [behaviorSubject]);
  const setState = (value: T) => behaviorSubject.next(value);
  return [currentState, setState];
};

export const useSubject = <T>(
  subject: Subject<T>,
  eventReaction?: (value: T) => void
) => {
  useEffect(() => {
    const subscription = subject.subscribe((value) => eventReaction?.(value));
    return () => subscription.unsubscribe();
  }, [subject]);
  const fireEvent = (value: T) => subject.next(value);
  return fireEvent;
};

// a comment
