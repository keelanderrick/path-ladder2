import React from 'react';
import LadderSelector from './LadderSelector'

class Header extends React.Component {
    render () {
      return (
            <div className="Header">
                <div className="Title">Path of Exile Ladder</div>
                <LadderSelector onLadderChange={this.props.onLadderChange} ladders={this.props.ladders} />
            </div>
      )
  }
}

export default Header;
