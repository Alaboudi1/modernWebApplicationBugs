import React from "react";

class MyComponent extends React.Component {
  handleClick = async () => {
    // Simulate an asynchronous event handling
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Event handled asynchronously");
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
