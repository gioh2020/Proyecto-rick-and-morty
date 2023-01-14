import {NavLink} from "react-router-dom"
function NavBar(props){
    return(
        <div>
        <NavLink to={'/home'}>home</NavLink>
        <NavLink to={"/about"}>about</NavLink>
        <NavLink to={"/favorites"}>favorites</NavLink>



        
        
        </div>

    )
}


export default NavBar