import { Products, Navbar, Cart, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Context from './context';

const App = () => {


  return (
    <Router>
        <Context>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'lightgray' }}>
            <Navbar totalItems={4} />
            <Switch>
              <Route exact path="/"><Products/></Route>
              <Route exact path="/cart"><Cart/></Route>
            </Switch>
            <Footer />
        </div>
        </Context>
    </Router>
  );
};

export default App;
