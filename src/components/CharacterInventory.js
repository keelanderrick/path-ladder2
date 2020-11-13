import React, {Component} from 'react';
import InventoryItem from './InventoryItem';

class CharacterInventory extends Component {
    state = {
        items: this.props.items
    }

    render () {
        return(
            <div className="character-items">
                {this.state.items.map((item) => {
                    if(item.inventoryId !== 'Flask') {
                        return(<InventoryItem key={item.id} item={item} />)
                    }
                    return(null)
                })}
                <div className="flasks">
                    {this.state.items.map((item) => {
                        if(item.inventoryId === 'Flask') {
                            return(<InventoryItem key={item.id} item={item} />)
                        }
                        return(null)
                    })}
                </div>
            </div>
        )
    }
}

export default CharacterInventory;