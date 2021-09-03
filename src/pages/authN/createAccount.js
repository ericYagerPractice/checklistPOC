import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import GLIcon from '../../static/images/GLIfullsize.png'

let signupInfoTemplate = {
    username: "",
    password: "",
    attributes: {
        email: ""
    }
}

function CreateAccountForm(){

    const [amplifyFormData, updateAmplifyForm] = useState(signupInfoTemplate)

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600}}>
            <Header as='h2' color='black' textAlign='center'>
            <Image src={GLIcon} style={{height:'25vh', width:'25vh' }} /> Create New Account
            </Header>
            <Form size='large'>
            <Segment stacked>
                <Form.Input fluid icon='user circle' iconPosition='left' placeholder='User Name' />
                
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />
                
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Confirm Password'
                    type='password'
                />

                <Button color='black' fluid size='large'>
                Login
                </Button>
            </Segment>
            </Form>
            <Message>
            New to us? <a href='/CreateAccount'>Sign Up</a>
            </Message>
        </Grid.Column>
        </Grid>
    )
}

export default CreateAccountForm