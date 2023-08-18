import React from "react";

const ChildComponent = () => {
  const handleChildClick = (event) => {
    console.log("Child component clicked");
  };
  return <button onClick={handleChildClick}>Click Me</button>;
};

const ParentComponent = () => {
  const handleParentClick = () => {
    console.log("Parent component clicked");
  };
  return (
    <div onClick={handleParentClick}>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
