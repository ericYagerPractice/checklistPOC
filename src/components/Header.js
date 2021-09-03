import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    var currentURL = window.location.pathname
    

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
         
        </Menu>
      </Segment>
    )
  }
}
