import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

const App = () => {

  return (
    <GlobalProvider>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>

      <Footer />
    </GlobalProvider>
  )

};

export default App;