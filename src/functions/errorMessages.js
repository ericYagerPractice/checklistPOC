import { Message } from 'semantic-ui-react'

export function passwordErrorMessage(){
    return(
        <>
            <Message negative>
                <Message.Header>Invalid Password</Message.Header>
                <p>
                    Your password must contain at least 8 characters including at least one letter, one number, and one special character ('%$#, etc')
                </p>
            </Message>
        </>
    )
}


export function passwordMismatchMessage(){
    return(
        <>
            <Message negative>
                <Message.Header>Password Mismatch</Message.Header>
                <p>
                    Password confirmation doesn't match password
                </p>
            </Message>
        </>
    )
}

export function usernameLengthValidationMessage(){
    return(
        <>
            <Message negative>
                <Message.Header>User name not long enough</Message.Header>
                <p>
                    User name must be at least 7 characters
                </p>
            </Message>
        </>
    )
}

export function emailFormatValidationMessage(){
    return(
        <>
            <Message negative>
                <Message.Header>Invalid Email Address</Message.Header>
                <p>
                    Enter a valid email address (e.g. 'John@gracieslist.com')
                </p>
            </Message>
        </>
    )
}
