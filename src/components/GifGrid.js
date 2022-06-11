import { useEffect, useState } from "react";

const GifGrid = ({ category }) => {
   const [images, setImages] = useState([]);

   useEffect(() => {
      getGifs();
   }, []);

   const getGifs = async () => {
      const url =
         "https://api.giphy.com/v1/gifs/search?q=cats&limit=10&api_key=OoZnN0NkCIM8HGrQt2H2oW85n1ryc1OZ";
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
      <>
         <h3>{category}</h3>
         <ul>
            {console.log(images)}
            {images.map((gif) => {
               return <img key={gif.id} src={gif.url}></img>;
            })}
         </ul>
      </>
   );
};

export { GifGrid };
