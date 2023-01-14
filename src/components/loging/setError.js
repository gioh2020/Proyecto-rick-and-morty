const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
function setErrorUser(data){
    let errors = {}
    if(!data.email) errors.email ='Debes escribir un email';
    else if(!regexEmail.test(data.email)) errors.email = 'Ingresa un email valido';

    if(!data.password) errors.password ='Debes escribir un password';
    else if(!regexPassword.test(data.password)) errors.password = 'Ingresa un password valido';
    return errors;
}



export default setErrorUser