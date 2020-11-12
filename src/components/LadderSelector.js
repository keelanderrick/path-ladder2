import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import NavItem from 'react-bootstrap/NavItem'

class LadderSelector extends React.Component {
    constructor(props) {
        super(props);
        this.changeLadder = this.changeLadder.bind(this);
    }

    render () {
        return (
            <Dropdown as={NavItem}>
                <Dropdown.Toggle variant="secondary" id="ladder-selector">
                    {this.props.selectedLadder}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {this.props.ladders.map((ladder) => {
                        return(<Dropdown.Item as="button" key={ladder.id} value={ladder.id} onClick={this.changeLadder}>{ladder.id}</Dropdown.Item>)
                    })}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    changeLadder (e) {
        this.props.onLadderChange(e.target.value);
    }
}

export default LadderSelector;