import React from 'react'
import Table from 'react-bootstrap/Table'

class Ladder extends React.Component {
    render () {
        return (
            <Table style={{'marginBottom': '0'}} variant="dark" striped bordered hover>
                <thead>
                    <tr>
                        <th style={{'width': "10%"}}>Rank</th>
                        <th style={{'width': "10%"}}>Level</th>
                        <th style={{'width': "30%"}}>Character</th>
                        <th style={{'width': "20%"}}>Ascendancy</th>
                        <th style={{'width': "30%"}}>Account</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.entries.map((entry) => {
                            return(
                                <tr key={entry.character.name}>
                                    <th>{entry.rank}</th>
                                    <th>{entry.character.level}</th>
                                    <th><a href="/#" value={entry} className="ladder-character-name text-light underline" onClick={this.selectCharacter.bind(this, entry)}>{entry.character.name}</a></th>
                                    <th>{entry.character.class}</th>
                                    <th><a value={entry.account.name} className="text-light underline" target="_blank" rel="noopener noreferrer" href={`https://www.pathofexile.com/account/view-profile/${entry.account.name}`}>{entry.account.name}</a></th>
                                </tr> 
                            )
                    })}
                </tbody>
            </Table>
        )
    }

    selectCharacter (entry) {
        this.props.onCharacterSelect(entry.character.name, entry.account.name)
    }
}

export default Ladder;