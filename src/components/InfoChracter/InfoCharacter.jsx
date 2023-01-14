import React from "react";
import {useState, useEffect} from "react"
import { useParams} from "react-router-dom"


function InfoCharacter(){
    const [allInfo, setAllInfo] = useState({})
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setAllInfo(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setAllInfo({});
     }, [id]);
     
   

 

      return(
        <div>
            
          <div>nombre {id}</div>      
          <h1>Nombre: {allInfo.name}</h1>
          <h1>Nombre: {allInfo.species}</h1>
          <h1>origin: {allInfo.origin?.name}</h1>
          <img  src={allInfo.image} alt="" /> 
          <h1>Nombre: {allInfo.name}</h1>
          
        </div>
      )
}

export default InfoCharacter