import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import GLIcon from '../../static/images/GLIfullsize.png'

function LoginForm(){
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600}}>
        <Header as='h2' color='black' textAlign='center'>
          <Image src={GLIcon} style={{height:'25vh', width:'25vh' }} /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
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

export default LoginForm