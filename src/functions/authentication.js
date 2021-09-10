import { Auth } from 'aws-amplify';

export async function signUp(signupInput) {
    let username = signupInput.username;
    let password = signupInput.password;
    let email = signupInput.email;
    
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export async function confirmSignUp(username, code) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}
