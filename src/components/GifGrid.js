import { useEffect, useState } from "react";
import "../styles/GifGrid.css";

const GifGrid = ({ category }) => {
   const [images, setImages] = useState([]);

   useEffect(() => {
      getGifs();
   }, []);

   const getGifs = async () => {
      const url =
         "https://api.giphy.com/v1/gifs/search?limit=12&api_key=OoZnN0NkCIM8HGrQt2H2oW85n1ryc1OZ&q=cat";
      const resp = await fetch(url);
      const { data } = await resp.json();
      const gifs = data.map((gif) => {
         return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
         };
      });
      setImages(gifs);
   };

   return (
      <section>
         <h2>Cat</h2>
         <ul>
            {console.log(images)}
            {images.map((gif) => {
               return (
                  <img className="gif__result" key={gif.id} src={gif.url}></img>
               );
            })}
         </ul>
      </section>
   );
};

export { GifGrid };
