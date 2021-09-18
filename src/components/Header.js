import React, { useState, useEffect } from 'react'
import { Icon, Menu, Segment, Dropdown } from 'semantic-ui-react'
import { Auth, Hub } from 'aws-amplify';

export default function Header() {
  const [userHasAuthenticated, updateAuthentication] = useState(false)

  const listener = (data) => {
    switch (data.payload.event) {
        case 'signIn':
            console.log('user signed in')
            updateAuthentication(true)
            break;
        case 'signOut':
            console.log('user signed out');
            updateAuthentication(false)
            break;
        default:
            break;
    }
  }

  const iconStylization= (
    <span>
      <Icon name='user' /> User Options
    </span>
  )

  var currentURL = window.location.pathname

  async function signUserOut(){
    await Auth.signOut()
    .catch(console.log("there was an error signing out"))
  }

  useEffect(() =>{
    Hub.listen('auth', listener);
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
                  userHasAuthenticated===false ? 
                    <><Dropdown.Item text='Sign In' href="/login" />
                    <Dropdown.Item text='Sign Up' href="/CreateAccount" /></>
                  :
                  
                  <Dropdown.Item text="Sign Out" onClick={()=>signUserOut()} />
                }

                </Dropdown.Menu>
              </Dropdown>
            
          </div>
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}
