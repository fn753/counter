import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../counter/counterSlice';
import '../view/View.css';

export function View() {
    const count = useSelector(selectCount);
  
    return (
      <div>
        <div className="row">
          <p>You clicked <span className="value">{count}</span> times.</p>
          {count === 42 ? <p>You found the answer.</p> : null}
        </div>
        
      </div>
    );
  }