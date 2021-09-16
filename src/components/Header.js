import React, { useState, useEffect } from 'react'
import { Icon, Menu, Segment, Dropdown } from 'semantic-ui-react'
import { Auth } from 'aws-amplify';
import { Button } from 'semantic-ui-react'
import { signOut } from '../functions/authentication';

export default function Header() {
  const [currentSession, updatecurrentSession] = useState("")

  const iconStylization= (
    <span>
      <Icon name='user' /> User Options
    </span>
  )


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
              <Dropdown 
                trigger={iconStylization}
              >
                <Dropdown.Menu>
                {
                  currentSession==="" ? 
                    <><Dropdown.Item text='Sign In' href="/login" />
                    <Dropdown.Item text='Sign Up' href="/CreateAccount" /></>
                  :
                  
                  <Dropdown.Item text="Sign Out" onClick={()=>signOut} />
                }

                </Dropdown.Menu>
              </Dropdown>
            
          </div>
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}
