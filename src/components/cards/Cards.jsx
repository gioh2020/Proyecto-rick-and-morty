import styles from "./Cards.module.css";

 function Cards(props) {
   // const {characters} = props

   return(
       props.characters.map((character)=>{
            return (
               <div className={styles.card} key ={character.name}>
                  {/* <button onClick={character.onClose}>X</button> */}
                  <h2>{character.name}</h2>
                  <h2>{character.species}</h2>
                  <h2>{character.gender}</h2>
                  <img  src={character.image} alt="" /> 
               </div>
            )
         })
      
      
   

   )
}

export default Cards