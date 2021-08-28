import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div>
        <main >
          <Header />
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
