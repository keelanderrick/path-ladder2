import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
import _ from 'lodash'

class CharacterGems extends Component {
    state = {
        items: this.props.items
    }

    render () {
        return(
            <div className="gems">
                {this.state.items.map((item) => {
                    if(item.hasOwnProperty('socketedItems') && item.inventoryId !== 'Belt') {
                        return(this.renderGems(item))
                    }
                    return(null)
                })}
            </div>
        )
    }

    renderGems(item) {
        var groups = _(item.socketedItems).groupBy(item.socketedItems, function(x) {
            return(item.sockets[x.socket].group)
        }).map(function(x) {
            return(x);
        }).value()

        return (
            <div className="gem-group">
                <div className="gem-group-item-slot">{item.inventoryId}</div>
                {groups.map((group) => {
                    return(
                        <div className="linked-gems">
                            {group.map((gem) => {
                                return(<div className="gem"><Image style={{'width': '32px', 'margin-right': '5px'}} src={gem.icon}></Image>{gem.typeLine}</div>)
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CharacterGems;