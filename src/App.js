import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CustomerView from './components/CustomerView.jsx';
import AgentView from './components/AgentView.jsx';
import './App.css'; 
import logo from './logo.png';

function App() {
  return (
    <>
    <div className="logo-container">
      <div className="image-container">
        <img src={logo} alt="Branch International" className="centered-image" />
      </div>
    </div>
    <h2 style={{textAlign : 'center'}}>Welcome to Branch International Chat Support</h2>
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/customer">Customer</Link>
            </li>
            <li>
              <Link to="/agent">Agent</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/customer" element={<CustomerView />} />
        <Route path="/agent"  element={<AgentView />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
