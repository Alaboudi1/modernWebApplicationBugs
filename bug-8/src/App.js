import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedGroups, setSelectedGroups] = useState([]);

  const handleGroupChange = (groupOptions) => {
    const existSelection = selectedGroups;

    if (groupOptions.target.checked)
      existSelection.push(groupOptions.target.value);
    else existSelection.remove(groupOptions.target.value);

    console.log(selectedGroups);
    setSelectedGroups(existSelection);
  };

  return (
    <div className="App">
      Select your pizza topping:
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          onChange={(e) => handleGroupChange(e)}
        />
        Paneer
      </div>
    </div>
  );
}
