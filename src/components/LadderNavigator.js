import React from 'react'
import Button from 'react-bootstrap/Button'

class LadderNavigator extends React.Component {


    render() {
        return(
            <div className="ladder-navigator">
                <Button variant="secondary" onClick={this.changePage.bind(this,1)}>1</Button>
                <Button variant="secondary" onClick={this.changePage.bind(this,2)}>2</Button>
                <Button variant="secondary" onClick={this.changePage.bind(this,3)}>3</Button>
            </div>
        )
    }

    changePage (page) {
        this.props.onPageChange(page)
    }
}

export default LadderNavigator;