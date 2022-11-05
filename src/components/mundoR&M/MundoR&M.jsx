import React from "react";
import Cards from "../cards/Cards.jsx"
// import { useState } from "react";




function MundoRyM(props){
    console.log('esto 2' + props)
    const {characters} = props
   console.log('esto 3' + characters)

    return(
        <div>
            <Cards characters={characters} />
        </div>
    )
}






export default MundoRyM