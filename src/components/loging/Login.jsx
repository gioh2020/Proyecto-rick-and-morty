import {useState} from 'react'
import setErrorUser from './setError'




function Login (props){
    const [user, setUser] =  useState({
        email:'',
        password:''
    })

    const [userError, setUserError ] = useState({
        email:'',
        password:''
    })

    const handleUser=(event=>{
        setUser({...user,
            [event.target.name]: event.target.value
        }
        );

            setUserError(setErrorUser({
                ...user,[event.target.name]: event.target.value}))    


            })

     const handleSubmit= (event=>{
        event.preventDefault()
        props.userValidate(user)
     })
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder={'Escribe tu email'} 
                name='email'  
                onChange={handleUser}
                value ={user.email}  />
                <p>{userError.email && userError.email }</p>

                <input 
                type="password" 
                placeholder={'Escribe tu contraseña'} 
                name='password' 
                onChange={handleUser}
                value= {user.password}/>
                <p>{userError.password && userError.password }</p>
                

                <button type='submit'>Login</button>
            </form>
        </div>


)




}


export default Login