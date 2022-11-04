
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import characters from './data.js'
import MundoRyM from './components/mundoR&M/MundoR&M.jsx'



function App () {
  return (
    
    <div className='App' style={{ padding: '25px', background: 'white' }}>
      <div>
      <MundoRyM/>
        <SearchBar onSearch={(characterID) => window.alert(characterID)}/>
      </div>
    
      <hr />
      <div>
        {/* <Cards characters={characters}/> */}
      </div>
      <hr />
    </div>
  )
}

export default App
