import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const App = () => {
   const [categories, setCategories] = useState(["Cat", "Dog", "Bunny"]);
   // const handleAdd = () => {
   //    setCategories([...categories, "Turtle"]);
   // };

   return (
      <>
         <AddCategory setCategories={setCategories} />
         <hr />
         <ol>
            {categories.map((category) => {
               return <li key={category}>{category}</li>;
            })}
         </ol>
         <button>Add</button>
      </>
   );
};

export { App };
