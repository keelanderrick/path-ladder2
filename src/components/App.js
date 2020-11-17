import React from 'react';
import Header from './Header'
import Ladder from './Ladder'
import CharacterPanel from './CharacterPanel'
import LadderNavigator from './LadderNavigator'
import '../custom.scss'
import fetch from 'node-fetch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onLadderChange = this.onLadderChange.bind(this);
    this.onCharacterSelect = this.onCharacterSelect.bind(this);
    this.onCloseCharacterPanel = this.onCloseCharacterPanel.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onLimitChange = this.onLimitChange.bind(this);
  }

  state = {
    ladders: [],
    selectedLadder: 'Standard',
    entries: [],
    selectedCharacter: '',
    selectedAccount: '',
    currentPage: 1,
    ladderLimit: 20
  }

  render () {
      return (
      <div className="App">
        <Header ladderLimit={this.state.ladderLimit} ladders={this.state.ladders} selectedLadder={this.state.selectedLadder} onLimitChange={this.onLimitChange} onLadderChange={this.onLadderChange} />        
        <Ladder entries={this.state.entries} onCharacterSelect={this.onCharacterSelect} />
        <LadderNavigator onPageChange={this.onPageChange} currentPage={this.state.currentPage}/>        
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


  onPageChange (page) {
    fetch(`https://guarded-falls-96614.herokuapp.com/http://api.pathofexile.com/ladders/${this.state.selectedLadder}?offset=${(page-1)*this.state.ladderLimit}&limit=${this.state.ladderLimit}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          entries: data.entries,
          currentPage: page
        })
      })
      .catch(console.log)
  }

  onLimitChange (limit) {
    fetch(`https://guarded-falls-96614.herokuapp.com/http://api.pathofexile.com/ladders/${this.state.selectedLadder}?limit=${limit}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          entries: data.entries,
          ladderLimit: limit
        })
      })
      .catch(console.log)
  }
}

export default App;
