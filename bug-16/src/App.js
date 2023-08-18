import React from "react";

const DynamicList = () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <DynamicList />
    </div>
  );
}

export default App;
