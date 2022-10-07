import { getGifs } from "../helpers/getGIfs";


export const GifGrid = ({ category }) => {
    
    getGifs(category);
  
    return (
        <>
            <h3>{ category }</h3>

        </>
  )
}
