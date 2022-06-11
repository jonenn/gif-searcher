import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
   const [inputValue, setInputValue] = useState("");

   const handleInput = (eve) => {
      setInputValue(eve.target.value);
   };

   const handleSubmit = (eve) => {
      eve.preventDefault();
      console.log("Done!!");
      setCategories((categories) => [...categories, inputValue]);
   };

   return (
      <form onSubmit={handleSubmit}>
         {/* <h1>{inputValue}</h1> */}
         <input type="text" value={inputValue} onChange={handleInput} />
      </form>
   );
};
