export function setHook(key, value, hookFunction, hookVariable) {
    hookFunction({...hookVariable,[key]: value })
}

export function passwordValidation(password){
    let validationRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return validationRegex.exec(password)
}

export function emailValidation(email){
    const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidationRegex.test(String(email).toLowerCase());
}

export function usernameValidation(username){
    return(username.length>6)
}

export var validationRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/