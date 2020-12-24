import React from 'react';
import HelloWorld from './components/HelloWorld';
import UserHookExample from './components/UserHookExample';

function App() {
  return (
    <div>
      <HelloWorld name="Daniel"/>
      <UserHookExample />
    </div>
  );
}

export default App;
