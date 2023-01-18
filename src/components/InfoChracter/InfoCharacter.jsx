import React from "react";
import {useState, useEffect} from "react"
import { useParams} from "react-router-dom"
import styles from "./InfoCharacter.module.css"


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
     
   console.log(allInfo)

 

      return(
        <div className={styles.divPrincipal}>
         <div >
          <img className={styles.divImg}  src={allInfo.image} alt="" /> 
         </div>

         <div className={styles.divInfo}>
          <h1>ID: {id}</h1>      
          <h1>Name: {allInfo.name}</h1>
          <h1>Gender: {allInfo.gender}</h1>
          <h1>Species: {allInfo.species}</h1>
          <h1>Origin: {allInfo.location?.name}</h1>
          <h1>Status: {allInfo.status}</h1>
         </div>
            
          
        </div>
      )
}

export default InfoCharacter