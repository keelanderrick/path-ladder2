import React from 'react'
import fetch from 'node-fetch';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CharacterInventory from './CharacterInventory'

class CharacterPanel extends React.Component {
    state = {
        items: [],
        loaded: false,
        failedToLoad: false
    }

    render () {
        if(this.props.character === '')
            return(null)

        var body = null;

        if(this.state.loaded === false)
            body = <div style={{'display': 'flex', 'height': 'inherit', 'justifyContent': 'center', 'alignItems': 'center'}}>Loading items...</div>
        else if (this.state.failedToLoad === true)
            body = <div style={{'display': 'flex', 'height': 'inherit', 'justifyContent': 'center', 'alignItems': 'center'}}>Failed to load items, this account is likely private</div>
        else body = <CharacterInventory items={this.state.items} />

        return(
            <Modal style={{'maxWidth': '100%', 'maxHeight': '100%', 'overflow': 'auto'}} show={true} onHide={this.onClose.bind(this)} dialogClassName='character-panel'>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.character}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{'width': '600px', 'height': '531px'}}>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.onClose.bind(this)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    onClose (e) {
        this.setState({failedToLoad: false, loaded: false, items: []})
        this.props.onClose(e);
    }

    componentDidUpdate(prevProps) {
        if(this.props.account !== prevProps.account && this.props.account !== '')
            fetch(`https://guarded-falls-96614.herokuapp.com/https://www.pathofexile.com/character-window/get-items?accountName=${this.props.account}&character=${this.props.character}`)
                .then(res => res.json())
                .then((data) => {
                    if(data.hasOwnProperty('items'))
                        this.setState({items: data.items, loaded: true, failedToLoad: false})
                    else this.setState({failedToLoad: true, loaded: true})
                })
                .catch(console.log)
    }
}

export default CharacterPanel