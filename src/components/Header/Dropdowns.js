import React, { useState, useEffect } from 'react'
import { Icon, Dropdown } from 'semantic-ui-react'
import { Auth, Hub } from 'aws-amplify';

export function AccountOptions() {

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

  const userOptionsStylization= (
    <span>
      <Icon name='user' />
    </span>
  )

  async function signUserOut(){
    await Auth.signOut()
    .catch(console.log("there was an error signing out"))
  }

  async function checkCurrentSession(){
    await Auth.currentSession()
    .then(()=>updateAuthentication(true))
    .catch((error)=>console.log("There was an error: ", error))
  }

  useEffect(() =>{
    checkCurrentSession()
    Hub.listen('auth', listener);
  })

  return (
        <div className='ui right aligned'>
            <Dropdown 
            trigger={userOptionsStylization}
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
  )
}

export function Notifications(){
    const notificationsStylization= (
        <span>
          <Icon name='bell' color='red'/>
          <Icon name='exclamation' color='red' />
        </span>
      )

      return (
        <div className='ui right aligned'>
            <Dropdown trigger={notificationsStylization} >
                <Dropdown.Menu>
                    <Dropdown.Item text="See Notifications" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
  )
}
