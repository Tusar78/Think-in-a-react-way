import React from 'react';

const Form = () => {
  const handleSubmit = (e, val) => {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name: 
          <input type="text" name="name" id="name" />  
        </label>  
        <input type="submit" value="Submit" />
      </form> 
    </>
  );
};

export default Form;