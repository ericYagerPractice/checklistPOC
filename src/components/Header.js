import React, { useState, useEffect } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Auth } from 'aws-amplify';
import { Button } from 'semantic-ui-react'
import { signOut } from '../functions/authentication';

export default function Header() {
  const [currentSession, updatecurrentSession] = useState("")
  var currentURL = window.location.pathname

  async function retrieveCurrentSession(){
    await Auth.currentAuthenticatedUser()
    .then((userInfo)=>{
      updatecurrentSession(userInfo.username)
    }
    )
    .catch(error=>(console.log(error)))
  }

  useEffect(() =>{
    retrieveCurrentSession()
  })

  return (
    <Segment inverted>
      <Menu inverted fixed='top' style={{ minHeight: 45 }}>
        <Menu.Item
          name='home'
          active={currentURL === '/'}
          href="/"
        />
        <Menu.Item
          name='createSchedule'
          active={currentURL === '/CreateSchedule'}
          href='/CreateSchedule'
        />
        <Menu.Menu position='right'>
          <div className='ui right aligned'>
            {
              currentSession==="" ? 
              <>
              <Button 
                primary
                href="/login"
              >Sign In
              </Button>
              <Button 
                secondary
                href="/CreateAccount"
              >Sign Up
            </Button>
            </>
              : 
                <>
                  <Button 
                    primary
                    onClick={()=>signOut()}
                  >Sign {currentSession} out
                  </Button>
                </> 
              }
          </div>
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}
