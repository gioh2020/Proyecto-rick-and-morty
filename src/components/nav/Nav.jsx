import {NavLink} from "react-router-dom"
import styles from "./Nav.module.css"
function NavBar(props){
    return(
        <div className={styles.navBar}>
        <NavLink className={styles.navLink} to={'/home'}>Home</NavLink>
        <NavLink className={styles.navLink} to={"/favorites"}>Favorites</NavLink>        
        <NavLink className={styles.navLink} to={"/about"}>About</NavLink>
        </div>

    )
}


export default NavBar