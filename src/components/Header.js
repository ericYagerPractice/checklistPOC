import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted fixed='top' style={{ minHeight: 45 }}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='create'
            active={activeItem === 'Create'}
            onClick={this.handleItemClick}
            href='/Create'
          />
          <Menu.Item
            name='view'
            active={activeItem === 'View'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
