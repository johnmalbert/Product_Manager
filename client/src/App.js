import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router'
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Update path="/products/:id/update" />
        <Detail path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
