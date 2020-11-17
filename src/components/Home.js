import {Route} from 'react-router-dom'
import React from 'react'
import App from './App'

class Home extends React.Component {
    render() {
        return(<div>
            <Route exact path={`/home`} render={<App />} />
        </div>)
    }
}

export default Home;