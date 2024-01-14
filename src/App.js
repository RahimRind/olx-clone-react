// App.js
// import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
// import { Router } from 'react-router-dom';
// import Dashboard from './dashbord';
import Router from './config/router'
// import Details from './config/views/CardDetails'
// import Dashboard from './config/views/Dashboard';

function App() {

  return (
    <div>
      
    <div>
      <Header />
    </div>


<Router/>  
{/* <Dashboard/> */}
    
    <br />
    {/* <Router/> */}
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
