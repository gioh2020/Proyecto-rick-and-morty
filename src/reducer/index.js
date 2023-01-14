import { type } from "@testing-library/user-event/dist/type";

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
                
                    case 'FILTER_BY_CONTINENT':
                      
                        const copyCountries = state.allcountries
                        const continentFilter = action.payload === "All"? state.allcountries :
                        copyCountries.filter(continent => continent.continent === action.payload)
                        return{
                            ...state,
                            countries: continentFilter
                        }
                        case 'FILTER_BY_NAME':
                            let  sortCountries = []
                            if(action.payload === 'nameAz'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.name > b.name) {
                                        return 1
                                    }
                                    if (a.name < b.name) {
                                        return -1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'nameZa'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.name > b.name) {
                                        return -1
                                    }
                                    if (a.name < b.name) {
                                        return +1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'populationMin'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.population > b.population) {
                                        return 1
                                    }
                                    if (a.population < b.population) {
                                        return -1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'populationMax'){
                                sortCountries =  state.countries.sort(function(a, b){
                                    if (a.population > b.population) {
                                        return -1
                                    }
                                    if (a.population < b.population) {
                                        return +1
                                    }
                                    return 0
                                })
                            }
                            if(action.payload === 'reset'){
                                sortCountries = state.countries
                            }
                            return {
                                ...state,
                                countries: sortCountries
                            }
                            case "GET_CLOCKS":
                                return {
                                    ...state,
                                    clocks: action.payload                
                                }
                                case 'FILTER_BY_ACTIVITY':
                                    const copyActivity = state.allcountries
                                    const activityFilter = []
                                    if(action.payload){
                                        copyActivity.forEach(activity => {
                                            activity.activities?.forEach(element => {    
                                              if(element.name === action.payload){
                                                activityFilter.push(activity)
                                              }  
                                          });
                                         
                                        })
                                    }
                                    return{
                                        ...state,
                                        countries: activityFilter
                                    }        
                        
            default:
                return {...state}   

    }
}


 export default rootReducer