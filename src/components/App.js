import React from 'react';
import Header from './Header'
import Ladder from './Ladder'
import CharacterPanel from './CharacterPanel'
import '../custom.scss'
import fetch from 'node-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLadderChange = this.onLadderChange.bind(this);
    this.onCharacterSelect = this.onCharacterSelect.bind(this);
    this.onCloseCharacterPanel = this.onCloseCharacterPanel.bind(this);
  }

  state = {
    ladders: [],
    selectedLadder: 'Standard',
    entries: [],
    selectedCharacter: '',
    selectedAccount: ''
  }

  render () {
      return (
      <div className="App">
        <Header ladders={this.state.ladders} selectedLadder={this.state.selectedLadder} onLadderChange={this.onLadderChange} />
        <Ladder entries={this.state.entries} onCharacterSelect={this.onCharacterSelect} />
        <CharacterPanel onClose={this.onCloseCharacterPanel} account={this.state.selectedAccount} character={this.state.selectedCharacter}/>
      </div>
    )
  }

  componentDidMount () {
    fetch('http://api.pathofexile.com/leagues')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          ladders: data
        })
      })
      .catch(console.log)

      this.onLadderChange ("Standard")
  }

  onLadderChange (newLadder) {
    fetch(`https://guarded-falls-96614.herokuapp.com/http://api.pathofexile.com/ladders/${newLadder}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          entries: data.entries
        })
      })
      .catch(console.log)

      this.setState({selectedLadder: newLadder})
  }
  
  onCharacterSelect (character, account) {
    this.setState({
      selectedCharacter: character,
      selectedAccount: account
    });
  }

  onCloseCharacterPanel (e) {
    this.setState({
      selectedCharacter: '',
      selectedAccount: ''
    })
  }
}

export default App;
