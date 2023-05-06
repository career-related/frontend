import React, { useState } from 'react';

function SelectBox() {
  const [selectedValue, setSelectedValue] = useState('');

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor="selectbox">Select a value:</label>
      <select id="selectbox" value={selectedValue} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="option1">Amazon</option>
        <option value="option2">Apple</option>
        <option value="option3">Google</option>
        <option value="option4">Meta</option>
        <option value="option5">Microsoft</option>
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

export default SelectBox;
