import React from "react";

const Form = ({ handleInputChange, handleFormSubmit, input }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter username to search..."
        onChange={handleInputChange}
        value={input}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
