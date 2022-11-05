import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import {useState} from "react"




export default function SearchBar(props) {

const [userId, setUserId] = useState('')


  const handleInput = ((event)=>{
   if(typeof event.target.value != Number || !event.target.value ){
      setUserId(event.target.value)
      console.log(event.target.value)
   }
   event.target.value = ''
   alert('Los ID son unicamente numericos')
  })

   return (
      <div>

         <input id="search" type='search' onChange={handleInput} placeholder={'Escribe un ID numerico'}/>
         <button onClick={() => props.searchCharacters(userId)}>Agregar por ID</button> 

      </div>
   );
}