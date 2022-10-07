import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {


        if( categories.includes(newCategory) ) return;
        // console.log(newCategory);
         setCategories([ newCategory, ...categories ]);
        // setCategories(cat => [ ...categories, 'Valorant' ]);
   }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ (value) => onAddCategory(value) }
          currentCategories={ categories }
        />

        { 
          categories.map( ( category ) => ( 
            <GifGrid 
              key={ category }
              category= { category } 
            />
          )
          )
        }
        


    </>
  )
}
