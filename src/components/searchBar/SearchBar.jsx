
import React from "react";
import {useState} from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCharacters } from "../../actions";







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
         return alert('Ingresa un valor entre 1 y 826')
      }

      setUserId(event.target.value)
      
     })
     const handleRandom =() =>{
      const random = Math.ceil(Math.random()* 826)
      console.log(typeof random)
      dispatch(getCharacters(random))


     }

   return (
      <div>

         <input value={userId}  id="search" type='number' onChange={handleInput} placeholder={'Escribe un ID numerico'}/>
         <button onClick={handleClick}>Agregar por ID</button> 
         <button onClick={handleRandom}>Random</button>

      </div>
   );
}