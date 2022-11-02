import styles from './Card.module.css'


export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={styles.cardrick}>
         <button onClick={onClose}>X</button>
         <h2 className={styles.cardletra} >{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={styles.cardimage}  src={image} alt="" /> 
      </div>
   );
}
