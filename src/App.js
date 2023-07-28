import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
