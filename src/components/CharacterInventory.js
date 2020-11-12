import React, {Component} from 'react';
import InventoryItem from './InventoryItem';

class CharacterInventory extends Component {
    state = {
        items: this.props.items
    }

    render () {
        this.flaskIndex = 0;
        return(
            <div style={{backgroundColor: 'black'}}>
                {this.state.items.map((item) => {
                    if(item.inventoryId === 'Flask') {
                        this.flaskIndex++;
                        return(<InventoryItem key={item.id} item={item} flaskIndex={this.flaskIndex} />)
                    }
                    return(<InventoryItem key={item.id} item={item} flaskIndex='' />)
                })}
            </div>
        )
    }
}

export default CharacterInventory;