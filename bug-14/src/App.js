import React, { useState } from "react";

const ChildComponent = (props) => {
  // Trying to update the prop directly
  const handleClick = () => {
    props.count++;
  };

  return <button onClick={handleClick}>Click Me</button>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent count={count} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
