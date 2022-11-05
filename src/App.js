import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import MundoRyM from './components/mundoR&M/MundoR&M.jsx'
import {useState} from 'react'



function App () {

  const [characters, setCharacters] = useState('')

  function searchCharacters(userId){
    console.log('este es tu id' +userId)
    fetch(`https://rickandmortyapi.com/api/character/${userId}`) //${userId}
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });


  }
  
 console.log('esto 1 '+ characters )

  return (
    <div className='App' style={{ padding: '25px', background: 'white' }}>
      <div>
        <SearchBar searchCharacters={searchCharacters}/>
        {/* <Cards characters = {characters}/> */}
      </div>
    
     
    </div>
  )
}

export default App
