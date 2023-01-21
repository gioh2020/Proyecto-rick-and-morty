
import React from "react";
import {useState} from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCharacters } from "../../actions";
import styles from "./SearchBar.module.css"







export default function SearchBar(props) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [userId, setUserId] = useState(0)



   const handleClick = ((event)=>{
      dispatch(getCharacters(userId))
      setTimeout(() => {
         navigate('/home')
      }, 800);
    })
   const handleInput = ((event)=>{
      if(event.target.value > 826 ||  event.target.value < 1){
         return setUserId('valor no valido')
      }

      setUserId(event.target.value)
      
     })
   const handleRandom =() =>{
   const random = Math.ceil(Math.random()* 826)
      dispatch(getCharacters(random))
     }

   return (
      <div className={styles.searchBar}>

         <input value={userId}  id="search" type='number' onChange={handleInput} placeholder={'From 1 to 826'}/>
         <button onClick={handleClick}>Ad by ID</button> 
         <button onClick={handleRandom}>Random</button>

      </div>
   );
}