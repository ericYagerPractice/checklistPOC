import React, {useState, useEffect} from 'react'
import { Button, Dimmer, Form, Grid, Header, Image, Loader, Message, Modal, Segment } from 'semantic-ui-react'
import GLIcon from '../../static/images/GLIfullsize.png'
import {emailValidation, validationRegex } from '../../functions/dataValidations'
import {passwordErrorMessage, passwordMismatchMessage, usernameLengthValidationMessage,emailFormatValidationMessage} from '../../functions/errorMessages'
import { signUp, signIn, resendConfirmationCode } from '../../functions/authentication'
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { Redirect } from 'react-router-dom'
import {createUser} from '../../graphql/mutations'

let signupInfoTemplate = {
    username: "",
    password: "",
    email: ""
}

function CreateAccountForm(){
    const [amplifyFormData, updateAmplifyForm] = useState(signupInfoTemplate)
    const [verificationCode, updateverificationCode] = useState(null)
    const [passwordsMatch, updatePasswordMatch] = useState(false)
    const [passwordValidation, updatepasswordValidation] = useState(false)
    const [validEmail, updatevalidEmail] = useState(emailValidation(amplifyFormData.email))
    const [formSubmission, updateformSubmission] = useState(false)
    const [showConfirmationModal, updateConfirmationModal] = useState(false)
    const [redirect, updateRedirect] = useState(false)

    function validatePassword(passwordInput){
        if(validationRegex.test(passwordInput)){
            updatepasswordValidation(false)
            updateAmplifyForm({...amplifyFormData, password:passwordInput})
        } else{
            updatepasswordValidation(true)
        }
    }

    async function retrieveCurrentSession(){
        await Auth.currentAuthenticatedUser()
        .then(()=>{
            updateRedirect(true)
        })
        .catch(error=>(console.log(error)))
      }

    async function SubmitFormDataToAmplify(){
        updateformSubmission(true)
        try{
            await signUp(amplifyFormData)
            .then(updateConfirmationModal(true))
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        retrieveCurrentSession()
      })

    async function SubmitFormDataToAPI(){
        try{
            await API.graphql(graphqlOperation(createUser), {input: {username: amplifyFormData.username, email: amplifyFormData.email}})
        } catch(error){
            console.log(error)
        }
    }

    async function SubmitVerificationCodeToAmplify(){
        updateformSubmission(true)
        try{
            await Auth.confirmSignUp(amplifyFormData.username, verificationCode)
            .then(signIn(amplifyFormData))
            .then(SubmitFormDataToAPI())
            .then(window.location.reload())
            .catch(error=>{
                console.log("Error validating account", error)
            })
        } catch(error){
            console.log(amplifyFormData.username, error)
        }
    }

    return(
        <>
            <Segment>
                <Dimmer active={formSubmission}>
                    <Loader indeterminate>Submitting</Loader>
                </Dimmer>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 600}}>
                        <Header as='h2' color='black' textAlign='center'>
                        <Image src={GLIcon} style={{height:'25vh', width:'25vh' }} /> Create New Account
                        </Header>
                        <Form 
                            size='large'
                            onSubmit={()=>SubmitFormDataToAmplify()}
                        >
                            <Segment stacked>
                                <Form.Input 
                                    fluid 
                                    icon={(amplifyFormData.username.length>=7) ? 'check circle' : 'user circle' }
                                    iconPosition='left' 
                                    placeholder='User Name' 
                                    onChange={event=>{
                                        updateAmplifyForm({...amplifyFormData, username:event.target.value})
                                    }}
                                />
                                
                                <Form.Input
                                    fluid icon={validEmail ? 'check circle' : 'user'} 
                                    iconPosition='left' 
                                    placeholder='E-mail address' 
                                    onChange={event=>{
                                            updateAmplifyForm({...amplifyFormData, email:event.target.value})
                                            updatevalidEmail(emailValidation(event.target.value))
                                    }}
                                />
                                
                                <Form.Input
                                    fluid
                                    icon={(validationRegex.test(amplifyFormData.password) && passwordsMatch) ? 'check circle' : 'lock'}
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    autoComplete="off"
                                    onChange={event=>validatePassword(event.target.value)}
                                />
                                
                                <Form.Input
                                    fluid
                                    icon={(validationRegex.test(amplifyFormData.password) && passwordsMatch) ? 'check circle' : 'lock'}
                                    iconPosition='left'
                                    placeholder='Confirm Password'
                                    type='password'
                                    autoComplete="off"
                                    onChange={event=>updatePasswordMatch(event.target.value===amplifyFormData.password)}
                                />

                                <Button 
                                    color='black' 
                                    disabled={!passwordsMatch} 
                                    fluid 
                                    size='large'
                                    type='submit'
                                >
                                    Login
                                </Button>

                                {(amplifyFormData.email.length>1 && !emailValidation(amplifyFormData.email)) && emailFormatValidationMessage()}
                                {(amplifyFormData.username.length<7 && amplifyFormData.username.length>1) && usernameLengthValidationMessage()}
                                {passwordValidation && passwordErrorMessage()}
                                {(!passwordsMatch && amplifyFormData.password.length>6)  && passwordMismatchMessage()}
                                {redirect && (
                                    <Redirect 
                                        to={{
                                            pathname: '/'
                                        }}
                                    />
                                )}
                            </Segment>
                        </Form>
                        <Message>
                        Already have an account? <a href='/Login'>Log in</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Segment>

            <Modal
                onClose={() => updateConfirmationModal(false)}
                onOpen={() => updateConfirmationModal(true)}
                open={showConfirmationModal}
            >
                <Modal.Header>Check email for validation code</Modal.Header>
                <Modal.Content>
                    <Form
                        onSubmit={()=>SubmitVerificationCodeToAmplify()}
                    >
                        <Form.Field>
                            <label>Validation Code</label>
                            <input 
                                placeholder='Validation Code From Email' 
                                onChange={event=>updateverificationCode(event.target.value)}
                            />
                        </Form.Field>
                        <Button positive type='submit'>Submit</Button>
                    </Form>
                    <Message>
                        <p>Didn't receive the code?</p> <Button secondary onClick={()=>resendConfirmationCode()}> Send code again </Button>
                    </Message>
                </Modal.Content>
                <Modal.Actions>
                <Button onClick={() => updateConfirmationModal(false)}>Cancel</Button>
                
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default CreateAccountForm