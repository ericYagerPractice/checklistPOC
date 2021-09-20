import React from 'react'
import { Menu, Segment, Button} from 'semantic-ui-react'
import { AccountOptions, Notifications } from './Header/Dropdowns';
import {listUsers} from '../graphql/queries'
import { API } from 'aws-amplify';

export default function Header() {

  var currentURL = window.location.pathname
  const testUser = "qqqqqqq"

  async function mockNotification(){
    let mockQuery = await API.graphql({query: listUsers, variables:{
      filter: {username: {eq: testUser}}
    }})
    console.log(mockQuery)
  }

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
          <Button onClick={()=>mockNotification()}>Click this to do stuff</Button>
          <Menu.Item>
            <AccountOptions />
          </Menu.Item>
          <Menu.Item>
            <Notifications />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}
