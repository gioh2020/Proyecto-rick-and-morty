
const initialState = {
    characters: [],
    favorites: [],
    clocks: []
}


function rootReducer (state = initialState, action){

    switch(action.type){
        case "GET_CHARACTERS":
            let copyCharacters = [...state.characters];
            if(action.payload){
                let exist = copyCharacters.some(element => element.id === action.payload.id);
                let existFav = state.favorites.find(element => element.id === action.payload.id)
                console.log(existFav)
                if(exist){
                  return  alert('el personaje ya esta en la lista')
                }
                if(existFav){
                    copyCharacters.push(existFav)
                }else{
                    let addAtribute = {...action.payload, fav: false};
                    copyCharacters.push(addAtribute)
                } 
            }
              
            return{
                ...state,
                characters: copyCharacters
                 
            }
            case "CHANGE_FAV":

                const newArrCharacters = []
               
                const copyCharacterss = state.characters
                if(action.payload[1] === "false"){
                    
                    copyCharacterss.map(element=>{
                        if(element.id == action.payload[0]){
                
                            newArrCharacters.push({...element, fav:true})
                        }else{
                            newArrCharacters.push(element)
                        }
                    })
                }
                if(action.payload[1] === "true"){
                    copyCharacterss.map(element=>{
                        if(element.id == action.payload[0]){
                
                            newArrCharacters.push({...element, fav:false})
                        }else{
                            newArrCharacters.push(element)
                        }
                    })  
                }

                const newArrFavCharacters = newArrCharacters.filter(element => element.fav === true)


                return{
                    ...state,
                    characters: newArrCharacters,
                    favorites: newArrFavCharacters 
                }
                case "DELETE_CHARACTERS":
                    const newArrDeleteCharacters = state.characters.filter(element => element.id !== action.payload )
                  
                    return {
                        ...state,
                        characters: newArrDeleteCharacters,             
                }
                    case "DELETE_FAVORITE":
                        const copyFavorite = state.favorites
                        const copyCharater = []
                         state.characters.map(element=>{
                            if(element.id === action.payload){
                                copyCharater.push({...element, fav: false})
                            }else{

                                copyCharater.push(element)
                            }
                         })
                        const newArrFavorites = copyFavorite.filter(element => element.id !== action.payload)
                        return {
                            ...state,
                            characters: copyCharater,
                            favorites: newArrFavorites              
                    }
                
                       
                        
            default:
                return {...state}   

    }
}


 export default rootReducer