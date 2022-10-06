import { useState } from "react"


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon ball' ]);

  const onAddCategory = () => {
        setCategories([ 'Valorant', ...categories ]);
        // setCategories(cat => [ ...categories, 'Valorant' ]);

   }
    
    console.log(categories);

  return (
    <>
        <h1>GifExpertApp</h1>

        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            } ) }
            {/* <li>ABC</li> */}
        </ol>
    </>
  )
}
