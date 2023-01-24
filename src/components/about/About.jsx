import React from "react";
import rt from "./rt.png"
import js from "./js.png"
import node from "./node.png"
import redux from "./redux.png"
import perfil from "./perfil.jpg"
import styles from "./About.module.css"





function About() {

    return(
        <div className={styles.principalDiv}>
            <div className={styles.card} >
                <a className={styles.textNames} href="https://gioh2020.github.io/">
                    <h2 className={styles.textName} >Giovanny Vasquez</h2> 
                </a>

                <img className={styles.image} src={perfil} alt="" /> 
                <hr className={styles.line} />
                <h2 className={styles.textAttribute1}>Human</h2>
                <h2 className={styles.textAttribute}>Male</h2>
            </div>

            <div className={styles.tecnologies}>
                <p className={styles.text}>Hola mi nombre es: Giovanny Vasquez, estudiante del bootcamp Soy Henry, y  quiero hablarles de mi primer poryecto, este fue realizado con las tecnologias: JavaScript, React, Redux, NodeJS, CSS</p>
                <div className={styles.imageDiv}>
                <img src={js} alt="" />
                <img src={rt} alt="" />
                <img src={node} alt="" />
                <img src={redux} alt="" />
                </div>
            </div>
        </div>
    )

    
}



export default About