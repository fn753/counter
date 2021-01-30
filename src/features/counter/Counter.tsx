import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  selectCount,
} from './counterSlice';
import './Counter.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Press me
        </button>
      </div>
      <p>
          Let's see how often you can click me.
      </p>
    </div>
  );
}