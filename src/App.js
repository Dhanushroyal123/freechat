import Login from './components/login'
import Chat from './components/chat'
import SignUp from './components/signup'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/chat'>
            <Chat />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
