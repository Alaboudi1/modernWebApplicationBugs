import React from "react";

const ButtonList = () => {
  const handleClick = (index) => {
    console.log(`Button ${index + 1} clicked`);
  };

  const buttonArray = [1, 2, 3];

  return (
    <div>
      {buttonArray.map((button, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          Button {button}
        </button>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ButtonList />
    </div>
  );
}

export default App;
