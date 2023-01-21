import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import { NavLink } from "react-router-dom";
import { delFavorite } from "../../actions";



function Favorites(){
    const dispatch = useDispatch()
    const allCharacters = useSelector((state)=> state.favorites)

    const [flash, setFlash] = useState(false);

   useEffect(() => {
      const intervalId = setInterval(() => {
        setFlash(!flash);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [flash]);

    const handleClick = (event) =>{
        dispatch(delFavorite(parseInt(event.target.value)))
    }
    return(
        <div className={styles.cardsDiv}>
         {allCharacters?.map((character)=>{
              return (
                    <div className={styles.card} key ={character.id}>
                       <div>
                        <button value={character.id} name={character.id} className={styles.heartButton} onClick={handleClick}>❤️</button>
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

export default Favorites