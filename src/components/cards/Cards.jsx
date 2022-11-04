import styles from "./Cards.module.css";

export default function Cards(props) {
   console.log(props)
   return(
      <div >
      {
        props.characters.map((e)=>{
           return (
            <div className={styles.card}>
               <button onClick={e.onClose}>X</button>
               <h2>{e.name}</h2>
               <h2>{e.species}</h2>
               <h2>{e.gender}</h2>
               <img  src={e.image} alt="" /> 

            </div>
           )
         })
      }
      </div>
   

   )
}
