import { useState } from "react";

const DynamicInputs=()=>{
    // State to hold the selected option from the first input
  const [firstInputValue, setFirstInputValue] = useState("");
  // State to hold the options for the second input
  const [secondInputOptions, setSecondInputOptions] = useState([]);

  // Options for the first input
  const firstInputOptions = ["Fruits", "Colors", "Animals"];

  // Options for the second input based on the first input value
  const optionsMap = {
    Fruits: ["Apple", "Banana", "Orange"],
    Colors: ["Red", "Green", "Blue"],
    Animals: ["Cat", "Dog", "Elephant"]
  };

  //changes

  // Handler for first input change
  const handleFirstInputChange = (event) => {
    const selectedValue = event.target.value;
    setFirstInputValue(selectedValue);
    // Update the second input options based on the selected value
    setSecondInputOptions(optionsMap[selectedValue] || []);
  };

  return (
    <div>
      <h3>Dynamic Input Options Example</h3>
      
      {/* First input dropdown */}
      <label htmlFor="firstInput">Select a category:</label>
      <select id="firstInput" value={firstInputValue} onChange={handleFirstInputChange}>
        <option value="">--Select--</option>
        {firstInputOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      
      {/* Second input dropdown */}
      {firstInputValue && (
        <div>
          <label htmlFor="secondInput">Select an option from {firstInputValue}:</label>
          <select id="secondInput">
            <option value="">--Select--</option>
            {secondInputOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default DynamicInputs;