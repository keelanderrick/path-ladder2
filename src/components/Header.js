import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import LadderSelector from './LadderSelector'
import NavItem from 'react-bootstrap/NavItem'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.changeLimit = this.changeLimit.bind(this);
  }

  render () {
    return (
          <Navbar bg="dark" variant="dark" className="Header">
              <Navbar.Brand href="">Path of Exile Ladder</Navbar.Brand>
              <Nav>
                <Navbar.Text>Select Ladder: </Navbar.Text>
                <LadderSelector selectedLadder={this.props.selectedLadder} onLadderChange={this.props.onLadderChange} ladders={this.props.ladders} />
              </Nav>
              <Nav>
                <Navbar.Text> Entries per page: </Navbar.Text>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle variant="secondary" id="ladder-selector">
                    {this.props.ladderLimit}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                        <Dropdown.Item as="button" key={20} value={20} onClick={this.changeLimit}>20</Dropdown.Item>
                        <Dropdown.Item as="button" key={50} value={50} onClick={this.changeLimit}>50</Dropdown.Item>
                        <Dropdown.Item as="button" key={100} value={100} onClick={this.changeLimit}>100</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
          </Navbar>
    )
  }

  changeLimit(e) {
    this.props.onLimitChange(e.target.value);
  }
}

export default Header;
