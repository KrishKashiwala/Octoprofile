import './scss/app.css'
import FormContainer from './components/FormContainer';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Route path='/' exact component={FormContainer} />
      <Route path='/user' exact component={Profile} />
    </Router>
  )
}

export default App;
