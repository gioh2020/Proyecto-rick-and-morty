import React, { useState } from "react";
import styles from "./Cards.module.css";
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {changeFav, deleteCharacters} from "../../actions"
import { useEffect } from "react";






 function Cards(props) {

   const allCharacters = useSelector((state)=> state.characters)
   const dispatch = useDispatch()

   const [flash, setFlash] = useState(false);

   useEffect(() => {
      const intervalId = setInterval(() => {
        setFlash(!flash);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [flash]);
    
   function handleFavorite(event){ 
      if(event.target.value === "false") {
         const action = [event.target.name, event.target.value]
         dispatch(changeFav(action))}
      if (event.target.value === "true") {
         const action = [event.target.name, event.target.value]
         dispatch(changeFav(action))}
   }

   function handleClose(event){ 
     dispatch(deleteCharacters(parseInt(event.target.value)))
   }
  

   return(
      <div className={styles.cardsDiv}>
         {
      allCharacters?.map((character)=>{
            return (
               <div className={styles.card} key={character.id}>

                  {/* <div className={styles.card} key ={character.id}> */}
                     <div className={styles.xh}>
                    
                        {character.fav ? (
                        <button value={true} name={character.id} className={styles.heartButton} onClick={handleFavorite}>❤️</button>):
                       (<button value={false} name={character.id} className={styles.heartButton} onClick={handleFavorite}>🤍</button>)}
                     
                     <button value={character.id} onClick={handleClose} className={styles.close}>X</button>
                     </div>
                     <NavLink  className={styles.textNames}to ={`/infoCharacter/${character.id}`}>
                        <h2 className={`${styles.textName} ${flash ? styles.flash : ""}`}>{character.name}</h2> 
                     </NavLink>
                     <img className={styles.image} src={character.image} alt="" /> 
                     <hr className={styles.line} />
                     <h2 className={styles.textAttribute1}>{character.species}</h2>
                     <h2 className={styles.textAttribute}>{character.gender}</h2>
                  </div>
              
              
              
              
              
              
              
              
              )
            })
               }

      
      
   

            </div>
   )
}

export default Cards