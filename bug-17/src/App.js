import React from "react";
import PropTypes from "prop-types";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      <MyComponent title="Hello, world!" content="This is a test." />
    </div>
  );
}

export default App;
