import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LadderSelector from './LadderSelector'

class Header extends React.Component {
    render () {
      return (
            <Navbar bg="dark" variant="dark" className="Header">
                <Navbar.Brand href="">Path of Exile Ladder</Navbar.Brand>
                <Nav>
                  <LadderSelector selectedLadder={this.props.selectedLadder} onLadderChange={this.props.onLadderChange} ladders={this.props.ladders} />
                </Nav>
            </Navbar>
      )
  }
}

export default Header;
