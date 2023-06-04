import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
//import Approutes from './routes/Approutes';
import Approutes from './routes/Approutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Approutes />
      </Router>
    </div>
  );
}

export default App;
