import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


class Ladder extends React.Component {
    render () {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Level</th>
                        <th>Character</th>
                        <th>Ascendancy</th>
                        <th>Account</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.entries.map((entry) => {
                        return(
                            <tr key={entry.character.name}>
                                <th>{entry.rank}</th>
                                <th>{entry.character.level}</th>
                                <th><Button value={entry} className="ladder-character-name" variant="link" onClick={this.selectCharacter.bind(this, entry)}>{entry.character.name}</Button></th>
                                <th>{entry.character.class}</th>
                                <th><Button value={entry.account.name} variant="link" target="_blank" href={`https://www.pathofexile.com/account/view-profile/${entry.account.name}`}>{entry.account.name}</Button></th>
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