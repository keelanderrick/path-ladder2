import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

class LadderSelector extends React.Component {
    constructor(props) {
        super(props);
        this.changeLadder = this.changeLadder.bind(this);
    }

    render () {
        return (
            <div className="LadderSelector">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.props.ladders.map((ladder) => {
                            return(<Dropdown.Item as="button" key={ladder.id} value={ladder.id} onClick={this.changeLadder}>{ladder.id}</Dropdown.Item>)
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }

    changeLadder (e) {
        this.props.onLadderChange(e.target.value);
    }
}

export default LadderSelector;