import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit the form");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
