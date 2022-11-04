import React from "react";
import Cards from "../cards/Cards.jsx"
import { useState } from "react";
import characters  from "../../data.js";



function MundoRyM(){
    const [mundoRyM, setMundoRyM] = useState({
        character: [characters.characters],
        
        allcharacters:[]

    })

    return(
        <div>
            <Cards characters={characters}/>
        </div>
    )
}
console.log(MundoRyM.character)





export default MundoRyM