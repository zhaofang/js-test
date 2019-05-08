import React from 'react';
import { render } from 'react-dom';

const Reverse = ({ text }) => (
  <span>
    {text.split('').reverse().join('')}
  </span>
);
console.log('test');
const App = () => (
  <div>
    <Reverse text="Hello World" />
  </div>
);

render(<App />, document.getElementById('root'));

