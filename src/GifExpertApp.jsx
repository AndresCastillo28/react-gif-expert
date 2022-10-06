import { useState } from "react"


export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState([ 'One Punch', 'Dragon ball' ]);

    console.log(categories);

  return (
    <>
        <h1>GifExpertApp</h1>

        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            } ) }
            {/* <li>ABC</li> */}
        </ol>
    </>
  )
}
