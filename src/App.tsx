import React from 'react';
import PropsExample from './components/PropsExample';
import UserHookExample from './components/UserHookExample';


const App: React.FC = () => {
  function onClickHandler() {
    alert("clickk");
  }
  return (
    <div>
      <PropsExample name="Daniel" onClick={onClickHandler}>Children</PropsExample>
      <UserHookExample />
    </div>
  );
};

export default App;
