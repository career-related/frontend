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
        <option value="Amazon">Amazon</option>
        <option value="Apple">Apple</option>
        <option value="Google">Google</option>
        <option value="Meta">Meta</option>
        <option value="Microsoft">Microsoft</option>
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
}

export default SelectBox;
