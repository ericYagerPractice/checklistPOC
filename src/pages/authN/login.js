import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import GLIcon from '../../static/images/GLIfullsize.png'
import { signIn } from '../../functions/authentication'
import { Redirect } from 'react-router-dom'

function LoginForm(){
  const [loginData, updateloginData] = useState({username: null, password: null})
  const [redirect, updateRedirect] = useState(false)

  async function SubmitLoginDataToAmplify(){
    try{
        await signIn(loginData)
        .then(updateRedirect(true))

    } catch(error){
        console.log("ERROR", error)
    }
  }

  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600}}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src={GLIcon} style={{height:'25vh', width:'25vh' }} /> Log-in to your account
        </Header>
        <Form 
          size='large'
          onSubmit = {()=>SubmitLoginDataToAmplify()}
        >
          <Segment stacked>
            <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='Username' 
              onChange = {event=>updateloginData({...loginData, username: event.target.value})}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange = {event=>updateloginData({...loginData, password: event.target.value})}
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
      {redirect && (
          <Redirect 
              to={{
                  pathname: '/'
              }}
          />
      )}
    </Grid>
  )
}

export default LoginForm