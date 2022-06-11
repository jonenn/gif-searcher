import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { Layout } from "./components/Layout";

const App = () => {
   return (
      <>
         <Layout>
            <GifGrid />
         </Layout>
      </>
   );
};

export { App };
