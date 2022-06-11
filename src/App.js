import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const App = () => {
   const [categories, setCategories] = useState(["Cat"]);
   // const handleAdd = () => {
   //    setCategories([...categories, "Turtle"]);
   // };

   return (
      <>
         <h1>GIF Searcher</h1>
         <hr />
         <ol>
            {categories.map((category) => (
               <GifGrid key={category} category={category}></GifGrid>
            ))}
         </ol>
         <button>Add</button>
      </>
   );
};

export { App };
