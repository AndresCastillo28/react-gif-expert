import { useState } from "react";
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon ball' ]);

  const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
         setCategories([ newCategory, ...categories ]);
        // setCategories(cat => [ ...categories, 'Valorant' ]);
   }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          // setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) }
        />

        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            } ) }
            {/* <li>ABC</li> */}
        </ol>
    </>
  )
}
