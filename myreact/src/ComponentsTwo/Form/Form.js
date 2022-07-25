import React from 'react';

const Form = () => {
  return (
    <>
      <form>
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