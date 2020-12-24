import React from 'react';
import HelloWorld from './components/HelloWorld';
import UserHookExample from './components/UserHookExample';


const App: React.FC = () => (
  <div>
    <HelloWorld name="Daniel" />
    <UserHookExample />
  </div>
);

export default App;
