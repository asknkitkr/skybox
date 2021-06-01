import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <Navbar />
      <AuthProvider>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
